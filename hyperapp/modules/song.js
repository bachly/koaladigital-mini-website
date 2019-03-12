import { h, app } from "hyperapp";
import * as DB from "./airtable";
import "./main.scss";

const state = {
  filters: {
    Speed: ""
  },
  songs: []
};

const actions = {
  fetchSongs: value => (state, actions) => {
    if (state.songs.length === 0) {
      const pageFunc = records => {
        const songs = records.map(r => ({
          id: r.id,
          fields: r.fields
        }));
        actions.loadSongs(songs);
      };

      DB.getSongs(pageFunc).then(result => {
        console.log("Done");
      });
    }
  },
  loadSongs: value => state => ({ songs: state.songs.concat(value) })
};

const view = (state, actions) => (
  <div oncreate={actions.fetchSongs}>
    <Filters />
    <SongList />
  </div>
);

const Filters = () => (state, actions) => {
  return (
    <div>
      <div>
        <label>
          <input type="radio" name="filter:speed" /> Fast
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="filter:speed" /> Slow
        </label>
      </div>
    </div>
  );
};

const SongList = () => (state, actions) => {
  const filteredSongs = state.songs.filter(({ id, fields }) => {
    if (state.filters["Speed"]) {
      return state.filters["Speed"] === fields["Speed"];
    }
    return true;
  });

  return (
    <ol>
      {filteredSongs.map(({ id, fields }) => {
        return (
          <li key={id}>
            <Song fields={fields} />
          </li>
        );
      })}
    </ol>
  );
};

const Song = ({ fields }) => (state, actions) => {
	const speedClass = fields["Speed"] ? `speed--${fields["Speed"].toLowerCase()}` : "";
	const readyClass = fields["Ready"] ? `ready--yes` : `ready--no`;

  return <div class={`song ${speedClass} ${readyClass}`}>
		<div class='indicator-1'>{fields["Ready"]}</div>
		{fields["Name"]}
	</div>;
};

app(state, actions, view, document.getElementById("root"));

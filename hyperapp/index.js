import { h, app } from "hyperapp";
import * as DB from "./airtable";

const state = {
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
    <SongList />
    <a href="#" onclick={actions.loadMore}>
      Load more
    </a>
  </div>
);

const SongList = () => (state, actions) => {
  return (
    <ol>
      {state.songs.map(({ id, fields }) => {
        return <li key={id}>{fields["Name"]}</li>;
      })}
    </ol>
  );
};

app(state, actions, view, document.getElementById("root"));

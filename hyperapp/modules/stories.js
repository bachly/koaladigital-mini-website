/* global Quill */

import { h, app } from "hyperapp";
import "./stories.scss";
import { db } from "./firebase";
import { Editor } from "./editor";

const views = {
  SearchView,
  CreateView,
  ItemView,
  EditView
};

const state = {
  SearchView: {
    suggestedTags: "",
    predicateWords: "",
    predicateTags: "",
    results: [],
    resultPages: 0
  },
  CreateView: {
    newTitle: "",
    newContent: "",
    suggestedTags: ""
  },
  ItemView: {
    item: ""
  },
  EditView: {
    itemId: "",
    updatedTitle: "",
    updatedContent: "",
    suggestedTags: ""
  },
  currentView: "SearchView",
  notification: {
    text: "",
    type: "",
    isVisible: false
  }
};

const actions = {
  SearchView: {
    dbSync: value => (previousState, actions) => {
      db.collection("stories").onSnapshot(function(querySnapshot) {
        var results = [];
        querySnapshot.forEach(function(doc) {
          results.push(doc.data());
        });
        actions.updateResults(results);
      });
    },
    updateResults: value => (previousState, actions) => {
      return {
        results: value
      };
    }
  },
  CreateView: {
    save: callback => (previousState, actions) => {
      // TODO: Add new item to DB
      callback();
    }
  },
  navigate: value => (previousState, actions) => {
    return {
      currentView: value
    };
  },
  createStory: value => (previousState, actions) => {
    db.collection("stories").add({
      title: previousState.newIllustration.title,
      content: previousState.newIllustration.content
    });
  }
};

const SearchView = () => (state, actions) => (
  <div id="SearchView" oncreate={() => actions.SearchView.dbSync()}>
    <menu>
      <input type="search" placeholder="Search" />
      <a href="#" onclick={() => actions.navigate("CreateView")}>
        Create
      </a>
    </menu>
    <main>
      <dl>
        {state.SearchView.results.map(result => (
          <dd>
            <div>
              <strong>{result.title}</strong>
              <p>{result.content}</p>
            </div>
          </dd>
        ))}
      </dl>
    </main>
  </div>
);

const CreateView = ({ onBack }) => (state, actions) => (
  <div id="CreateView">
    <menu>
      <a href="#" onclick={() => onBack()}>
        Cancel
      </a>
      <button onclick={() => actions.CreateView.save(onBack)}>Save</button>
    </menu>
    <main>
      <form>
        <fieldset>
          <input type="text" placeholder="Title" />
        </fieldset>
        <fieldset>
          <textarea rows="10" placeholder="Content" />
        </fieldset>
      </form>
    </main>
  </div>
);

const ItemView = () => (state, actions) => (
  <div id="ItemView">
    <menu>
      <a onclick={() => {}}>Edit</a>
    </menu>
  </div>
);

const EditView = () => (state, actions) => (
  <div id="EditView">
    <menu>
      <a onclick={() => {}}>Cancel</a>
      <a onclick={() => {}}>Save</a>
    </menu>
  </div>
);

const ErrorView = () => (state, actions) => {
  <div id="ErrorView">
    <menu>
      <a>
        <strong>Error</strong>
      </a>
    </menu>
  </div>;
};

const view = (state, actions) => {
  switch (state.currentView) {
    case "SearchView":
      return <SearchView />;
    case "CreateView":
      return <CreateView onBack={() => actions.navigate("SearchView")} />;
    default:
      return <ErrorView />;
  }
};

app(state, actions, view, document.getElementById("root"));

/* global Quill */

import { h, app } from "hyperapp";
import "./stories.scss";
import { db, addStory } from "./firebase";
import { countWords, MAX_WORDS, firstSentence } from "./pure-func";

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
    newContentWordCount: 0
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
    handleTitleChange: event => (previousStacte, actions) => {
      const newTitle = event.target.value || "";
      return {
        newTitle
      };
    },
    handleContentChange: event => (previousState, actions) => {
      const newContent = event.target.value || "";
      const newTitle = previousState.newTitle === "" ? firstSentence(event.target.value) : previousState.newTitle;
      const newContentWordCount = countWords(event.target.value || "");
      return {
        newTitle,
        newContent,
        newContentWordCount
      };
    },
    save: callback => (previousState, actions) => {
      addStory({
        title: previousState.newTitle,
        content: previousState.newContent
      });
      actions.reset();
      callback();
    },
    reset: () => (previousState, actions) => ({
      newTitle: "",
      newContent: "",
      newContentWordCount: 0
    })
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
        Create a story
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

const CreateView = ({ onBack }) => (state, actions) => {
  const tooManyWords = state.CreateView.newContentWordCount > MAX_WORDS;
  const emptyTitle = state.CreateView.newTitle === "";
  const emptyContent = state.CreateView.newContent === "";
  const preventSave = tooManyWords || emptyTitle || emptyContent;

  return (
    <div id="CreateView">
      <menu>
        <a href="#" onclick={() => onBack()}>
          Cancel
        </a>
        <button onclick={() => actions.CreateView.save(onBack)} disabled={preventSave ? "disabled" : ""}>
          Save
        </button>
      </menu>
      <main>
        <form>
          <fieldset>
            <input
              type="text"
              placeholder="Title"
              value={state.CreateView.newTitle}
              onchange={event => actions.CreateView.handleTitleChange(event)}
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Content"
              oninput={event => actions.CreateView.handleContentChange(event)}
              class={tooManyWords ? "error" : ""}
            />
          </fieldset>
          <fieldset>
            <p>
              {state.CreateView.newContentWordCount}/{MAX_WORDS} words
            </p>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

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

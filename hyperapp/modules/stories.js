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
    resultPages: 0,
    latestCreatedStoryID: ""
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
  withGlobalState: f => state => f(state),
  SearchView: {
    dbSync: value => (state, actions) => {
      db.collection("stories")
        .orderBy("timestamp", "desc")
        .onSnapshot(function(querySnapshot) {
          var results = [];
          querySnapshot.forEach(function(doc) {
            results.push({
              id: doc.id,
              ...doc.data()
            });
          });
          actions.updateResults(results);
        });
    },
    updateResults: value => (state, actions) => {
      return {
        results: value
      };
    }
  },
  CreateView: {
    init: ({ navigate }) => (state, actions) => {
      return {
        navigate
      };
    },
    handleTitleChange: event => (state, actions) => {
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
    save: () => (state, actions) => {
      addStory({
        title: state.newTitle,
        content: state.newContent
      }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        actions.reset();
        state.navigate("SearchView");
      });
    },
    reset: () => (state, actions) => ({
      newTitle: "",
      newContent: "",
      newContentWordCount: 0
    })
  },
  navigate: value => (state, actions) => {
    return {
      currentView: value
    };
  },
  createStory: value => (state, actions) => {
    db.collection("stories").add({
      title: state.newIllustration.title,
      content: state.newIllustration.content
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
          <dd key={result.id}>
            <div id={result.id}>
              <strong>{result.title}</strong> - {new Date(result.timestamp.seconds * 1000).toDateString()}
              <p>{result.content}</p>
            </div>
          </dd>
        ))}
      </dl>
    </main>
  </div>
);

const CreateView = ({ navigate }) => (state, actions) => {
  const tooManyWords = state.CreateView.newContentWordCount > MAX_WORDS;
  const emptyTitle = state.CreateView.newTitle === "";
  const emptyContent = state.CreateView.newContent === "";
  const preventSave = tooManyWords || emptyTitle || emptyContent;

  return (
    <div id="CreateView" oncreate={() => actions.CreateView.init({ navigate })}>
      <menu>
        <a href="#" onclick={() => state.globalActions.navigate("SearchView")}>
          Cancel
        </a>
        <button onclick={() => actions.CreateView.save()} disabled={preventSave ? "disabled" : ""}>
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
      return <CreateView navigate={actions.navigate} />;
    default:
      return <ErrorView />;
  }
};

app(state, actions, view, document.getElementById("root"));

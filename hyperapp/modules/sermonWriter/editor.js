/* global Quill */

import { h, app } from "hyperapp";
import "./editor.scss";
import * as DB from "./firebase";

const state = {
  referencePane: {
    referenceList: [],
    showNewForm: false,
    showUpdateForm: false
  }
};

const actions = {
  fetchSongs: value => (state, actions) => {
    DB.getSongs(pageFunc).then(result => {
      console.log("Done");
    });
  },
  loadSongs: value => state => ({ songs: state.songs.concat(value) }),
  referencePane: {
    toggleNewForm: value => previousState => ({ showNewForm: !previousState.showNewForm }),
    addStory: value => previousState => {
      const story = value;
      DB.createStory()
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      return {};
    },
    loadReferences: value => previousState => {}
  }
};

const view = (state, actions) => (
  <div class="wrapper">
    <div class="main">
      <div class="menu">This is the title</div>
      <div class="pane editor-wrapper">
        <Editor id="mainEditor" />
      </div>
      <div class="pane editor-wrapper">
        <Editor id="draftEditor" />
      </div>
    </div>

    <div class="sidebar">
      <ReferencePane />
    </div>
  </div>
);

const toolbarOptions = [
  // ["bold", "italic", "underline"], // toggled buttons
  // ["blockquote"],
  // [{ list: "ordered" }, { list: "bullet" }],
  // ["clean"] // remove formatting button
];

const ReferencePane = () => (state, actions) => {
  const isEditing = state.referencePane.showNewForm;
  const editorWrapperClass = isEditing ? "editor-wrapper" : "editor-wrapper hidden";
  const referenceResultsClass = isEditing ? "hidden" : "";
  const toggleForm = () => actions.referencePane.toggleNewForm();
  const updateForm = (element, oldAttributes) => {
    if (element.className.indexOf("hidden") === -1) {
      element.getElementsByClassName("ql-editor")[0].focus();
    }
  };

  return (
    <div id="referencePane" oncreate={() => actions.referencePane.loadReferences()}>
      {isEditing ? (
        <div id="referenceTools">
          <button id="referenceSave">Save</button>
          <button id="referenceCreate" onclick={toggleForm}>
            Cancel
          </button>
        </div>
      ) : (
        <div id="referenceTools">
          <input id="referenceSearch" type="search" placeholder="Search" />
          <button id="referenceCreate" onclick={toggleForm}>
            {state.referencePane.showNewForm ? "Cancel" : "New..."}
          </button>
        </div>
      )}
      <div class={editorWrapperClass} onupdate={updateForm}>
        <Editor id="referenceEditor" />
      </div>
      <div class={referenceResultsClass}>
        <ReferenceResults />
      </div>
    </div>
  );
};

const ReferenceResults = () => (state, actions) => {
  return (
    <div class="referenceResults">
      <div class="referenceResultCount">Found 1 result.</div>
      <div class="referenceResultList">
        <div class="referenceResultItem">
          Poole felt in his pocket and handed out a crumpled note, which the lawyer, bending nearer to the candle,
          carefully examined. Its contents ran thus: “Dr. Jekyll presents his compliments to Messrs. Maw.
        </div>
      </div>
    </div>
  );
};

export const Editor = ({ id }) => (state, actions) => {
  const init = e => {
    var editor = new Quill(e, {
      modules: {
        toolbar: toolbarOptions
      },
      theme: "snow"
    });
  };
  const destroy = e => {};
  return <div id={id} key={id} oncreate={element => init(element)} ondestroy={element => destroy(element)} />;
};

//app(state, actions, view, document.getElementById("root"));

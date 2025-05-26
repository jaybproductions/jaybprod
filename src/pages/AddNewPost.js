import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import {
  IonPage,
  IonContent,
  IonInput,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonButton,
} from "@ionic/react";
import "../css/Contact.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import draftToHtml from "draftjs-to-html";
import { toast } from "../helpers/toast";

const AddNewPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [pass, setPass] = useState("");
  const [data, setData] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [postEditorState, setPostEditorState] = useState(
    EditorState.createEmpty()
  );
  const password = "Blackcat54$";
  const handleEditorChange = (e) => {
    setEditorState(e);

    const editorJSON = convertToRaw(e.getCurrentContent());
    setData(draftToHtml(editorJSON));
  };

  const handleAddBlogPost = async () => {
    if (pass != password) {
      toast("Your password is incorrect");
      return;
    }
    const response = await axios.post(
      "https://el5z8q1uj3.execute-api.us-east-1.amazonaws.com/dev/add/blog" ||
        "http://localhost:80/add/blog",
      {
        data: {
          data: data,
          title: title,
        },
      }
    );

    console.log("blog post has been added!");
    toast("Your Post has been added.");
  };

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add New Blog Post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="add-blog">
          <div
            className="password"
            style={{ width: "50%", margin: "auto", alignContent: "center" }}
          >
            <IonInput value={pass} onIonChange={(e) => setPass(e.target.value)}>
              Password
            </IonInput>
          </div>
          <div
            className="title"
            style={{ width: "50%", margin: "auto", alignContent: "center" }}
          >
            <IonInput
              value={title}
              onIonChange={(e) => setTitle(e.target.value)}
            >
              Title
            </IonInput>
          </div>
          <div className="editor" style={{ width: "50%", margin: "auto" }}>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={handleEditorChange}
            />
          </div>
          <div style={{ width: "50%", margin: "auto" }}>
            <IonButton onClick={handleAddBlogPost}>Save</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddNewPost;

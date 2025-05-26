import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonToolbar,
  IonTitle,
  IonHeader,
} from "@ionic/react";
import "../css/Contact.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const BlogPost = ({ title, body }) => {
  let params = useParams();
  let post = params.blogpost;
  const [blogPostTitle, setBlogPostTitle] = useState([]);
  const [blogPostText, setBlogPostText] = useState("");

  useEffect(() => {
    getPost(post);
  }, [post]);

  const poststyle = {
    padding: "10px",
  };

  const getPost = async (post) => {
    const response = await axios.get(
      `https://el5z8q1uj3.execute-api.us-east-1.amazonaws.com/dev/post/${post}` ||
        `http://localhost:80/post/${post}`
    );
    console.log(response.data);
    setBlogPostTitle(response.data.data.title);
    setBlogPostText(response.data.data.data);
  };
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <div className="back-button" style={{ paddingLeft: "10px" }}>
              <Link to={"/blog"}>
                <ArrowBackIcon fontSize="large" />
              </Link>
            </div>
            <div className="title" style={{ padding: "15px" }}>
              <IonTitle>{blogPostTitle}</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <div className="space" style={{ padding: "20px" }}></div>
        <IonCard style={{ margin: "auto", padding: "20px", width: "85%" }}>
          <div style={poststyle}>{ReactHtmlParser(blogPostText)}</div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BlogPost;

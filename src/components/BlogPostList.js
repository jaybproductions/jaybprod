import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IonItem,
  IonLabel,
  IonTitle,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonHeader,
} from "@ionic/react";
import ReactHtmlParser from "react-html-parser";

const BlogPostList = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          style={{
            padding: "20px",
          }}
        >
          <IonItem routerLink={`/blog/${post.title}`}>
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "100%",
                padding: "10px",
              }}
            >
              <IonTitle lines="none">
                <h3 style={{ paddingBottom: "5px" }}>{post.title}</h3>
              </IonTitle>
            </div>
          </IonItem>
        </div>
      ))}
    </>
  );
};

export default BlogPostList;

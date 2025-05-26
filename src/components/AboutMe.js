import React from "react";
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import DevImg from "../images/dev.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="left-side">
          <img src={DevImg} width="400" height="400" />
        </div>
        <div className="right-side">
          <h2 style={{ fontSize: "26px", textAlign: "left" }}>
            Some Of My Skills
          </h2>
          <div
            style={{
              width: "100%",
              margin: "auto",
              textAlign: "left",
            }}
          >
            <ul>
              <li>React.js and React Native</li>
              <li>HTML, Javascript, CSS, JSX</li>
              <li>Firebase tools and Admin SDK</li>

              <li>REST API development with Node.js and Express.js</li>
              <li>AWS API including S3, Lighsail, and Lambda</li>
              <li>Multiple design libraries such as Material UI and Ionic</li>
              <li>
                DevOps, Managing Servers for Mulitple Websites, WHM, cPanel,
                Apache, etc.
              </li>
              <li>Python for webscraping, GUI's, and automations</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

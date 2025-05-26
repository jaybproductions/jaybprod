import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
} from "@ionic/react";
import "./Tab1.css";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import "../css/Home.css";
import Projects from "../components/ProjectsSection";
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent>
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
      </IonContent>
      <IonFooter>
        <IonToolbar
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          }}
        >
          <IonTitle
            style={{
              fontSize: "14px",
            }}
          >
            <center>2021 JayBProd</center>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;

import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import GitHubIcon from "@material-ui/icons/GitHub";

const ProjectCard = ({
  title,
  content,
  type,
  skills,
  link,
  liveLink,
  loginInfo,
}) => {
  return (
    <IonCard style={{ width: "100%", height: "100%" }}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="card-content">
          {content} <br />
          <div className="spacing"></div>
          <br />
          <b>Skills Used: {skills}</b>
          <br />
          <br />
          {loginInfo && (
            <>
              {loginInfo} <br />
              <br />{" "}
            </>
          )}
          <IonButton href={link} target="_blank" horizontal="end">
            <GitHubIcon />
          </IonButton>
          {liveLink && (
            <IonButton href={liveLink} target="_blank">
              View Live
            </IonButton>
          )}
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ProjectCard;

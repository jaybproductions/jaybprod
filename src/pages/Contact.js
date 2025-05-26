import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLoading,
  IonTextarea,
  IonCard,
  IonCardContent,
  IonGrid,
  IonCardTitle,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonText,
} from "@ionic/react";
import useForm from "../hooks/useForm";
import validateContactForm from "../validators/validateContactForm";
import "../css/Contact.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_tx21oqUQT3vZgEB5eIcic");

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = (props) => {
  const sendEmail = () => {
    emailjs.send("service_y3zpdf9", "template_prvp9x8", newFormFill).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validateContactForm,
    sendEmail
  );

  const newFormFill = {
    name: values.name,
    email: values.email,
    message: values.message,
  };

  const [busy, setBusy] = useState(false);

  return (
    <div className="contact-form" id="contact-form">
      <IonPage>
        <IonLoading message={"Please wait..."} isOpen={busy} />
        <IonContent>
          <div
            className="text"
            style={{ paddingTop: "50px", width: "85%", margin: "auto" }}
          >
            <h4>Get in Touch...</h4> Have questions? Want to know more about me
            or what I do?{" "}
            <div style={{ padding: "10px" }}>
              Email:{" "}
              <a href="mailto:jaybgameproductions@gmail.com">
                jaybgameproductions@gmail.com
              </a>
            </div>
          </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <IonItem lines="full">
                      <IonLabel position="floating">Name</IonLabel>
                      <IonInput
                        name="name"
                        type="text"
                        required
                        value={values.name}
                        onIonChange={handleChange}
                      ></IonInput>
                    </IonItem>

                    <IonItem lines="full">
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput
                        name="email"
                        type="text"
                        required
                        value={values.email}
                        onIonChange={handleChange}
                      ></IonInput>
                    </IonItem>
                    <IonItem lines="full">
                      <IonLabel position="floating">Message</IonLabel>
                      <IonTextarea
                        name="message"
                        type="text"
                        required
                        value={values.message}
                        onIonChange={handleChange}
                      ></IonTextarea>
                    </IonItem>
                    <IonRow>
                      <IonCol>
                        <IonButton
                          type="submit"
                          color="primary"
                          expand="block"
                          fill="solid"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          Send!
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        <IonFooter>
          <IonToolbar color="primary">
            {" "}
            <IonTitle style={{ fontSize: "14px" }}>
              <center>2021 JayBProd</center>
            </IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </div>
  );
};

export default ContactForm;

import React from "react";
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
} from "@ionic/react";
import useForm from "../hooks/useForm";
import firebase from "../firebase";

import validateContactForm from "../validators/validateContactForm";

const INITIAL_STATE = {
  subject: "",
  name: "",
  phoneNumber: "",
  email: "",
  message: "",
};

const ContactForm = (props) => {
  const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validateContactForm,
    handleCreateForm
  );

  function handleCreateForm() {
    const { subject, name, phoneNumber, email, message } = values;

    const newFormFill = {
      subject: values.subject,
      name: values.name,
      phoneNumber: values.phoneNumber,
      email: values.email,
      message: values.message,
    };

    firebase.db.collection("contactforms").add(newFormFill);
  }

  const [busy, setBusy] = React.useState(false);

  return (
    <IonPage>
      <IonLoading message={"Please wait..."} isOpen={busy} />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Subject</IonLabel>
          <IonInput
            name="subject"
            type="text"
            required
            value={values.subject}
            onIonChange={handleChange}
          ></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            name="password"
            type="password"
            required
            value={values.password}
            onIonChange={handleChange}
          ></IonInput>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton
              type="submit"
              color="primary"
              expand="block"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Log In
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ContactForm;

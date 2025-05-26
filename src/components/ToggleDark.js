import React, { useEffect, useState } from "react";
import { IonItem, IonIcon, IonToggle } from "@ionic/react";
import { moon, moonOutline } from "ionicons/icons";
import "../theme/variables.css";

const ToggleDark = (props) => {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };
  return (
    <div className="dark-mode">
      <IonItem>
        <IonToggle
          slot="start"
          onIonChange={toggleDarkModeHandler}
          type="ios"
          checked={isDark}
          style={{ marginRight: "10px", paddingLeft: "15px" }}
          color="primary"
        />
      </IonItem>
    </div>
  );
};

export default ToggleDark;

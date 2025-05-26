import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProjectsSection from "../components/ProjectsSection";

import "./Tab2.css";

import ProjectCard from "../components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    display: "inline-block",
    height: "25%",
    width: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.primary}`,

    padding: "20px",
  },

  panel: {
    width: "100%",
    margin: "auto",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={8} style={{ width: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Projects = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ProjectsSection />
      </IonContent>
      <IonFooter>
        <IonToolbar color="primary">
          <IonTitle style={{ fontSize: "14px" }}>
            <center>2021 JayBProd</center>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Projects;

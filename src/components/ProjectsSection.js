import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProjectCard from "../components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.primary}`,
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
        <Box p={0} style={{ width: "100%" }}>
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

function ProjectsSection() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className={classes.root}>
        <Tabs
          orientation="horizontal"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
          value={value}
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
          className={classes.tabs}
          textColor="primary"
        >
          <Tab label="React Projects" {...a11yProps(0)} />
          <Tab label="Python Projects" {...a11yProps(1)} />
          <Tab label="C# Projects" {...a11yProps(2)} />
          <Tab label="Wordpress Projects" {...a11yProps(3)} />
        </Tabs>

        <TabPanel value={value} index={0} className={classes.panel}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"Reversed Linked List Snake"}
                  content={
                    "The classic snake game with a twist. Using a linked list I was able to create this project that reverses the snakes direction when it eats the special food. This project helped me understand the concepts of Linked Lists and how they may be used in a real-world scenario"
                  }
                  skills={
                    "React, HTML, CSS, Hooks, Linked Lists, Functional Programming"
                  }
                  link="https://github.com/jaybproductions/snake-game"
                  liveLink="https://snake-game-f358a.web.app/"
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"Marketing Platform"}
                  content={
                    "This project is a work in progress. This project is a fully featured marketing platform with the ability to purchase AWS Lightsail instances for Wordpres hosting, a fully functional social media calendar, Two way text messaging with Twilio integration, and more."
                  }
                  skills={
                    "React, HTML, CSS, Hooks, Firebase, Reusable components, AWS, Twilio, S3, Lighsail, Stripe API"
                  }
                  link="https://github.com/jaybproductions/marketingplatform"
                  liveLink="https://marketingplatform-3b5c7.web.app"
                  loginInfo="Test Login Creds: test@tester.com, test1234"
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"QR Code Generator"}
                  content={
                    "This project is a work in progress. The goal is to allow users to sign up, store, and share QR codes generated from the site."
                  }
                  link="https://github.com/jaybproductions/qr-store"
                  skills={"React, HTML, CSS, Hooks, Firebase, Express, Axios"}
                  liveLink="https://qrstore-ab99e.web.app/home"
                  loginInfo="Test Login Creds: test@tester.com, test1234"
                />
              </IonCol>

              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"Hacker Forums Clone"}
                  content={
                    "This project is a work in progress. The goal of this project was to expand my knowledge of react and learn how to make fully functional web applications. This web app allows users to sign up, create posts, send messages, and create events to share with others."
                  }
                  skills={
                    "React, HTML, CSS, Hooks, Firebase, Reusable components"
                  }
                  link="https://github.com/jaybproductions/ReactNewsApp"
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6">
                {" "}
                <ProjectCard
                  title={"Spam filter for contact forms to email"}
                  content={
                    "This project is a work in progress. The goal is to allow users to create a list of keywords to block and the system will check contact form submissions against these keywords and store them for review on the app. "
                  }
                  link="https://github.com/jaybproductions/SpamFilter"
                  skills={"React, HTML, CSS, Hooks, Firebase, Express, Axios"}
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6"></IonCol>
            </IonRow>
          </IonGrid>
        </TabPanel>

        <TabPanel value={value} index={1} className={classes.panel}>
          <IonGrid>
            <IonRow
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"Coronavirus Discord Bot"}
                  content={
                    "This project goal was to learn more about the Discord API and to develop a bot so that me and my friends could instantly get the number of COVID cases around the world. "
                  }
                  skills={"Python, Discord API, COVID-19 API"}
                  link="https://github.com/jaybproductions/PythonCoronaDiscordBot"
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"Automated Report Uploader"}
                  content={
                    "This project was used at an agency to automate the process of downloading, storing, and uploading monthly analytics reports to clients."
                  }
                  skills={"webscraping, env variables, loops, functions"}
                  link="https://github.com/jaybproductions/pythonreportautomator"
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6"></IonCol>
            </IonRow>
          </IonGrid>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.panel}>
          <IonGrid>
            <IonRow
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"FPS Game Template for Unity"}
                  content={"Work in progress..."}
                  skills={"Please check back later or view on github."}
                  link={"https://github.com/jaybproductions/FPSUnityTemplate"}
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"Unity Mobile Game"}
                  content={"Work in progress..."}
                  skills={"Please check back later or view on github."}
                  link={"https://github.com/jaybproductions/unity-mobile-game"}
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6"></IonCol>
            </IonRow>
          </IonGrid>
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.panel}>
          <IonGrid>
            <IonRow
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IonCol size="12" size-sm="3" size-md="6"></IonCol>
              <IonCol size="12" size-sm="3" size-md="6">
                <ProjectCard
                  title={"Wordpress Projects Coming Soon..."}
                  content={"More Projects are being added frequently."}
                  skills={"Please check back later."}
                />
              </IonCol>
              <IonCol size="12" size-sm="3" size-md="6"></IonCol>
            </IonRow>
          </IonGrid>
        </TabPanel>
      </div>
    </div>
  );
}

export default ProjectsSection;

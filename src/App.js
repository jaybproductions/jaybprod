import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  trendingUpOutline,
  documentTextOutline,
  chatbubbleOutline,
  folderOutline,
} from "ionicons/icons";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import ToggleDark from "./components/ToggleDark";
import AddNewPost from "./pages/AddNewPost";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs id="tab-bar">
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/projects" component={Projects} exact={true} />
          <Route path="/resume" component={Resume} exact={true} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} exact={true} />
          <Route exact path="/add" component={AddNewPost} />
          <Route path="/blog/:blogpost" component={BlogPost} />

          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="top">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/projects">
            <IonIcon icon={trendingUpOutline} />
            <IonLabel>Projects</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab4" href="/blog">
            <IonIcon icon={folderOutline} />
            <IonLabel>Blog</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/contact">
            <IonIcon icon={chatbubbleOutline} />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab6">
            <ToggleDark />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import Profiles from "./pages/Profiles";
import Header from "./components/Header";
import "./Layout.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [activeProfile, setActiveProfile] = useState(null);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profiles">
          <Profiles setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/home">
          <Header activeProfile={activeProfile} />
          <HomePage activeProfile={activeProfile} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { Switch, Route, BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import Profiles from "./pages/Profiles";
import Header from "./components/Header";
import "./Layout.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Welcome from "./pages/Welcome";

function App() {
  const [activeProfile, setActiveProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("aktif profil değişti:", activeProfile);
  }, [activeProfile]);
  useEffect(() => {
    console.log("login  değişti:", isLoggedIn);
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login">
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/profiles">
          <Welcome setActiveProfile={setActiveProfile} />
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

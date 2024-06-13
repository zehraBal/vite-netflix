import { Switch, Route, BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import "./Layout.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Welcome from "./pages/Welcome";
import Footer from "./components/Footer";

function App() {
  const aktif = JSON.parse(localStorage.getItem("activeProfile"));

  const [activeProfile, setActiveProfile] = useState(aktif);

  useEffect(() => {
    console.log("aktif profil değişti:", activeProfile);
  }, [activeProfile]);

  return (
    <BrowserRouter>
      <Header activeProfile={activeProfile} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profiles">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/home">
          <Header activeProfile={activeProfile} />
          <HomePage activeProfile={activeProfile} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

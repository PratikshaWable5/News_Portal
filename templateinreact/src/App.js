import React from "react"
import './App.css';
import Navbar from "./Component/Navbar"
import IntroSession from "./Component/IntroSession"
import Feature from "./Component/FeatureSession"
import CardSession from "./Component/CardSession"
import Footer from "./Component/FooterSession"

const App = () => {
  return (
    <div>
    <Navbar />
    <IntroSession />
    <Feature/>
    <CardSession />
    <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Mainpage from "./components/mainpage/Mainpage";
import { useSelector } from "react-redux";
import { I18nProvider } from "./intl";



function App() {
  const lang = useSelector((state) => state.lang);

  return (
    <I18nProvider locale={lang}>
    
    <div className="maindata">
    <Mainpage/>
    </div>
  </I18nProvider>
  );
}

export default App;

import React, { useState } from "react";
import WicketKeeper from "../wicketKeeper";
import Allrounder from "../allRounder";
import BatsMan from "../batsman";
import Bowler from "../bowler";
import FinalTeam from "../displayfinalteam/Finalteam";
import { useSelector } from "react-redux";
import translate from "../../intl/translate"
import "./Showdata.css";

const Showdata = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [showModal, setShowModal] = useState(false);

  const team = useSelector((state) => state.team.teamPlayer);
  
  let teamPlayer = Object.values(team);

  let WK = teamPlayer.filter(data => data.eRole === "WK" );
  let BATS = teamPlayer.filter(data => data.eRole === "BATS" );
  let BWL = teamPlayer.filter(data => data.eRole === "BWL" );
  let ALLR = teamPlayer.filter(data => data.eRole === "ALLR" );
  // console.log(wk.length,BATS.length,BWL.length,ALLR.length);

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };
  function handleState() {
    //handle data
    if (activeTab === "tab1") {
      return <WicketKeeper />;
    } else if (activeTab === "tab2") {
      return <Allrounder />;
    } else if (activeTab === "tab3") {
      return <BatsMan />;
    } else {
      return <Bowler />;
    }
  }

  function handleMaxMin() {
    //handle max-min players
    if (activeTab === "tab1") {
      return <h4>{translate("mxmn.title")} (1-3) WK</h4>;
    } else if (activeTab === "tab2") {
      return <h4>{translate("mxmn.title")} (1-5) ALLR</h4>;
    } else if (activeTab === "tab3") {
      return <h4>{translate("mxmn.title")} (3-5) BATS</h4>;
    } else {
      return <h4>{translate("mxmn.title")}(3-5) BWL</h4>;
    }
  }
  return (
    <div className="main_tab">
      <div className="players_roles">
        <h4
          onClick={handleTab1}
          className={activeTab === "tab1" ? "active" : ""}
        >
          {`WK(${WK.length})`}
        </h4>
        <h4
          onClick={handleTab2}
          className={activeTab === "tab2" ? "active" : ""}
        >
        {`ALLR(${ALLR.length})`}
        </h4>
        <h4
          onClick={handleTab3}
          className={activeTab === "tab3" ? "active" : ""}
        >
          {`BATS(${BATS.length})`}
        </h4>
        <h4
          onClick={handleTab4}
          className={activeTab === "tab4" ? "active" : ""}
        >
          {`BWL(${BWL.length})`}
        </h4>
      </div>
      <div className="select_items_maxmin">{handleMaxMin()}</div>
      <div className="max_min">
        <div className="data_display_to">{handleState()}</div>
      </div>
      <div className="last_part">
      <button className= {teamPlayer.length === 11 ? "btn_active" : "btn"} disabled= {teamPlayer.length === 11 ? false : true}  onClick={() => setShowModal(!showModal)}>{translate("btn.next")}</button>
      </div>
      <FinalTeam
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </div>
  );
};

export default Showdata;

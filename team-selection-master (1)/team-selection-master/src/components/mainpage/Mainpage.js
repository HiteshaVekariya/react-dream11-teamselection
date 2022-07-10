import React,{useState} from "react";
import Showdata from "../Showdata/Showdata";
import { useSelector } from "react-redux";
import ChangeLangModal from "../ChangeLangModal";
import translate from "../../intl/translate"
import PropTypes from "prop-types";
import "./Mainpage.css";

const Mainpage = () => {
  const [showChangeLangModal, setShowChangeLangModal] = useState(false);

  const RRval = useSelector((state) => state.team.RR);
  const DCval = useSelector((state) => state.team.DC);
  const team = useSelector((state) => state.team.teamPlayer);

  const rrPlayer = Object.keys(RRval).length;
  const dcPlayer = Object.keys(DCval).length;

  const teamPlayers = Object.keys(team).length;
  const playerCredet = Object.values(team).reduce((pre, curr) => {
    const total = pre + curr.nFantasyCredit;
    return total;
  }, 0);

  let newDate = new Date();
  let date = newDate.getDate();
  let year = newDate.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = months[newDate.getMonth()];

  var today = new Date(),
    currentTime = today.getHours() + ":" + today.getMinutes();
  return (
    <div className="start_bar">
      <div className="main">
        <div className="header">
          <div className="hed_title">
            <div className="logo">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="title">
            <div
            className="lang-btn button"
            onClick={() => setShowChangeLangModal(!showChangeLangModal)}
          >
            <img
              className="images__h"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-language-web-store-flaticons-lineal-color-flat-icons.png"
              alt="language"
            />
          </div>

              <h4>{translate("nav.title")}</h4>
              <p className="date">
                {monthName} {date}, {year} {currentTime} AM
              </p>
            </div>
          </div>
          <div className="desc">
            <p>{translate("nav.submaxmin")}</p>
          </div>
          <div className="sub_main_parts">
            <h4>
            {translate("nav.player")} <p>{`${teamPlayers > 9 ? `${teamPlayers}` : `0${teamPlayers}`}/11`}</p>
            </h4>
            <h4>
            {translate("nav.dc")}  <p>{dcPlayer}</p>
            </h4>
            <h4>
            {translate("nav.rr")} <p>{rrPlayer}</p>
            </h4>
            <h4>
            {translate("nav.credits")} <p className="point">{`${100 - playerCredet }`}</p>
            </h4>
          </div>
          <div className="credits">
          <div className="container_main">
              <div className="child_container" style={{"width": `${(100/11)*teamPlayers}%`}}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_data_display">
        <Showdata />
      </div>
      <ChangeLangModal
        setShowChangeLangModal={setShowChangeLangModal}
        showChangeLangModal={showChangeLangModal}
      />

    </div>
  );
};
Mainpage.propTypes = {
  dc: PropTypes.number,
};

export default Mainpage;

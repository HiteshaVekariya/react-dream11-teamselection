import React from "react";
import { useSelector } from "react-redux";
import translate from "../../intl/translate"
import PropTypes from "prop-types";
import "./Finalteam.css";


const FinalTeam = ({ setShowModal, showModal })=> {

  const team = useSelector((state) => state.team.teamPlayer);
  let finalshow = Object.values(team);
//  console.log(finalshow)

    return (
    <>
        <div
        className={
            showModal ? "langmodal langmodal__animated" : "langmodal"
        }
        onClick={() => setShowModal(false)}
        ></div>
        <div
        className={
            showModal
            ? "langmodal__content langmodal__content__animated"
            : "langmodal__content"
        }
        >
        <div className="langmodal__content__name">
            <h1 className="chooseteam">Your FinalTeam</h1>
            <div className="maintodo">
            <table>
            <tr className="head">
          <th> {translate("dh.filter")} </th>
          <th>{translate("dh.Selected")}</th>
          <th>
            {translate("dh.points")} <i className="fa-solid fa-arrow-up"></i>
          </th>
          <th>{translate("dh.credits")}</th>
          
        </tr>
              {finalshow?.map((data,index) => {
              return(
                <tr key={index}>
                  <td><img
                  className="image_tag"
                  src="https://img.freepik.com/free-vector/abstract-batsman-playing-cricket-from-splash-watercolors-illustration-paints_291138-405.jpg?w=2000"
                  alt="img"
                />  </td>
                  <td className="data_first">
                {data.sName}
                <p className="second">{data.sTeamName}</p>
                
                  <p>{data.eRole}</p>
                
              </td>
              <td className="second_row">{data.nScoredPoints}</td>
              <td className="second_row">{data.nFantasyCredit}</td>
                </tr>
                ) })}            
                </table>
        </div>
        <button  className="lasti_bt" onClick={() => setShowModal(false)}>OK</button>
        </div>
        </div>
    </>
    );
}

FinalTeam.propTypes = {
  setShowModal: PropTypes.func,
  showModal: PropTypes.bool,
};

export default FinalTeam;

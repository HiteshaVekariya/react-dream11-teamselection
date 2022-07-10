/* eslint-disable array-callback-return */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { rajsthanTeam, delhiTeam } from "../actions";
import "./index.css";
import translate from "../intl/translate";


const PlayerList = (props) => {
  const tdRef = useRef();
  const trRef = useRef();
  const dispatch = useDispatch();



  let RRval = useSelector((state) => state.team.RR);
  let DCval = useSelector((state) => state.team.DC);
  let team = useSelector((state) => state.team.teamPlayer);



  let teamPlayer = Object.keys(team).length;
  let teamCheck = Object.values(team);

  let RRCheck = Object.values(RRval);
  let DcCheck = Object.values(DCval);

  let playerCredet = Object.values(team).reduce((pre, curr) => {
    const total = pre + curr.nFantasyCredit;
    return total;
  }, 0);



  let check = teamCheck.filter(data => data.eRole === props.type);
  console.log(check);

  const style = {
    color: "green",
    fontSize: "18px",
  };


  const handleSubmit = ({ data }) => {
    let flag, flag1, flag2, flag3
    
    flag = teamCheck.some(datas => datas._id === data._id);
    flag1 = DcCheck.some(datas => datas._id === data._id);
    flag2 = RRCheck.some(datas => datas._id === data._id);
    flag3 = check.some(datas => datas._id === data._id);
    console.log(!flag3);
    console.log(props.min)
    if (!flag2 && data?.oTeam?.sShortName === 'RR' && RRval?.length > 6) {
      return alert("can not  select more than 7 players of RR team ");
    }
    if (!flag1 && data?.oTeam?.sShortName === 'DC' && DCval?.length > 6) {
      return alert(" can not select more than 7 players of DC team ");
    }
    if (!flag && teamPlayer > 10) {
      return alert("you can select only 11 players on your team ");
    }
    if ((flag3 === true) && (check.length < props.min)) {
      return alert(`you have requried min ${props.min -1} players`);
    } if ((flag3 === false) && (check.length > props.max)) {
      return alert(`You have Enter only ${props.max+1} players`);
    }if(playerCredet > 100 ){
      return alert();
    }

    else {
      if (data.sTeamName === "Delhi Capitals") {
        dispatch(delhiTeam(data));
      } else {
        dispatch(rajsthanTeam(data));
      }
    }
  };

  return (
    <>
      <table>
        <tr className="head">
          <th> {translate("dh.filter")} </th>
          <th>{translate("dh.Selected")}</th>
          <th>
            {translate("dh.points")} <i className="fa-solid fa-arrow-up"></i>
          </th>
          <th>{translate("dh.credits")}</th>
          <th></th>
        </tr>
        {props.data?.map((data, index) => {

          return (
            <tr
              key={index}
              style={{ cursor: "pointer" }}
              ref={trRef}
              data-index={index}
              className="data_mapping"
              onClick={() => { handleSubmit({ data }) }}
            >
              <td >
                <img
                  className="image_tag"
                  src="https://img.freepik.com/free-vector/abstract-batsman-playing-cricket-from-splash-watercolors-illustration-paints_291138-405.jpg?w=2000"
                  alt="img"
                />
              </td>
              <td className="data_first">
                {data.sName}
                <p className="second">{data.sTeamName}</p>
                <div className="progress_main" style={{ background: `${data.sTeamName === "Delhi Capitals" ? 'rgb(101, 117, 194)' : 'rgb(188, 151, 180)'}` }}>
                  <p className="percent"> Set By {data.nSetBy} %</p>
                  <div className="progress_child" style={{ width: `${data.nSetBy}% `, background: `${data.sTeamName === "Delhi Capitals" ? 'blue' : 'rgb(152, 82, 138)'}` }} >

                  </div>
                </div>
              </td>
              <td className="second_row">{data.nScoredPoints}</td>
              <td className="second_row">{data.nFantasyCredit}</td>
              <td id="keyVal" >
                {" "}
                <i style={style} data-key={index} ref={tdRef}  className="last_parts">
                  {
                    teamCheck.some(datas => datas._id === data._id) ?
                    <i className="fa-solid fa-minus" style={{"color":"white","background":"red", "border-radius": "50%","padding":"3px"}}></i>
                      :
                      <i className="fa-light fa-plus" style={{"color":"white","background":"green","border-radius": "50%","padding":"4px"}}></i>

                  }
                </i>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

PlayerList.propTypes = {
  data: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  type: PropTypes.string,
};

export default PlayerList;

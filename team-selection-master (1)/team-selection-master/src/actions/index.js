import player from "../apis/playerData";

export const BatsManData = () => async (dispatch) => {
  const response = await player.get();
  const final = response.data.data.matchPlayer;
  dispatch({ type: "BATSMAN", payload: final });
};

export const BowlerData = () => async (dispatch) => {
  const response = await player.get();
  const final = response.data.data.matchPlayer;
  dispatch({ type: "BOWLER", payload: final });
};

export const WicketKeeperData = () => async (dispatch) => {
  const response = await player.get();
  const final = response.data.data.matchPlayer;
  dispatch({ type: "WICKETKEEPER", payload: final });
};

export const AllrounderData = () => async (dispatch) => {
  const response = await player.get();
  const final = response.data.data.matchPlayer;
  dispatch({ type: "ALLROUNDER", payload: final });
};
export const delhiTeam = (manu) => {
  return {
    type: "DELHI",
    payload: manu,
  };
};

export const rajsthanTeam = (manu) => {
  return {
    type: "RAJSTHAN",
    payload: manu,
  };
};

export const finalTeam = (team) => {
  return {
    type: "FINALTEAM",
    payload: team,
  };
};
export const setLang = (lang) => {
  return {
    type: "SET_LANG",
    payload: lang,
  };
};


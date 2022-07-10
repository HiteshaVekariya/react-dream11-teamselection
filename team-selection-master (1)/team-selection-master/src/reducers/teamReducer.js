const intialstate = {
  RR: [],
  DC: [],
  teamPlayer: [],
};

export default (state = intialstate, action) => {
  switch (action.type) {
    case "DELHI": {
      const arrDC = [];
      const flagDC = state.DC.some((data) => data._id === action.payload._id);
      if (flagDC) {
        state.DC.pop(action.payload);
      } else {
        arrDC.push(action.payload);
      }

      return {
        ...state,
        DC: [...state.DC, ...arrDC],
        teamPlayer: [...state.DC, ...arrDC, ...state.RR],
      };
    }
    case "RAJSTHAN": {
      const arrRR = [];
      const flagRR = state.RR.some((data) => data._id === action.payload._id);
      if (flagRR) {
        state.RR.pop(action.payload);
      } else {
        arrRR.push(action.payload);
      }
 console.log(arrRR)
      return {
        ...state,
        RR: [...state.RR, ...arrRR],
        teamPlayer: [...state.RR, ...arrRR, ...state.DC],
      };
    }
    default:
      return state;
  }
};

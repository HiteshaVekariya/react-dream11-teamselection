import { combineReducers } from "redux";
import  playerReducer from "./PlayerReducer";
import teamReducer from "./teamReducer";
import lang from "./langReducer";

export default combineReducers({
    player: playerReducer, 
    team: teamReducer,  
    lang: lang, 
});
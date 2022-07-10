

const initialState = {
   player: []
}

export default(state = initialState,action) =>{

   switch(action.type){
         case "BATSMAN":
            return{
               ...state,
               player: action.payload.filter(data => data.eRole === "BATS")
            }

            case "BOWLER":
            return{
               ...state,
               player: action.payload.filter(data => data.eRole === "BWL")
            }

            case "ALLROUNDER":
            return{
               ...state,
               player: action.payload.filter(data => data.eRole === "ALLR")
            }

            case "WICKETKEEPER":
            return{
               ...state,
               player: action.payload.filter(data => data.eRole === "WK")
            }
            
            default:
               return  state;
   }
}
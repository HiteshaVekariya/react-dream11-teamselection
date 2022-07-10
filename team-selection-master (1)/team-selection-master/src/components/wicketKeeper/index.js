import React, { useEffect} from "react";
import { WicketKeeperData } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import PlayerList from "../../pages/playerList";

const WicketKeeper = () => {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player.player);
  

  useEffect(() => {
    dispatch(WicketKeeperData());
  }, []);

  return (
    <div>
      <PlayerList  data ={player}  type={"WK"} min={2} max={2}/>
    </div>
  );
};

export default WicketKeeper;

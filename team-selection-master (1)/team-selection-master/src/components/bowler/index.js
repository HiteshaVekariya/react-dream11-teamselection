import React, { useEffect } from "react";
import { BowlerData } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import PlayerList from "../../pages/playerList";

const Bowler = () => {
    const dispatch = useDispatch();
    const player = useSelector((state) => state.player.player);
    useEffect(() => {

        dispatch(BowlerData());
        
    }, []);

    return (
        <div>
            <PlayerList data={player} type={"BWL"} min={4} max={4} />
        </div>
    );
}

export default Bowler;
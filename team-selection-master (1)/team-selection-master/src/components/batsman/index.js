import React, { useEffect } from "react";
import { BatsManData } from "../../actions";
import PlayerList from "../../pages/playerList";
import { useSelector, useDispatch } from "react-redux";

const BatsMan = () => {
    const dispatch = useDispatch();
    const player = useSelector((state) => state.player.player);

    useEffect(() => {
        dispatch(BatsManData());

    }, []);

    return (
        <div>
            <PlayerList data={player} type={"BATS"} min={4} max={4}/>
        </div>
    );
}

export default BatsMan;
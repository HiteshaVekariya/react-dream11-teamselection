import React, {useEffect } from "react";
import { AllrounderData } from "../../actions";
import { useSelector,useDispatch } from "react-redux";
import PlayerList from "../../pages/playerList";


const Allrounder = () => {
    const dispatch = useDispatch();
    const player = useSelector((state) => state.player.player);
    useEffect(() => {

        dispatch(AllrounderData());
        
    }, []);

    return (
        
        <div>
        <PlayerList data={player} type= {"ALLR"} min={2} max={4} />
        </div>
    );
}

export default Allrounder;
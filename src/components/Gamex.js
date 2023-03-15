import styled from "styled-components";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from "react";

const Gamex = ({ game, idx, setGameIdx , setPlace }) => {
 
    // console.log(scrolls.current)
    const location  = useLocation();
    useEffect(()=>{
        setPlace(location.pathname);
       
    },[location , idx])
    const openGameDetail = (e) => {
        setGameIdx(idx);
    };
    return (
        <GameCard id={idx} key={game.id} onClick={openGameDetail}>
            <Link to={`/game/${game.id}`} className="hello">
                <h3>{game.name}</h3>
                <h5>{game.rating}</h5>
                <img src={game.background_image} alt={game.name} />
            </Link>
        </GameCard>
    );
};

const GameCard = styled(motion.div)`
    text-align: center;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.493);
    padding-top: 20px;
    img {
        display: block;
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`;

export default Gamex;

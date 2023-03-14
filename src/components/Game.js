import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ game, idx, setGameIdx, setDisplayCardStatus  }) => {
    

    const runf = (e) => {
        setGameIdx(idx);
        setDisplayCardStatus(true) 
    };
    return (
        <GameCard className="hello" id={idx} key={game.id} onClick={runf} >
            <h3 >{game.name}</h3>
            <h5 >{game.rating}</h5>
            <img src={game.background_image} alt={game.name}></img>
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

export default Game;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    const [displayCardStatus, setDisplayCardStatus] = useState(false);
    const [gameIdx, setGameIdx] = useState(Math.floor(Math.random() * 20));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames("games"));
    }, [dispatch]);

    const [cardActive, setCardActive] = useState(false);

    const { popular } = useSelector((state) => state.games);

    // const popularGames = games.popular;
    const popularGames = popular;

    const names = popularGames.map((i) => i.name);

    const imgs = popularGames.map((i) =>
        i.short_screenshots.map((s) => s.image)
    );

    // console.log(popularGames);
    // names.map( (name , idx)=> gameImg[name] = imgs[idx] )

    
    const displayGameCard = (e) => {
       
      
        var parent = e.target.parentNode;
        
        if (!parent.classList.contains("hello")) {
            setDisplayCardStatus(false)
        }

        
    };
    return (
        <div  onClick={displayGameCard}>
            <div>
                {displayCardStatus && (
                    <GameDetails
                        popularGames={popularGames}
                        imgs={imgs}
                        displayCardStatus={displayCardStatus}
                        gameIdx={gameIdx}
                    />
                )}
            </div>

            <Title>* GAMES * </Title>
            <Games>
                {popularGames.map((game, idx) => (
                    <Game  
                        key={idx}
                        game={game}
                        idx={idx}
                        setGameIdx={setGameIdx}
                        displayCardStatus={displayCardStatus}
                        setDisplayCardStatus={setDisplayCardStatus}
                        cardActive={cardActive}
                        setCardActive={setCardActive}
                    
                    />
                ))}
            </Games>
        </div>
    );
};

const Title = styled(motion.h1)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    /* background:red ; */
`;
const Games = styled(motion.div)`
    padding: 20px;
    display: grid;
    /* grid-template-columns: repeat(auto-fit , minmax(500px , 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

export default Home;

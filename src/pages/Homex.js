import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";


import Gamex from "../components/Gamex";
import GameDetailsx from "../components/GameDetailsx";

import { useNavigate , useLocation } from 'react-router-dom'

import styled from "styled-components";
import { motion } from "framer-motion";

const Homex = () => {
    const [displayCardStatus, setDisplayCardStatus] = useState(false);
    const [place, setPlace] = useState('');
    const location = useLocation();
    const locationPath = location.pathname.split('/')[2]
    const [gameIdx, setGameIdx] = useState(parseInt(locationPath));
   
    
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(loadGames("games"));
    }, [dispatch]);

 

    const { popular } = useSelector((state) => state.games);


    
    const popularGames = popular;



    const imgs = popularGames.map((i) =>
        i.short_screenshots.map((s) => s.image)
    );



    const navigate  = useNavigate ();
   
    const displayGameCard = (e) => {
        
        let main = e.currentTarget
        console.log(main)

        
        var parent = e.target.parentNode;
        if (!parent.classList.contains("hello")) {
            setDisplayCardStatus(false);
            navigate('/');
            
        }else{
            setDisplayCardStatus(true);
        }
    };
    return (
        <div id="big" onClick={displayGameCard}>
            <div>
                {place.length>1 ? (
                        <GameDetailsx
                            popularGames={popularGames}
                            imgs={imgs}

                            gameIdx={gameIdx} 


                        />
                ):""}
            </div>
            
            <Title> * GAMES * </Title>
            <Games>
                {popularGames.length
                    ? popularGames.map((game) =>  (
                        <Gamex
                              key={game.id}
                              game={game}
                              idx={game.id}
                              setGameIdx={setGameIdx}
                              setPlace={setPlace}
                              />
                        
                        )
                    )
                    : ""}
            </Games>
        </div>
    );
};

const Title = styled(motion.h1)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
`;
const Games = styled(motion.div)`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

export default Homex;

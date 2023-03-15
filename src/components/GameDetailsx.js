import { useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";



import { loadOneGame } from "../actions/gamesAction";
import { useLocation } from "react-router-dom";
const GameDetailsx = ({ popularGames , gameIdx }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadOneGame(`games/${gameIdx}`));
        
        
    }, [dispatch, gameIdx]);

   
    const { oneGame } = useSelector((state) => state.games);
    
    const cardImages = popularGames.filter((p)=>{ 
        if(p.id === oneGame.id){
            return p 
        }
    })
    
    // console.log(allimags[0].short_screenshots)

    return (
        <BigContainer className="hello">
                <GameDetail className="hello">
                    <GameName>{oneGame.name}</GameName>

                    <GameDescription>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: oneGame.description,
                            }}
                        ></div>
                    </GameDescription>

                    
                    <GameImages>
                        { cardImages.length ? cardImages[0].short_screenshots.map((screenShot) => (
                            <img key={screenShot.image} src={screenShot.image}/>
                        )) :''}
                    </GameImages> 
                    
                </GameDetail>
        </BigContainer>
    );
};
const BigContainer = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100vh;
    pointer-events: none;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

`;
const GameDetail = styled(motion.div)`
    overflow-y: scroll;
    position: fixed;
    background: #ffffff;
    width: 80%;
    height: 90%;
    pointer-events: auto;
    border-radius: 1px;
    box-shadow: 0 50px 300px rgba(0, 0, 0, 0.493);

    /* @keyframes slideaway {
        from {
            opacity: 0;
            width: 30%;
            height: 30vh;
        }
        to {
            opacity: 1;
            width: 80%;
            height: 90%;
        }
    }

    animation: slideaway 1500ms; */
`;
const GameName = styled(motion.div)`
    padding: 2rem;
    font-size: 30px;
    text-align: center;
`;
const GameDescription = styled(motion.div)`
    padding: 2rem;
    font-size: 18px;
    background-color: #d9cfcf;
`;
const GameImages = styled(motion.div)`
    img {
        display: block;
        padding: 5px;
        width: 100%;
        height: auto;
    }
`;

export default GameDetailsx;

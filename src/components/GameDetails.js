import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
// import { Markup } from 'interweave';

import { useEffect } from "react";
import { loadOneGame } from "../actions/gamesAction";
const GameDetails = ({ popularGames, imgs, gameIdx }) => {
    console.log(popularGames[gameIdx].id)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadOneGame(`games/${popularGames[gameIdx].id}`));
    }, [dispatch , gameIdx]);

    const {oneGame} = useSelector(state=>state.games) 
    console.log(oneGame)
    
    

    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    return (
        <BigContainer className="hello">
            <GameDetail className="hello">
                <GameName>{oneGame.name}</GameName>
                {/* <Markup content={oneGame.description}/> */}
                <GameDescription>
                    <div dangerouslySetInnerHTML={{__html: oneGame.description}}></div>
                </GameDescription>

                <GameImages>
                    {imgs[gameIdx].map((screenShot) => (
                        <img key={screenShot} src={screenShot} alt="true" />
                    ))}
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
    /* overflow: scroll; */
    /* z-index: 10; */

    &:hover {
        /* width: 10%; */
    }
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

    @keyframes slideaway {
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

    animation: slideaway 1500ms;
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

export default GameDetails;

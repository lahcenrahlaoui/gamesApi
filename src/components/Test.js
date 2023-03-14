import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";


const Test = () => {
    const [v , setV] = useState(['a','b','c'])
    const handleClick =()=>{
        setV([...v.split() , 'd'])
    }
    return (
        <BigContainer>
            <Container>

                {v && v.map((e)=>
                    <p contentEditable="true" >{e}  <h1 onClick={handleClick}></h1></p>
                )}
              
            </Container>
        </BigContainer>
    );
};

const BigContainer = styled(motion.div)`
    display: felx;
    justify-content: center;
    align-items: center;
    padding:20px;
    background: red;
    width: 100vw;
    height: 100vh;
    p{
        position: relative;
        font-size:45px;
        display: flex;
        justify-content: center;
        align-items:center;
        border: 3px solid black;
        width: 350px;
        height: 350px;
        border-radius: 55px;
        margin: 2px;
    }
    h1{
        position: absolute;
        right: -13px;
        width: 20px !important;
        height: 350px !important;
        cursor: pointer;
        background-color: green;
        z-index: 10;
    }

`
const Container = styled(motion.div)`
    display: felx;

`

export default Test;

import React from "react";
import { Route , Routes  } from "react-router-dom";

import Home from "./pages/Home";
import Homex from "./pages/Homex";
const App = () => {
    return (
        <div className="App">
            <Routes>
                {/* <Route path={["/game/:id", "/"]} element={<Home />}/> */}
                <Route path="/" element={<Homex />}/>
                <Route path="/game/:id" element={<Homex />}/>
                {/* <Route path="/" element={<Home />}/> */}
            </Routes>
        </div>
    );
};

export default App;

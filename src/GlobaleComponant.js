
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Land from "./Land";
import Character from "./Character";
import Pages from "./Pages";
import './A-Wdgs/Style.css';
// import { dataX } from "../test/stor";




class GlobalComponant extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div>
            <div className="links">
                <BrowserRouter >
                    
                    {/* <Provider store={storeRedux}> */}
                    {/* <Provider store={dataX}> */}

                    {/* component={Home} */}
                    <Routes>
                        <Route exact path="/"  element={<Home/>} />
                        <Route exact path="/Home"  element={<Home/>} />
                        <Route path="/About" element={<About/>} />
                        <Route path="/Land" element={<Land/>} />
                        <Route path="/Character" element={<Character/>} />
                        <Route path="/Pages" element={<Pages/>} />
                        
                    </Routes>
                    {/* </Provider> */}
                    {/* </Provider> */}
                </BrowserRouter>  
            </div>
        </div>
        )
    }



}

export default GlobalComponant;

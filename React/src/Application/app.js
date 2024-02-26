import React, {PureComponent } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css";
import Header from "./Components/Global/Header";
import Footer from "./Components/Global/Footer";
export default class ApplicationComponent extends PureComponent {
    constructor(props){ 
        super(props)
    }
    //<Route path="/" element={<Home userName={"Jonathan"}/>}/>
    render(){ 
        return(
            <Router>
                <Header/>
                <Routes>
                    
                </Routes>
                <Footer />
            </Router>
        )
    }
}
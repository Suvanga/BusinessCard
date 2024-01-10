import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainComponent from "./MainComponent"


import './styles.css'; 

function Page(){
    return(
        <div className="all">
            <Header/>
            <MainComponent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(
    <div>
<Page/>
    </div>
,
document.getElementById("root")
)
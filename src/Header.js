import React from "react";
import "./index.css";
import logo from "./imgs/logo.png"

export default function Header() {
    return(
        <header className="header">
         <img src={logo} alt="logo" className="header-logo"/>
         <h4 className="header-title">React Course - Project 3</h4>
        </header>
    )
}
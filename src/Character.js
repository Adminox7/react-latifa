import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './A-Wdgs/Style.css';


class Character extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        <nav>
          <ul>
                    <Link to={"/Home"} id='adm'>Home</Link>
                    <Link to={"/About"} id='adm'>About</Link>
                    <Link to={"/Land"} id='adm'>Land</Link>
                    <Link to={"/Character"} id='adm'>Character</Link>
                    <Link to={"/Pages"} id='adm'>Pages</Link>

           </ul>
        </nav>
        <h1>Mon Composant</h1>
        <p>Ceci est un exemple de composant avec une classe en React.js</p>
      </div>
    );
  }
}

export default Character;
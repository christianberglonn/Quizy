import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import './Highscores.css';

let highScoresList;
let highScores;

class Highscores extends Component {

    componentDidMount() {
        highScoresList = document.getElementById('highScoresList');
        highScores = JSON.parse(localStorage.getItem("highScores")) || [];

        highScoresList.innerHTML =
            highScores.map(score => {
                return (`<li class="high-score">${score.name} - ${score.score}</li>`);
            }).join("");

    }

    render() {
        return (
            <div className="container">
                <div id="highScores" className={"flex-center flex-column"}>
                    <h1 id="finalScore">High Scores!</h1>
                    <ul id="highScoresList"></ul>
                    <Link to={"/"} className="btn">
                        <div className="btn-font-color">Go Home</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Highscores;
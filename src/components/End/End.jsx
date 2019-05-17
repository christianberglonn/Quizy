import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../../App.css';


let highScores;
let saveScoreBtn;
let finalScore;
let mostRecentScore;
let username;


class End extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: false,
        };
    }



    componentDidMount() {
        username = document.getElementById("username");
        highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        saveScoreBtn = document.getElementById("saveScoreBtn");
        finalScore = document.getElementById('finalScore');
        mostRecentScore = localStorage.getItem('mostRecentScore');

        finalScore.innerText = mostRecentScore;


        username.addEventListener("keyup", () => {
            saveScoreBtn.disabled = this.setState({ username: true });
        });
        console.log(highScores);

    }


    saveHighscore() {

        const score = {
            score: mostRecentScore,
            name: username.value,
        };

        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score)
        highScores.splice(5);

        localStorage.setItem("highScores", JSON.stringify(highScores));

        console.log(highScores);

    }





    render() {

        return (
            <div className="container">
                <div id="end" className="flex-center flex-column">
                    <h1 id="finalScore"> </h1>
                    <form>
                        <input type="text" name="username" id="username" placeholder="username" />
                        <Button
                            type="submit"
                            className="btn btn-font-color"
                            id="saveScoreBtn"
                            onClick={this.saveHighscore}
                            disabled={!this.state.username}
                            tag={Link} to="/"
                        >
                            Save
                        </Button>
                    </form>
                    <Link to={"game"} className="btn">
                        <div className="btn-font-color">Play Again</div>
                    </Link>
                    <Link to={"/"} className="btn">
                        <div className="btn-font-color">Go Home</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default End;
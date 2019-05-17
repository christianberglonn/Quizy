import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div id="home" className={"flex-center flex-column"}>
                    <h1>Quick Quiz</h1>
                    <Link to={"game"} className="btn">
                        <div className="btn-font-color">Play</div>
                    </Link>
                    <Link to={"highscores"} className="btn">
                        <div className="btn-font-color">Highscores</div>
                    </Link>
                </div>

            </div>
        );
    }
}

export default Dashboard;

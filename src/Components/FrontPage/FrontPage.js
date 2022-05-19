import React, { Component } from 'react';
import { teamPlayers, teamPicks } from './TeamBox'
import './FrontPage.css'



class FrontPage extends Component {
    render() {
        return (
            <div className='centerPiece'>
                <div className='home-boxes'>
                    <div className='league-trade-box'>
                    </div>
                    <div className='heading-border'>
                        <h1 className='heading-text'>League Trades</h1>
                    </div>
                    <div className='trades'>
                        <h1> HELLO </h1>
                    </div>
                </div>
                <div className='home-boxes'>
                <div className='heading-border'>
                        <h1 className='heading-text'>Your Team</h1>
                    </div>
                    <div className='team-box'>
                    {/* <h2 className='players'>
                                Players
                            </h2> */}
                        <div className='team-players'>
                            <ul className='team-players-list'>
                                {teamPlayers.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a>
                                                {item.position} :
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        {/* <h2 className='picks'>
                                Draft Picks
                            </h2> */}
                        <div className='team-draft-picks'>
                        <ul className='team-players-list'>
                                {teamPicks['draft22'].map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a>
                                                {item} :
                                            </a>
                                        </li>
                                    )
                                })}
                                <br></br>
                                {teamPicks['draft23'].map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a>
                                                {item} :
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default FrontPage
import React, { Component } from 'react';
import style from './activity.module.scss';
import { 
  Link
} from "react-browser-router";

export default class activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
          item: null
        };
        window.help = this;
      }

      generate = async () => {
        const response = await fetch('http://rikkawp277.277.axc.nl/api/game', {
          method: "GET",
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
          }
        });
        const item = await response.json();
        this.setState({
          item: item
        })
      }

  render() {
    return (
      <>
        {this.state.item ? (
          <section className={style.game}>
            {this.state.item[0] ? (
              <div>
                <h2 className={style.gameTitle}>{this.state.item[0].gameTitle}</h2>
                <p className={style.gameDesc}>{this.state.item[0].gameDesc}</p>
                  <h2 className={style.gameTitleSub}>Hoe te spelen:</h2>
                <p className={style.gameTut}>{this.state.item[0].gameTut}</p>
                <p className={style.gameSpelersText}>voorkeur voor: <span className={style.gameSpelers}>{this.state.item[0].gamePlayers}</span> mensen</p>
                  <h2 className={style.gameTitleSub}>Nodig:</h2>
                <p className={style.gameReq}>{this.state.item[0].gameReq}</p>
                  <h2 className={style.gameTitleSub}>Regels:</h2>
                <p className={style.gameRules}>{this.state.item[0].gameRules}</p>
                  <h2 className={style.gameTitleSub}>notes:</h2>
                <p className={style.gameNotes}>{this.state.item[0].gameNotes}</p>
                <button className={style.gameButton} onClick={this.generate}> laad een  nieuwe activiteit </button>
              </div>
              ) : (
                <div className={style.gameContainer}>
                  <p>Er zijn nog geen activiteiten.</p>
                  <Link className={style.gameButton} to='/Create'>maak een activiteit</Link>
              </div>
                )}
            </section>
        )
          :
          (
            <section className={style.game}>
              <div className={style.gameContainer}>
                <p>Er is nog geen activiteit ingeladen.</p>
                <button className={style.gameButton} onClick={this.generate}> laad een activiteit </button>
              </div>
            </section>
          )
        }
      </>
    )
  }
}

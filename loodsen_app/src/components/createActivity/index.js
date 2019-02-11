import React, { Component } from 'react'
import style from './index.module.scss'

export default class createActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
        this.rikPls = {
            gameTitle: '',
            gameReq: '',
            gameRules: '',
            gameDesc: '',
            gamePlayers: '',
            gameNotes: '',
            gameTut: '',
        }
        this.clone = {...this.state}
    }

    update = name => {
        return (event) => {
            this.rikPls[name] = event.target.value
        }
    }

    add = async () => {
        if(this.rikPls.gameTitle !== "" && this.rikPls.gameReq !== "" && this.rikPls.gameRules !== "" && this.rikPls.gameDesc !== "" && this.rikPls.gamePlayers !== "" && this.rikPls.gameTut !== "") {
            console.log(this.rikPls);
            this.setState({
                error: null
            })
            await fetch('http://localhost:8000/api/game', {
            method: "POST",
            body: JSON.stringify(this.rikPls)
            }).then(
            this.setState({
                succes: true
            }));
            this.rikPls = {
                gameTitle: '',
                gameReq: '',
                gameRules: '',
                gameDesc: '',
                gamePlayers: '',
                gameNotes: '',
                gameTut: '',
            }
        } else {
            this.setState({
                error: "voer alle verplichte velden in aub"
            })
        }
    }

  render() {
    return (
      <div className={style.wrapper}>
        <>
            {this.state.succes && (<span> gelukt !</span>)}
            <h2 className={style.gameTitle}>Title*:</h2>
            <input onChange={this.update('gameTitle')} className={style.gameInput} type='text' required='required'/>
            <h2 className={style.gameTitle}>descriptie*:</h2>
            <textarea onChange={this.update('gameDesc')} className={style.gameInput} type='text' required='required'/>
            <h2 className={style.gameTitleSub}>Hoe te spelen*:</h2>
            <textarea onChange={this.update('gameTut')} className={style.gameInputBig} required='required'/>
            <h2 className={style.gameTitleSub}>Voorkeur aantal spelers(nummer)*:</h2>
            <input onChange={this.update('gamePlayers')} className={style.gameInput} type='Number' required='required' />
            <h2 className={style.gameTitleSub}>Benodigd heden*:</h2>
            <textarea onChange={this.update('gameReq')} className={style.gameInputBig} required='required'/>
            <h2 className={style.gameTitleSub}>Regels*:</h2>
            <textarea onChange={this.update('gameRules')} className={style.gameInputBig} required='required'/>
            <h2 className={style.gameTitleSub}>notes:</h2>
            <textarea onChange={this.update('gameNotes')} className={style.gameInputBig}/>
        </>
            <button onClick={this.add} className={style.button}>Toevoegen</button>
        {this.state.error && (<span className={style.error}>{this.state.error}</span>) }
      </div>
    )
  }
}

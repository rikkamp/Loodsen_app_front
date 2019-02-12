import React, { Component } from 'react'
import style from './index.module.scss'

export default class createActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
        this.formValues = {
            gameTitle: '',
            gameReq: '',
            gameRules: '',
            gameDesc: '',
            gamePlayers: '',
            gameNotes: '',
            gameTut: '',
        }
        this.filteredValues = this.formValues
    }

    update = name => {
        return (event) => {
            this.filteredValues[name] = event.target.value
        }
    }

    add = async () => {
        if(this.filteredValues.gameTitle !== "" &&
            this.filteredValues.gameReq !== "" &&
            this.filteredValues.gameRules !== "" &&
            this.filteredValues.gameDesc !== "" &&
            this.filteredValues.gamePlayers !== "" &&
            this.filteredValues.gameTut !== "") {
            this.setState({
                error: null
            })
            if(this.filteredValues.gameNotes !== "") {
                this.body = JSON.stringify({
                    "gameTitle": this.filteredValues.gameTitle,
                    "gameReq": this.filteredValues.gameReq,
                    "gameRules": this.filteredValues.gameRules,
                    "gameDesc": this.filteredValues.gameDesc,
                    "gamePlayers": this.filteredValues.gamePlayers,
                    "gameTut": this.filteredValues.gameTut,
                    "gameNotes": this.filteredValues.gameNotes
                    })
            } else {
                this.body = JSON.stringify({
                    "gameTitle": this.filteredValues.gameTitle,
                    "gameReq": this.filteredValues.gameReq,
                    "gameRules": this.filteredValues.gameRules,
                    "gameDesc": this.filteredValues.gameDesc,
                    "gamePlayers": this.filteredValues.gamePlayers,
                    "gameTut": this.filteredValues.gameTut
                    })
            }
            console.log(this.body)
            const response = await fetch('http://localhost:8000/api/game', {
            method: "PUT",
            body: this.body,
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
            });
            const item = await response.json();
            if (item.gameTitle) {
                this.setState({
                    succes: true
                });
                window.scrollTo({
                    top: 0,
                    left: 0, 
                    behavior: 'smooth'
                });
            } else {
                this.setState({
                    succes: false,
                    error: 'er ging iets mis met de server'
                });
                window.scrollTo({
                    top: 0,
                    left: 0, 
                    behavior: 'smooth'
                });
            }
            this.filteredValues = this.formValues
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
            <textarea onChange={this.update('gameDesc')} className={style.gameInputBig} type='text' required='required'/>
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

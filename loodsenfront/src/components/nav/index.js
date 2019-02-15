import React, { Component } from 'react'
import { 
    Link
} from "react-browser-router";
import style from './nav.module.scss';



export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          admin: false
        };
      }
  render() {
    return (
        <header>
            <>
                <div className={style.nav}>
                    <Link to="/" className={this.props.home ? style.navItemActive : style.navItem}>Home</Link>
                    <Link to="/Create" className={this.props.create ? style.navItemActive : style.navItem}>Maken</Link>
                    {this.state.admin && (
                        <>
                            <Link to="/" className={this.props.create ? style.navItemActive : style.navItem}>Home</Link>
                            <Link to="/Create" className={this.props.create ? style.navItemActive : style.navItem}>About</Link>
                        </>
                    )}
                </div>
            </>
        </header>
    )
  }
}

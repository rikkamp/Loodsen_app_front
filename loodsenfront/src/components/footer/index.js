import React, { Component } from 'react'
import style from './footer.module.scss';

export default class index extends Component {
  render() {
    return (
      <footer className={style.footer}>
          <div className={style.footerContainer}>
              <p className={style.footerName}> made by Rik Kampman</p>
              <a href='http://www.rikkampman.nl' className={style.footerLink} ><p className={style.footerLink}> Rikkampman.nl</p></a>
          </div>
      </footer>
    )
  }
}

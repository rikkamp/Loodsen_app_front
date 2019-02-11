import React, { Component } from 'react'
import Header from '../components/nav/';
import Footer from '../components/footer/';
import style from './page.module.scss';
import CreateActivity from '../components/createActivity/'
 
export default class create extends Component {
  render() {
    return (
    <div className={style.page}>
      <Header create />
      <CreateActivity />
      <Footer/>
    </div>
    )
  }
}

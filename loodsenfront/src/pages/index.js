import React, { Component } from 'react'
import Header from '../components/nav/';
import Activity from '../components/activity/';
import Footer from '../components/footer/';
import style from './page.module.scss';

export default class index extends Component {
  render() {
    return (
      <div className={style.page}>
        <Header home />
        <Activity />
        <Footer/>
      </div>
    )
  }
}

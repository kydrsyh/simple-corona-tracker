import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import image from './assets/image.png'
export default class App extends Component {
  state = {
    data: {},
    country: ""
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data: data })
  }

  handleCountryPicker = async (country) => {
    const fetchApi = await fetchData(country);

    this.setState({data: fetchApi, country: country });
  }

  render() {
    const { data, country } = this.state
  
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="header"/>
        <Cards data={data} />
        <CountryPicker handleCountryPicker={this.handleCountryPicker} />
        <Chart country={country} data={data} />
      </div>
    )
  }
}

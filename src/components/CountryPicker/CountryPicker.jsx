import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryPicker }) => {
  const [fetchedCountries, setfetchedCountries] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setfetchedCountries(await fetchCountries())
    }

    fetchApi();
  }, [setfetchedCountries])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryPicker(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker

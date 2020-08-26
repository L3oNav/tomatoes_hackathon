import React from 'react'
import { Link } from 'react-router-dom'
import {Article} from './styles'
function NavigationButtons({ page }) {
  const ButtonsHandler = () => {
    if (page > 1) {
      return (
        <div>
          <Article to={'/' + (page + 1)}>Next</Article>
          <Article to={'/' + (page - 1)}>Previous</Article>
        </div>
      )
    } else {
      return <Article to={'/' + (page + 1)}>Next</Article>
    }
  }
  return <div>{ButtonsHandler()}</div>
}

export default NavigationButtons

import React from 'react'
import {Article} from './styles'
function NavigationButtons({ page }) {
  const ButtonsHandler = () => {
    if (page > 1) {
      return (
        <div>
          <Article to={'/movies/' + (page - 1)}>Previous</Article>
          <Article to={'/movies/' + (page + 1)}>Next</Article>
        </div>
      )
    } else {
      return <Article to={'/movies/' + (page + 1)}>Next</Article>
    }
  }
  return <div>{ButtonsHandler()}</div>
}

export default NavigationButtons

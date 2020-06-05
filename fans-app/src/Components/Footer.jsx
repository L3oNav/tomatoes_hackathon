import React from 'react'
import styled from 'styled-components'
import '../assets/styles/components/Footer.scss'

const Footer = () => (
    <footer className='footer'>
        {/* <a href='/'>Terminos de uso(TODO)</a>
        <a href='/'>Declaración de privacidad(TODO)</a>
        <a href='/'>Centro de ayuda(TODO)</a> */}
        <CountryImg src='https://img.icons8.com/officexs/16/000000/mexico--v1.png' />
    </footer>
)

const CountryImg = styled.img`
    padding-left: 10px;
    height: 20px;
    width: 22px;
`
export default Footer

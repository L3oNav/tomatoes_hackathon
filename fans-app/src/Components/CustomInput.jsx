import React from 'react'
import styled from 'styled-components'

const CustomInput = ({ name, type, title, placeholder, value, onChange }) => {
    return (
        <InputContainer>
            <InputTitle>{title}</InputTitle>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    )
}

const InputContainer = styled.div`
    display: inline-block;
`

const InputTitle = styled.p`
    color: white;
    margin-left: -120px;
`

const Input = styled.input`
    background-color: rgba(255, 255, 255, 0.1);
    border: 0px solid white;
    border-radius: 10px;
    color: white;
    font-family: 'Muli', sans-serif;
    font-size: 16px;
    height: 50px;
    margin-top: -15px;
    margin-bottom: 20px;
    outline: none;
    padding: 0px 20px;
`

export default CustomInput

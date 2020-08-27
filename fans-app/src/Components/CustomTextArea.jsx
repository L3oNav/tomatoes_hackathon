import React from 'react'
import styled from 'styled-components'

const CustomTextArea = ({ name, type, title, placeholder, value, onChange }) => {
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

const Input = styled.textarea`
  background-color: rgba(255, 255, 255, 0.1);
  border: 0px solid white;
  border-radius: 10px;
  color: white;
  font-family: 'Muli', sans-serif;
  font-size: 16px;
  height: 100px;
  width: 200px;
  margin-top: -15px;
  margin-bottom: 20px;
  outline: none;
  padding: 20px 20px;
`

export default CustomTextArea

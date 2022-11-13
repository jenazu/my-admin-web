import React, { useContext } from 'react'
import { Marginer } from '../marginer'
import { AccountContext } from './accountContext'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './commonts'

function LoginForm() {

const { switchToSignup } = useContext(AccountContext)

  return (
    <BoxContainer>
      <FormContainer>
        <Input type='email' placeholder='Email'/>
        <Marginer direction='vertical' margin={5}/>
        <Input type='password' placeholder='Password'/>
        <Marginer direction='vertical' margin={5}/>
        <MutedLink href='#'>Forget your password?</MutedLink>
        <Marginer direction='vertical' margin='1.4em'/>
        <SubmitButton type='submit'>Signin</SubmitButton>
        <Marginer direction='vertical' margin='1em'/>
        <MutedLink href='#'>Don't have an account? <BoldLink href='#' onClick={switchToSignup}>Signup</BoldLink></MutedLink>
      </FormContainer>
    </BoxContainer>
  )
}

export default LoginForm

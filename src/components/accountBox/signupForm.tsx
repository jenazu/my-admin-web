import React, { useContext } from 'react'
import { Marginer } from '../marginer'
import { AccountContext } from './accountContext'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './commonts'

function SignupForm() {

    const {switchToSignin} = useContext(AccountContext)

  return (
    <BoxContainer>
      <FormContainer>
      <Input type='text' placeholder='Full name'/>
        <Marginer direction='vertical' margin={5}/>
        <Input type='email' placeholder='Email'/>
        <Marginer direction='vertical' margin={5}/>
        <Input type='password' placeholder='Password'/>
        <Marginer direction='vertical' margin={5}/>
        <Input type='password' placeholder='Confirm Password'/>
        <Marginer direction='vertical' margin={15}/>
        <SubmitButton type='submit'>Signup</SubmitButton>
        <Marginer direction='vertical' margin='1em'/>
        <MutedLink href='#'>Already have an account? <BoldLink href='#' onClick={switchToSignin}>Signin</BoldLink></MutedLink>
      </FormContainer>
    </BoxContainer>
  )
}

export default SignupForm

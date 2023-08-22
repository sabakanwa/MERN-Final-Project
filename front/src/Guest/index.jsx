import React from 'react'
import SignUp from '../pages/SignUp'
import  NavigatioBar  from '../User/Components/Navigatiobar'
import  FooterSection  from '../Components/FooterSection'

function index() {
  return (
    <>
    <NavigatioBar/>
    <SignUp/>
    <FooterSection/>
    </>
  )
}

export default index
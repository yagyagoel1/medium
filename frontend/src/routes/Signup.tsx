import React from 'react'
import Quote from '../components/Quote'
import Form from '../components/Form'

const Signup = () => {
  return (
    <div className=' lg:grid grid-cols-2 '>
      <Form type='signup'></Form>
      <div className='invisible lg:visible'><Quote></Quote></div>
    </div>
  )
}

export default Signup
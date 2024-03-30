
import Form from '../components/Form'
import Quote from '../components/Quote'


const Signin = () => {
  return (
    <div className='lg:grid grid-cols-2'>
      <div><Form type="signin"></Form></div>
      <div className='invisible lg:visible'><Quote></Quote></div>
    </div>
  )
}

export default Signin
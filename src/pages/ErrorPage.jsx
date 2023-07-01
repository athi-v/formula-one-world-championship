import React from 'react'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {
let navigate = useNavigate()
const goHome = () => {
    return navigate('/');
}
  return (
    <div className='section'>
     <div className='container h-[100vh] mx-auto max-w-[90%] flex justify-center items-center'>
     <div className='flex flex-col justify-center items-center gap-5'>
     <h1 className='text-7xl font-bold'>404</h1>
     <p className='text-md'>Page not found...</p> 
<button onClick={goHome} className='flex px-5 py-2 bg-red-600  items-center gap-4  text-white font-semilbold hover:text-black hover:bg-transparent hover:border-[1px] hover:border-grey'>
    <div>Return Home</div>
</button>

     </div>
    </div>
    </div>
  )
}

export default ErrorPage
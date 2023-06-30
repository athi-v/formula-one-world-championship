import React from 'react'
import ImageOne from '../assets/formula-1-logo.svg'
import {BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'



const Navbar = () => {
  return (
    <div className='h-[10vh] flex items-center fixed w-full top-0 bg-white z-10'>
 <div className='container mx-auto max-w-[90%] flex justify-between items-center'>
        <div><img src={ImageOne} alt='/' className='w-[120px]'/></div>
        <div className='flex gap-4'>
<a href='' target='_blank' ><BsGithub size='25px' style={{color: "grey"}} /></a>  
<a href='' target='_blank'><BiLogoGmail size='25px' style={{color: "grey"}} /></a>       </div>


    </div>
    </div>
   
  )
}

export default Navbar
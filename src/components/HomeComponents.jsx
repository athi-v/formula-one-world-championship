import {BsArrowDown, BsGlobe} from 'react-icons/bs'
import Video from '../assets/vids.mp4'

const HomeComponents = () => {
  return (
    <div className='section '>
     <div className='container h-[100vh] mx-auto max-w-[90%] flex items-center'>
     <div className='flex flex-col lg:flex-row lg:h-full w-full gap-10 '>
     <div className='flex flex-col gap-10 justify-center '>
     <h1 className='font-bold text-5xl lg:text-7xl  text-center lg:text-left'>Formula 1 <br/>Championships</h1> 
     <div className='flex flex-row gap-4 justify-center lg:justify-start'>
     <a href='#standings'>

     <button className='flex px-5 py-2 border-[1px] border-red-600 items-center gap-4 font-semilbold hover:text-white hover:bg-red-600'>
    <div >See Standings</div>
    <div>    <BsArrowDown />
</div>
</button>
</a>

<a href='http://ergast.com/mrd/' target='__blank'>
<button className='flex px-5 py-2 bg-red-600  items-center gap-4  text-white font-semilbold hover:text-black hover:bg-transparent hover:border-[1px] hover:border-grey'>
    <div>F1 Website</div>
    <div>    <BsGlobe className='hover:text-black' />
</div>
</button>
</a>

     </div>
     </div>
   
     <div className='hidden lg:block items-center'>
 <video loop autoPlay muted className='h-full' >
 <source src={Video} type="video/mp4" />
 </video>

     </div>


     </div>
    </div>
    </div>
  )
}

export default HomeComponents
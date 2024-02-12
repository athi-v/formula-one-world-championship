
const Footer = () => {
let dateNow = new Date();


  return (
    <div className='h-[25vh] flex items-center absolute w-full '>
    <div className='container mx-auto max-w-[90%] flex justify-between items-center'>
           <div><p className='text-sm text-medium'>Powered by <a href='' target='__blank'><span className='font-bold'>Ergast</span></a></p></div>
           <div>
           <p className='text-sm text-medium '>Copyrights &copy; {dateNow.getFullYear()}</p>
           </div>
   
       </div>
       </div>  )
}

export default Footer
import React, { useEffect, useState } from 'react'
import Loading from './common/Loading'
import SelectOption from './helpers/SelectOption'

const Results = () => {

  const [currentYear, setCurrentYear] = useState({ value: 2023, label: '2023' })
  const [season, setSeason] = useState([])
  const [loader, setLoader] = useState(false)

  const getChampions = async (year) => {
    setLoader(true);
    try {
      const response = await fetch(`https://ergast.com/api/f1/${year}/driverStandings.json`); 
      const data = await response.json();
      setSeason(data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || []);
      console.log(data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || []);
      setLoader(false);
    }
    catch (err) {
      console.error('Error!', err);
      setSeason([]);
      setLoader(false);
        }
  }


  const yearHandler = (currYear) => {
    setCurrentYear(currYear);
    if(currYear) {
      getChampions(currYear.value)
    }
  };
  
  const curYear = new Date();
  const options = [];

  for (let i = 2005; i <= curYear.getFullYear(); i++) {
    options.push({ value: i, label: i.toString() });
  }

  useEffect(() => {
   getChampions(currentYear.value);
  }, [currentYear]);

  console.log(curYear.getFullYear())


  return (
    <div id='standings' className='section'>
     <div className='container h-auto mx-auto max-w-[90%] flex flex-col justify-start items-start'>
     <h1 className="text-3xl font-semibold py-5" > {currentYear.value} Standings
     
</h1>
<div className='py-5'>
<div className='flex flex-row gap-2'>
<div>      <p className='text-sm'>Season Winner</p>
</div>
      <div className='bg-green-600 h-[20px] w-[20px] rounded-[100%]'></div>
      
     </div> 
     <div className='flex flex-row gap-2'>
<div>      <p className='text-sm'>Results May Change</p>
</div>
      <div className='bg-orange-600 h-[20px] w-[20px] rounded-[100%]'></div>
      
     </div> 
</div>

     <div className='flex flex-col gap-5 w-full'>
<div>

<SelectOption  options={options}
        value={currentYear}
        onChange={yearHandler}
        defaultValue={options[1]}
        />

 </div>
 <div className='w-full'>
 {loader ? (<Loading/> ) :
  
 (
              <table className='w-full shadow-lg rounded-lg table-auto'>
                <thead >

                  <tr>
                    <th className='text-left py-7 px-1 lg:px-7'>POS</th>
                    <th className='text-left py-7 px-1 lg:px-7'>DRIVER</th>
                    <th className='text-left py-7 px-1 lg:px-7'>CAR</th>

                    <th className='text-left py-7 px-1 lg:px-7'>POINTS</th>
                  </tr>
                </thead>
                <tbody className='divide-y'>
                  {season.map((item, index) => (
                    
                    <tr key={index} className={item?.position == 1 && currentYear.value < curYear.getFullYear() ? 'bg-green-600' : item?.position == 1 && currentYear.value >= curYear.getFullYear() ? 'bg-orange-600' :  'bg-transparent'  }>
                  
                
                      <td className='py-7 px-1 lg:px-7'>
                      {item?.position}</td>

                      <td className='py-7 px-1 lg:px-7'><a href={item?.Driver?.url}>{item?.Driver?.givenName} {item?.Driver?.familyName}</a></td>
                      <td className='py-7 px-1 lg:px-7'>{item?.Constructors[0].name}</td>
                      <td className='py-7 px-1 lg:px-7'>{item?.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
 </div>

     </div>
    </div>
    </div>
  )
}

export default Results
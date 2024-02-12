import { useEffect, useState } from 'react'
import Loading from './common/Loading'
import SelectOption from './helpers/SelectOption'

const Results = () => {

  const [currentYear, setCurrentYear] = useState({ value: 2023, label: '2023' })
  const [season, setSeason] = useState([])
  const [champs, setChamps] = useState(null)
  const [loader, setLoader] = useState(false)

  const getChampions = async (year) => {
    setLoader(true);
    try {
      const response = await fetch(`https://ergast.com/api/f1/${year}/driverStandings.json`); 
      const responses = await fetch(`https://ergast.com/api/f1/${year}/results/1.json`); 

      const data = await response.json();
      const datas = await responses.json();

      setChamps(data.MRData.StandingsTable.StandingsLists[0]);
      console.log(data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings[0] || []);

      setSeason(datas.MRData.RaceTable.Races || []);

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

  <div>
 <div className='flex flex-cols h-[100px] items-center justify-center border-2 bg-slate-200 py-5'>
  {champs && currentYear.value < curYear.getFullYear() ? (
    <p className='flex flex-col-reverse items-center text-center lg gap-3 font-semibold'>
      {champs.DriverStandings[0].Driver.givenName} {champs.DriverStandings[0].Driver.familyName} won the {currentYear.value} Formula 1 World Championships by {champs.DriverStandings[0].points} points 
      <div className='bg-green-600 h-[20px] w-[20px] rounded-[100%]'></div>
    </p>
  ) : champs && currentYear.value === curYear.getFullYear() ? (
    <p className='flex flex-col-reverse items-center text-center lg gap-3 font-semibold'>
      {champs.DriverStandings[0].Driver.givenName} {champs.DriverStandings[0].Driver.familyName} is leading by {champs.DriverStandings[0].points} points 
      <div className='bg-orange-600 h-[20px] w-[20px] rounded-[100%]'></div>
    </p>
  ) : champs ? (
    <p className='flex flex-col-reverse items-center text-center lg gap-3 font-semibold'>
      Results May Change
      <div className='bg-orange-600 h-[20px] w-[20px] rounded-[100%]'></div>
    </p>
  ) : (
    <p className='flex flex-col-reverse items-center text-center lg gap-3 font-semibold'>
      Something went wrong; unable to retrieve results.
      <div className='bg-red-600 h-[20px] w-[20px] rounded-[100%]'></div>
    </p>
  )}
</div>

 <div>
              <table className='w-full shadow-lg rounded-lg table-auto'>
                <thead >

                  <tr>
                    <th className='text-left py-7 px-1 lg:px-7'>ROUND</th>
                    <th className='text-left py-7 px-1 lg:px-7'>DRIVER</th>
                    <th className='text-left py-7 px-1 lg:px-7'>CAR</th>

                    <th className='text-left py-7 px-1 lg:px-7'>POINTS</th>
                  </tr>
                </thead>
                <tbody className='divide-y'>
                  { 
                    season.map((item, index) => (
                    <tr key={index} >
           
                      <td className='py-7 px-1 lg:px-7'>
                      {item.round}</td>

                      <td className='py-7 px-1 lg:px-7'><a href={item?.Results[0].Driver?.url}>{item?.Results[0].Driver?.givenName} {item?.Results[0].Driver?.familyName}</a></td>
                      <td className='py-7 px-1 lg:px-7'>{item?.Results[0].Constructor?.name}</td>
                      <td className='py-7 px-1 lg:px-7'>{item?.Results[0].points}</td> 
                    </tr>
                    ) 
                  ) }
                </tbody>
              </table>
              </div>
            </div>
            )
           }
            
 </div>

     </div>
    </div>
    </div>
  )
}

export default Results
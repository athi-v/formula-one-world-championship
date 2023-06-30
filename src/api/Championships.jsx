const [currentYear, setCurrentYear] = useState(null)
const [season, setSeason] = useState([])
const [loader, setLoader] = useState(false)

export const getChampions = async (year) => {
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

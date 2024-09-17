import NavBar from "./Nav";
import Box from "./Box"
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [data1,setData1] = useState(null);
  const [data2,setData2] = useState(null);
  const [data3,setData3] = useState(null);
  const [data4,setData4] = useState(null);
  const [data5,setData5] = useState(null);


  useEffect(() => {

    const urls = [
      'https://dev.energo.itsmart.sk:8081/api/data/actual/1',
      'https://dev.energo.itsmart.sk:8081/api/data/actual/2',
      'https://dev.energo.itsmart.sk:8081/api/data/actual/3',
      'https://dev.energo.itsmart.sk:8081/api/data/actual/4',
      'https://dev.energo.itsmart.sk:8081/api/data/actual/5'
    ]

    Promise.all(urls.map(url => axios.get(url)))
    .then(responses => {
      setData1(responses[0].data);
      setData2(responses[1].data);
      setData3(responses[2].data);
      setData4(responses[3].data);
      setData5(responses[4].data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div className="App">
      <NavBar/>
      {data1 && <div className="main">
        <div className="kvalita">
          <Box data={data1}/>
          <Box data={data2}/>
        </div>
        <div className="spotreba">
          <Box data={data3}/>
          <Box data={data4}/>
          <Box data={data5}/>
        </div>
      </div>}
    </div>
  );
}

export default App;

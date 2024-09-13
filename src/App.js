import NavBar from "./Nav";
import {useEffect, useState} from 'react';

function TimeFormat(time) {
  return time.slice(8, 10) + '.' + time.slice(5, 7) + '.' + time.slice(0, 4) + ' ' + time.slice(11, 16);
}

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

    fetch('https://dev.energo.itsmart.sk:8081/api/data/actual/1')
      Promise.all(urls.map(url => fetch(url).then(res => res.json())))
      .then(([data1, data2, data3, data4, data5]) => {
        setData1(data1);
        setData2(data2);
        setData3(data3);
        setData4(data4);
        setData5(data5);
      })
  }, [])

  return (
    <div className="App">
      <NavBar/>
      { data1 && <div className="main">
        <div className="kvalita">
          <div className="box">
            <h2>{data1.nazov}</h2>
            <p>Hodnota: {data1.hodnota} {data1.jednotka}</p>
            <p className="timestamp">Timestamp: {TimeFormat(data1.timestamp)}</p>
          </div>
          <div className="box">
            <h2>{data2.nazov}</h2>
            <p>Hodnota: {data2.hodnota} {data2.jednotka}</p>
            <p className="timestamp">Timestamp: {TimeFormat(data2.timestamp)}</p>
          </div>
        </div>
        <div className="spotreba">
          <div className="box">
            <h2>{data3.nazov}</h2>
            <p>Hodnota: {data3.hodnota} {data3.jednotka}</p>
            <p className="timestamp">Timestamp: {TimeFormat(data3.timestamp)}</p>
          </div>
          <div className="box">
            <h2>{data4.nazov}</h2>
            <p>Hodnota: {data4.hodnota} {data4.jednotka}</p>
            <p className="timestamp">Timestamp: {TimeFormat(data4.timestamp)}</p>
          </div>
          <div className="box">
            <h2>{data5.nazov}</h2>
            <p>Hodnota: {data5.hodnota} {data5.jednotka}</p>
            <p className="timestamp">Timestamp: {TimeFormat(data5.timestamp)}</p>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default App;

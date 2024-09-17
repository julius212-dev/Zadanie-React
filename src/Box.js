function TimeFormat(time) {
    return time.slice(8, 10) + '.' + time.slice(5, 7) + '.' + time.slice(0, 4) + ' ' + time.slice(11, 16);
  }

const Box = ({data}) => {

    return ( 
        <div className="box">
            <h2>{data.nazov}</h2>
            <p>Hodnota: {data.hodnota} {data.jednotka}</p>
            <p className="timestamp">Timestamp: {TimeFormat(data.timestamp)}</p>
          </div>
    );
}
 
export default Box;
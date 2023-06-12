import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const apikey ="5a77c3227932010446290bbdd7731337";
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWeatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid=" +apikey+ " ";
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err",err)
    })
  }
  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }
  const handleSearch = () => {
    getWeatherDetails(inputCity)
  }
  
  return (
    <div className="col-md-12">

      <div className="weatherBg">
          <h1 className="heading">Weather App!!</h1>
          <div className="d-grid col-5 mt-5">
            <input type="text" className="form-control" 
            value={inputCity}
            onChange={handleChangeInput}/>

          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search Here</button>
          </div>
      </div>
      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultbox">
            <img className="weatherIcon"
              src="https://www.iconfinder.com/icons/4102326/download/png/512" />
       
            <h5 className="weatherCity">
              {data?.name}
            </h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
      }
  </div>

  );
}

export default App;
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=5a77c3227932010446290bbdd7731337';


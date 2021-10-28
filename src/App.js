// import './App.css';
import "./styles.css"
import weatherData from "./weatherData"
import WeatherForecast from "./components/WeatherForecast"

function App() {

  const allWeather = weatherData.map((ele,index) => (
    <WeatherForecast
      img={ele.img}
      conditions={ele.conditions}
      time={ele.time}
    />
  ))

  return (
    <div className="App">
    <h1>My WeatherIcons App</h1>
      <section>
        {allWeather}
      </section>
    </div>
  );
}

export default App;

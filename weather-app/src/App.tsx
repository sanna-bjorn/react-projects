import { useEffect, useReducer, useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import DailyWeather from './components/DailyWeather';
import HourlyWeather from './components/HourlyWeather';

function toJSON(res) {
  return res.json();
}

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log('Starting');
    fetch('https://wttr.in/Stockholm?format=j1')
      .then(toJSON)
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  console.log(data);
  if (loading) {
    return 'loading';
  }
  return (
    <div>
      <CurrentWeather
        feelsLike={data?.current_condition?.[0]?.FeelsLikeC}
        temperature={data?.current_condition?.[0]?.temp_C}
        condition={data?.current_condition?.[0]?.weatherDesc[0].value}
      />
      <HourlyWeather
        desc={data?.weather?.[0]?.hourly[0]?.weatherDesc[0].value}
        time={data?.weather?.[0]?.hourly?.[0]?.time}
        symbol={data?.weather?.[0]?.hourly?.[0]?.weatherIconUrl} //how to get this icon to work?
        temperature={data?.weather?.[0]?.hourly?.[0]?.tempC}
      />
      <DailyWeather
        day1={data?.weather?.[0]?.date}
        day2={data?.weather?.[1]?.date}
        day3={data?.weather?.[2]?.date}
        symbol={data?.current_condition?.[0]?.temp_C}
        temperature_max={data?.weather?.[0]?.maxtempC}
        temperature_min={data?.weather?.[0]?.mintempC}
      />
    </div>
  );
}

export default App;

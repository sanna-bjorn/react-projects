function DailyWeather({
  day1,
  day2,
  day3,
  symbol,
  temperature_max,
  temperature_min,
}) {
  return `DailyWeather  ${day1} ${day2} ${day3} ${symbol} ${temperature_max} ${temperature_min}`;
}

export default DailyWeather;

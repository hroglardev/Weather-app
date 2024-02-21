import { fetchForecast } from './fetchForecast'

export const fetchData = async (query) => {
  try {
    const response = await fetch(`${process.env.WEATHER_URL}?key=${process.env.API_KEY}&q=${query}`, { mode: 'cors' })

    if (!response.ok) {
      throw new Error("Couldn't retrieve the weather information")
    }
    const data = await response.json()

    const current = {
      cityName: data.location.name,
      country: data.location.country,
      temperature: data.current['temp_c'],
      feeling: data.current['feelslike_c'],
      icon: data.current.condition.icon,
      condition: data.current.condition.text,
      wind: `${data.current['wind_kph']}`,
      humidity: `${data.current.humidity}`
    }
    const { conditions, temps } = await fetchForecast(query)
    return { current, conditions, temps }
  } catch (error) {
    throw new Error(error.message)
  }
}

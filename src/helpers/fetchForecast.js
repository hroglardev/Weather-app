export const fetchForecast = async (query) => {
  try {
    const response = await fetch(`${process.env.FORECAST_URL}?key=${process.env.API_KEY}&q=${query}&days=8`, { mode: 'cors' })
    const data = await response.json()
    const days = data.forecast.forecastday.slice(1)
    const conditions = []
    const temps = []

    days.forEach((date) => {
      conditions.push(`https:${date.day.condition.icon}`)
      temps.push(`${date.day['mintemp_c']}°C`, `${date.day['maxtemp_c']}°C`)
    })

    return { conditions, temps }
  } catch (error) {
    throw new Error(error.message)
  }
}

import { createHtmlElement } from '../../helpers/createHtmlElement'
import { appendChildren } from '../../helpers/appendChildren'
import './currentWeather.scss'
import { selectElement } from '../../helpers/selectHtmlElement'
import { emptyContent } from '../../helpers/emptyContent'
import { getLocation } from '../../helpers/getCurrentLocation'
import { fetchData } from '../../helpers/fetchData'
const { latitude, longitude } = await getLocation()
const { current } = await fetchData(`${latitude},${longitude}`)

export const currentWeatherComponent = (
  cityName = current.cityName,
  country = current.country,
  temperature = current.temperature,
  feeling = current.feeling,
  condition = current.condition,
  wind = current.wind,
  humidity = current.humidity,
  icon = current.icon
) => {
  const exists = selectElement('.current-weather-container')
  const card = selectElement('.card')

  if (exists !== null) {
    emptyContent(exists)
  }

  const container = createHtmlElement('div', 'current-weather-container')
  const infoContainer = createHtmlElement('div', 'current-info-container')
  const iconContainer = createHtmlElement('div', 'current-icon-container')
  const iconElement = createHtmlElement('img', 'current-weather-icon')
  iconElement.src = icon

  const cityNameElement = createHtmlElement('h2', 'card-title', '', `City: ${cityName}`)
  const countryElement = createHtmlElement('h3', 'card-title', '', `Country: ${country}`)
  const temperatureElement = createHtmlElement('p', 'current-temp', '', `Temperature: ${temperature}°C`)
  const feelingElement = createHtmlElement('p', 'current-temp', '', `Feels like: ${feeling}°C`)
  const conditionElement = createHtmlElement('p', 'current-condition', `Condition: ${condition}`)
  const windElement = createHtmlElement('p', 'current-wind', '', `Wind speed: ${wind}kmph`)
  const humidityElement = createHtmlElement('p', 'current-humidity', '', `Humidity: ${humidity}%`)

  appendChildren(iconContainer, iconElement)
  appendChildren(infoContainer, cityNameElement, countryElement, temperatureElement, feelingElement, conditionElement, windElement, humidityElement)
  appendChildren(container, iconContainer, infoContainer)

  appendChildren(card, container)
}

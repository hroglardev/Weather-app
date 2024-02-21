import { createHtmlElement } from '../../helpers/createHtmlElement'
import { appendChildren } from '../../helpers/appendChildren'
import './currentWeather.scss'
import { selectElement } from '../../helpers/selectHtmlElement'
import { emptyContent } from '../../helpers/emptyContent'

export const currentWeatherComponent = (cityName, country, temperature, feeling, condition, wind, humidity, icon) => {
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

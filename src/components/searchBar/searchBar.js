import { createHtmlElement } from '../../helpers/createHtmlElement'
import { appendChildren } from '../../helpers/appendChildren'
import './searchBar.scss'
import { fetchData } from '../../helpers/fetchData'
import { currentWeatherComponent } from '../currentWeather/currentWeather'
import { foreCastTableComponent } from '../forecast/forecast'

export const searchBarComponent = () => {
  const form = createHtmlElement('form')

  const label = createHtmlElement('label', '', '', 'Input city name:')
  const searchBar = createHtmlElement('input', 'searchbar', 'searchbar')
  const button = createHtmlElement('button', '', '', 'Get info')

  form.setAttribute('novalidate', true)
  label.setAttribute('for', searchBar.id)
  searchBar.name = searchBar.id
  searchBar.setAttribute('placeholder', 'Paris')

  appendChildren(form, label, searchBar, button)
  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const { current, conditions, temps } = await fetchData(searchBar.value)
    console.log(conditions, 'condiciones')
    console.log(temps, 'temps')
    currentWeatherComponent(current.cityName, current.country, current.temperature, current.feeling, current.condition, current.wind, current.humidity, current.icon)
    foreCastTableComponent(conditions, temps)
  })

  return form
}

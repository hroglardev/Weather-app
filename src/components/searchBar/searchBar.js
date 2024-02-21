import { createHtmlElement } from '../../helpers/createHtmlElement'
import { appendChildren } from '../../helpers/appendChildren'
import './searchBar.scss'
import { fetchData } from '../../helpers/fetchData'
import { currentWeatherComponent } from '../currentWeather/currentWeather'
import { foreCastTableComponent } from '../forecast/forecast'
import { loaderComponent } from '../loader/loader'
import { selectElement } from '../../helpers/selectHtmlElement'
import { cardSkeletonComponent } from '../cardSkeleton/cardSkeleton'
import { cardComponent } from '../card/card'

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
    try {
      event.preventDefault()
      const loader = loaderComponent(25, 5, 'black')
      const card = selectElement('.card')
      card.remove()
      cardSkeletonComponent()
      form.insertBefore(loader, form.firstChild)
      const { current, conditions, temps } = await fetchData(searchBar.value)
      cardComponent()
      currentWeatherComponent(current.cityName, current.country, current.temperature, current.feeling, current.condition, current.wind, current.humidity, current.icon)
      foreCastTableComponent(conditions, temps)
    } catch (error) {
      console.log(error)
    } finally {
      const loader = selectElement('#search-loader')
      const skeleton = selectElement('.card-skeleton')
      loader.remove()
      if (skeleton !== null) {
        skeleton.remove()
      }
    }
  })

  return form
}

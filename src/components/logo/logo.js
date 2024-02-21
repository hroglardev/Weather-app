import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import DayLogo from '../../assets/icons/sunny-logo.svg'
import NightLogo from '../../assets/icons/moon-logo.svg'
import './logo.scss'

export const logoComponent = () => {
  const logoContainer = createHtmlElement('div', 'logo-container')
  const logo = createHtmlElement('img', 'logo')
  const title = createHtmlElement('h1', 'page-title', '', 'Weather App')

  const currentTime = new Date().getHours()
  console.log(currentTime)
  logo.src = currentTime >= 19 || currentTime < 7 ? NightLogo : DayLogo
  logo.alt = 'A sun or moon logo depending on current-time'
  appendChildren(logoContainer, logo, title)

  return logoContainer
}

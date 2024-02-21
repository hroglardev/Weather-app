import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectHtmlElement'
import { loaderComponent } from '../loader/loader'
import { logoComponent } from '../logo/logo'
import { searchBarComponent } from '../searchBar/searchBar'
import './header.scss'

export const headerComponent = () => {
  const header = createHtmlElement('header', '', 'header')
  const loader = loaderComponent(50, 8, 'black')
  const form = searchBarComponent()
  const logo = logoComponent()
  appendChildren(header, logo, loader, form)

  return header
}

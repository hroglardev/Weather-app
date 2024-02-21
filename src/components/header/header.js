import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectHtmlElement'
import { logoComponent } from '../logo/logo'
import { searchBarComponent } from '../searchBar/searchBar'
import './header.scss'

export const headerComponent = () => {
  const header = createHtmlElement('header', '', 'header')
  const container = selectElement('.container')

  const form = searchBarComponent()
  const logo = logoComponent()
  appendChildren(header, logo, form)
  appendChildren(container, header)
}

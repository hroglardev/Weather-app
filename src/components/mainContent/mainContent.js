import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectHtmlElement'
import { cardComponent } from '../card/card'

export const mainContentComponent = () => {
  const main = createHtmlElement('main', '', 'main')
  const container = selectElement('.container')
  appendChildren(container, main)
  cardComponent()
}

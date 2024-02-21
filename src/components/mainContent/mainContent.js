import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { cardComponent } from '../card/card'

export const mainContentComponent = () => {
  const main = createHtmlElement('main', '', 'main')
  const card = cardComponent()
  appendChildren(main, card)

  return main
}

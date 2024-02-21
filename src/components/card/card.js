import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectHtmlElement'
import { emptyContent } from '../../helpers/emptyContent'
import './card.scss'

export const cardComponent = () => {
  const cardExists = selectElement('.card')
  if (cardExists !== null) {
    emptyContent(cardExists)
  }
  const card = createHtmlElement('div', 'card')

  return card
}

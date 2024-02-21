import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectHtmlElement'
import { emptyContent } from '../../helpers/emptyContent'
import { appendChildren } from '../../helpers/appendChildren'
import { currentWeatherComponent } from '../currentWeather/currentWeather'
import { foreCastTableComponent } from '../forecast/forecast'
import { cardSkeletonComponent } from '../cardSkeleton/cardSkeleton'
import './card.scss'

export const cardComponent = async () => {
  try {
    const cardExists = selectElement('.card')
    const main = selectElement('main')
    if (cardExists !== null) {
      emptyContent(cardExists)
    }

    cardSkeletonComponent()
    const card = createHtmlElement('div', 'card')
    appendChildren(main, card)
    currentWeatherComponent()
    foreCastTableComponent()
  } catch (error) {
    console.log(error)
  } finally {
    const skeleton = selectElement('.card-skeleton')
    if (skeleton !== null) {
      skeleton.remove()
    }
  }
}

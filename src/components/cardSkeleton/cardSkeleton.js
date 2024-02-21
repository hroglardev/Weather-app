import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { emptyContent } from '../../helpers/emptyContent'
import { selectElement } from '../../helpers/selectHtmlElement'
import './cardSkeleton.scss'

export const cardSkeletonComponent = () => {
  const main = selectElement('main')
  const exists = selectElement('.card-skeleton')

  if (exists !== null) {
    emptyContent(exists)
  }

  const cardSkeleton = createHtmlElement('div', 'card-skeleton')
  const iconSkeleton = createHtmlElement('div', 'icon-skeleton')
  const infoSkeleton = createHtmlElement('div', 'info-skeleton')

  const city = createHtmlElement('div', 'title-skeleton')
  const country = createHtmlElement('div', 'title-skeleton')
  const temperature = createHtmlElement('div', 'paragraph-skeleton')
  const feeling = createHtmlElement('div', 'paragraph-skeleton')
  const condition = createHtmlElement('div', 'paragraph-skeleton')
  const wind = createHtmlElement('div', 'paragraph-skeleton')
  const humidity = createHtmlElement('div', 'paragraph-skeleton')

  appendChildren(main, cardSkeleton)
  appendChildren(cardSkeleton, iconSkeleton, infoSkeleton)
  appendChildren(infoSkeleton, city, country, temperature, feeling, condition, wind, humidity)

  return cardSkeleton
}

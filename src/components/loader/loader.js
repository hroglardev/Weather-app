import { createHtmlElement } from '../../helpers/createHtmlElement'

import './loader.scss'

export const loaderComponent = (size, borderWidth, borderColor) => {
  const loader = createHtmlElement('div', 'loader', 'search-loader')
  loader.style.width = `${size}px`
  loader.style.height = `${size}px`
  loader.style.borderTop = `${borderWidth}px solid ${borderColor}`
  loader.style.borderRight = `${borderWidth}px solid ${borderColor}`
  loader.style.borderLeft = `${borderWidth}px solid ${borderColor}`
  loader.style.borderBottom = `${borderWidth}px solid transparent`

  return loader
}

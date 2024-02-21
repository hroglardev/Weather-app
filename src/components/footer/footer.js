import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectHtmlElement'
import './footer.scss'

export const footerComponent = () => {
  const container = selectElement('.container')
  const footer = createHtmlElement('footer', '', 'footer')
  const footerParagraph = createHtmlElement('p')

  footerParagraph.innerText = '© 2024 WeatherApp. All rights reserved. Designed by Lucas Cubile.'
  appendChildren(footer, footerParagraph)
  appendChildren(container, footer)
}

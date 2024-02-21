import { headerComponent } from './components/header/header'
import { mainContent, mainContentComponent } from './components/mainContent/mainContent'
import { appendChildren } from './helpers/appendChildren'
import { selectElement } from './helpers/selectHtmlElement'

export const startApp = () => {
  const content = selectElement('.container')
  const header = headerComponent()
  const main = mainContentComponent()

  appendChildren(content, header, main)
}

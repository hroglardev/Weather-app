import { footerComponent } from './components/footer/footer'
import { headerComponent } from './components/header/header'
import { mainContentComponent } from './components/mainContent/mainContent'

export const startApp = () => {
  headerComponent()
  mainContentComponent()
  footerComponent()
}

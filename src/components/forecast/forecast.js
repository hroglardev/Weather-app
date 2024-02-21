import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { emptyContent } from '../../helpers/emptyContent'
import { selectElement } from '../../helpers/selectHtmlElement'
import { createRow, createSingleHead } from '../../helpers/tableFunctions'
import { DAYS, MIN_MAX } from '../../constants/constants'
import { getLocation } from '../../helpers/getCurrentLocation'
import { fetchData } from '../../helpers/fetchData'
import './forecast.scss'

const { latitude, longitude } = await getLocation()
const { conditions, temps } = await fetchData(`${latitude},${longitude}`)

export const foreCastTableComponent = (weatherConditions = conditions, temperatures = temps) => {
  const exists = selectElement('table')
  const card = selectElement('.card')
  if (exists !== null) {
    emptyContent(exists)
  }

  const table = createHtmlElement('table', 'table')
  const caption = createHtmlElement('caption', '', '', '7 day forecast')
  const tableHead = createHtmlElement('thead')
  const tableBody = createHtmlElement('tbody')
  appendChildren(table, caption, tableHead, tableBody)

  const dayRow = createHtmlElement('tr', 'day-row')
  appendChildren(tableHead, dayRow)

  const conditionRow = createHtmlElement('tr', 'condition-row')
  const temperatureHeadRow = createHtmlElement('tr', 'temp-row')
  const temperatureValuesRow = createHtmlElement('tr', 'temp-row')
  appendChildren(tableBody, conditionRow, temperatureHeadRow, temperatureValuesRow)

  createSingleHead('Day', dayRow, 'row', 2)
  createSingleHead('Condition', conditionRow, 'row', 2)
  createSingleHead('Temperature', temperatureHeadRow, 'row', 2, 2)

  createRow(DAYS, 2, 1, 'col', 'th', dayRow)
  createRow(weatherConditions, 2, 1, null, 'td', conditionRow)
  createRow(MIN_MAX, 1, 1, 'col', 'th', temperatureHeadRow)
  createRow(temperatures, 1, 1, null, 'td', temperatureValuesRow)

  appendChildren(card, table)
}

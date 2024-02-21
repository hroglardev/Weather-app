import { appendChildren } from './appendChildren'
import { createHtmlElement } from './createHtmlElement'
import { URL_REGEX } from '../constants/constants'

export const createSingleHead = (text, trElement, scope, colspan = 1, rowspan = 1) => {
  const head = createHtmlElement('th', '', '', text)
  head.setAttribute('scope', scope)
  head.setAttribute('colspan', colspan)
  head.setAttribute('rowspan', rowspan)
  appendChildren(trElement, head)
}

export const createRow = (list, colspan = 1, rowspan = 1, scope = null, tag, head) => {
  list.forEach((element) => {
    if (URL_REGEX.test(element)) {
      const cell = createHtmlElement(tag, '', '')
      const condition = createHtmlElement('img')
      condition.src = element
      appendChildren(cell, condition)
      cell.setAttribute('colspan', colspan)
      cell.setAttribute('rowspan', rowspan)
      appendChildren(head, cell)
    } else {
      const cell = createHtmlElement(tag, '', '', element)
      cell.setAttribute('colspan', colspan)
      cell.setAttribute('rowspan', rowspan)
      if (tag === 'th') {
        cell.setAttribute('scope', scope)
      }
      appendChildren(head, cell)
    }
  })
}

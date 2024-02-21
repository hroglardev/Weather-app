export const selectElement = (selector) => {
  const element = document.querySelector(selector)
  return element
}

export const selectElementList = (selector) => {
  const elementList = [...document.querySelectorAll(selector)]
  return elementList
}

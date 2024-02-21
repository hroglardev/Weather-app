export const createHtmlElement = (tag, classList, id, text) => {
  const domElement = document.createElement(tag)
  if (classList) {
    domElement.classList.add(classList)
  }

  if (id) {
    domElement.id = id
  }

  if (text) {
    domElement.innerText = text
  }
  return domElement
}

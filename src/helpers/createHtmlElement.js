export const createHtmlElement = (tag, classList, id) => {
  const domElement = document.createElement(tag)
  if (classList) {
    domElement.classList.add(classList)
  }

  if (id) {
    domElement.id = id
  }

  return domElement
}

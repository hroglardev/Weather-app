export const getLocation = () => {
  const locator = navigator.geolocation

  return new Promise((resolve, reject) => {
    locator.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        resolve({ latitude, longitude })
      },
      (error) => {
        console.error(error)
        reject(error)
      }
    )
  })
}

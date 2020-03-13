export const arrayFilter = array => {
  let filteredArray = []
  array.map(item => {
    if(!filteredArray.includes(item)) {
      filteredArray.push(item)
    }
    return filteredArray;
  })
}
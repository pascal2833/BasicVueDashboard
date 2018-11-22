const compareBasedOnNumber = (a, b) => {
  const elementA = a['dataQuantity']
  const elementB = b['dataQuantity']
  let comparison = 0
  if (elementA > elementB) {
    comparison = -1
  } else if (elementA < elementB) {
    comparison = 1
  }
  return comparison
}

export { compareBasedOnNumber }

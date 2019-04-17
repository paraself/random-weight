function random<T>(items: T[], weightCallback: (item: T) => number) {
  if (!Array.isArray(items)) {
    throw new TypeError('Items is not array!')
  }
  if (!(weightCallback && weightCallback instanceof Function)) {
    throw new TypeError('weightCallback is not a function!')
  }
  let total = 0
  for (let i = 0; i < items.length; i++) {
    let w = weightCallback(items[i])
    if (typeof w !== 'number') {
      throw new TypeError('weightCallback does not produce number')
    }
    total += w
  }
  let r = Math.random() * total
  for (let i = 0; i < items.length; i++) {
    total -= weightCallback(items[i])
    if (total <= r) {
      return items[i]
    }
  }
  console.warn('random weight fallback to the last item')
  return items[items.length - 1]
}

export default random
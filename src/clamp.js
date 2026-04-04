function clamp(number, lower, upper) {
  number = +number
  lower = +lower
  upper = +upper

  if (number < lower) return lower
  if (number > upper) return upper
  return number
}

export default clamp
// does javascript not have rounding built in to Math???
export const round = (value: number, decimals: number) => {
  if (!decimals) decimals = 0
  return Number(Math.round(value * Math.pow(10, decimals)) + 'e-' + decimals)
}

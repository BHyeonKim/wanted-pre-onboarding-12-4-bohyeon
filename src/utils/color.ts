const getColor = (strict: string) => {
  switch (strict) {
    case '성북구':
      return '#63372C'
    case '강남구':
      return '#C97D60'
    case '노원구':
      return '#FFBCB5'
    case '중랑구':
      return '#F2E5D7'
    default:
      return '#262322'
  }
}

export default getColor

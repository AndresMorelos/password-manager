const defaults = {
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true,
  exclude: ''
}

export const getProps = () => {
  const props = JSON.parse(localStorage.getItem('PasswordManager:generatorDefaults'))
  if (!props) {
    setProps(defaults)
    return defaults
  }
  return props
}

export const setProps = props => {
  return localStorage.setItem('PasswordManager:generatorDefaults', JSON.stringify(props))
}

const setValue = {
  text: value => value,
  number: value => {
    let valu = parseFloat(value)
    valu = isNaN(valu) || valu === 0 ? "" : Math.abs(valu)
    return valu
  },
  checkbox: value => value,
  email: value => value,
  textarea: value => value,
  password: value => value,
  passwordConfirmation: value => value,
}

const setFormObject = (data, fn) => ({target}) => {
  const value = target.type === "checkbox" ? target.ckecked : target.value
  return fn({...data, [target.name]: setValue[target.type](value)})
}
export default setFormObject

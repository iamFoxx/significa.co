function validateEmail(email: string) {
  const regex = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/

  if (!email) {
    return false
  }

  if (email.length > 254) {
    return false
  }

  if (!regex.test(email)) {
    return false
  }

  // Further checking of some things regex can't handle
  const parts = email.split('@')
  if (parts[0].length > 64) {
    return false
  }

  const domainParts = parts[1].split('.')
  if (domainParts.some(part => part.length > 63)) {
    return false
  }

  return true
}

export default validateEmail
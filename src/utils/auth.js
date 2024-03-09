import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const RegionCode = 'region_code'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setRegionCode(code) {
  return Cookies.set(RegionCode, code)
}
export function getRegionCode() {
  return Cookies.get(RegionCode)
}

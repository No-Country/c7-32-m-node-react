import Cookie from 'js-cookie'

const setCookie = (cookieName, cookieVal) =>{
  Cookie.set(cookieName, cookieVal, {
    secure: true,
    sameSite: 'strict'
  })
}
export default setCookie



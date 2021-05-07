let apiUrl
const apiUrls = {
  production: 'http://www.omdbapi.com/apikey.aspx',
  development: 'http://www.omdbapi.com/apikey.aspx'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

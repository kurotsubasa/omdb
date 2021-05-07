let apiUrl
const apiUrls = {
  production: 'http://www.omdbapi.com/?',
  development: 'http://www.omdbapi.com/?'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

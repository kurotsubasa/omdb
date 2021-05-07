let apiUrl
const apiUrls = {
  production: 'http://www.omdbapi.com/?i=tt3896198&apikey=ed03f20d',
  development: 'http://www.omdbapi.com/?i=tt3896198&apikey=ed03f20d'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

let baseUrl = "https://698c5d9121a248a273614fa0.mockapi.io/api/v1/"

fetch(baseUrl + 'users')
.then(res => res.json())
.then(data => console.log(data))
const fetch = require('node-fetch');

const fetchUser = () => {
  var url = 'https://jsonplaceholder.typicode.com/users/1'
  return fetch(url).then(function(response) {
    return response.json();
  });
}

const logTodoTitle = async () => {
  var user = await fetchUser();
  console.log(user);
}

logTodoTitle();
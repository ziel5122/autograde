const handleResponse = (response) => (
  new Promise((resolve, reject) => {
    switch (response.status) {
      case 200:
        resolve(response.json());
      case 400:
        reject('username or password incorrect');
      case 500:
        reject('server exploded');
      default:
        reject('unexpected status code');
    }
  })
);

const handleLogin = (username, password) => (
  new Promise((resolve, reject) => {
    if (username && password) {
      fetch('/login/authorize', {
        body: JSON.stringify({ username, password }),
        headers: { 'content-type': 'application/json' },
        method: 'post',
      })
        .then(handleResponse)
        .then(response => resolve(response))
        .catch((err) => {
          console.log(err);
          reject(err);
        })
    } else if (!username && !password) {
      reject('username and password required');
    } else if (!username) {
      reject('username required');
    } else {
      reject('password required');
    }
  })
);

export { handleLogin, handleResponse };

const login = (username, password) => (
  new Promise((resolve, reject) => {
    fetch(`/login/authorize`, {
      body: JSON.stringify({
        password,
        username,
      }),
      headers: {
        'content-type': 'application/json',
      },
      method: 'post',
    })
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.text();

          case 400:
            throw new Error('username or password incorrect');

          case 500:
            throw new Error('something went wrong on our end');

          default:
            throw new Error(`this wasn't supposed to happen`);
        }
      })
      .then(jwt => resolve(jwt))
      .catch(err => reject(err));
  })
);

export { login };

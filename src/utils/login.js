const fetchStatusHandler = (response) => {
  if (response.status === 200) return response;
  throw new Error(response.statusText);
};

const login = (username, password, setLoggedIn) => {
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
    .then(fetchStatusHandler)
    .then(res => res.text())
    .then((token) => {
      sessionStorage.setItem('jwt', token);
      setLoggedIn(true);
    })
    .catch(err => console.log(err));
};

export { fetchStatusHandler, login };

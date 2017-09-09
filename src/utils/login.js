const loginStatusHandler = (response) => {
  const { status, statusText } = response;
  if (response.status === 200) return response;
  throw new Error(`${status}: ${statusText}`);
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
    .then(loginStatusHandler)
    .then(({ statusText }) => {
      sessionStorage.setItem('jwt', statusText);
      setLoggedIn(true);
    })
    .catch(err => console.error(err));
};

export { loginStatusHandler, login };

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
    .then(res => {
      console.log('utils');
      console.log('success');
      console.log(res.status);
      console.log(res.statusText);
      return res.text();
    })
    .then(text => console.log(text))
    .catch(err => {
      console.log('utils');
      console.error(err)
    });
};

export { fetchStatusHandler, login };

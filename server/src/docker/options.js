const headers = {
  'content-type': 'application/json',
  host: '127.0.0.1',
};

const urlBase = 'http://unix:/var/run/docker.sock:/v1.30';

const createOptions = (cmd, binds, stopTimeout) => ({
  headers,
  body: JSON.stringify({
    cmd,
    hostConfig: {
      binds,
    },
    image: 'autograde',
    stopTimeout,    //seconds
  }),
  method: 'post',
  tty: true,
  url: `${urlBase}/containers/create`,
});

const logsOptions = (id) => ({
  headers,
  url: `${urlBase}/containers/${id}/logs?stdout=1&stderr=1`,
  method: 'get',
});

const pruneOptions = {
  headers,
  method: 'post',
  url: `${urlBase}/containers/prune`,
}

const startOptions = (id) => ({
  headers,
  url: `${urlBase}/containers/${id}/start`,
  method: 'post',
});

const waitOptions = (id) => ({
  headers,
  method: 'post',
  url: `${urlBase}/containers/${id}/wait`,
});

module.exports = {
  createOptions,
  logsOptions,
  pruneOptions,
  startOptions,
  waitOptions,
};

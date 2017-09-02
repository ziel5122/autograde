const request = require('request-promise');

const code = `#include <stdio.h>

int main() {
    printf("french fry");
}`;

request({
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: '0808',
      code: code,
    }),
    method: 'post',
    url: 'http://localhost:8892/docker/run',
})
  .then(res => console.log(res));

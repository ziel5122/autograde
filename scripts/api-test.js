const request = require('request-promise');

const code = `#include <stdio.h>

int main() {
    int x = 24;
    int y = 24 * 4;
    printf("x * y = %d", x * y);
}`;

request({
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: '0808',
      code: code,
      hwNum: 2,
    }),
    method: 'post',
    url: 'http://localhost:8892/docker/run',
})
  .then(res => console.log(res));

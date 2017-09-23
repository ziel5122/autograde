import React, { PureComponent } from 'react';

class Assignments extends PureComponent {
  constructor() {
    super();
    this.state = { Items: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/assignments/get-visible', {
      body: JSON.stringify({
       token: sessionStorage.getItem('jwt'),
      }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(({ Items }) => {
        console.log(Items);
        this.setState({ Items });
      })
      .catch(err => console.log(err, err.stack));
  }

  render() {
    return (
      <div>
        {
          this.state.Items.map(({ id, dueDate, visible }, index) => (
            <div key={index}>
              <span>{id}</span><span>{dueDate}</span><span>{`${visible}`}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Assignments;

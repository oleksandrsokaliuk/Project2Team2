import React from 'react';
import axios from 'axios';


function NewChuck() {
  const [joke, setJoke] = React.useState('');

  const newChuck = () => {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then((res) => {
        setJoke(res.data.value);
        //console.log(res.data.value);
      })
      .catch((error) => console.log(error));

  };

  return (
    <div>
      {joke} <br />
      
      <button type="button" onClick={newChuck}>
        {' '}
        New Chuck{' '}
      </button>
    </div>
  );
}
export default NewChuck;
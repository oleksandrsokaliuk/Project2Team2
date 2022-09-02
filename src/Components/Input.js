import React from "react";

const indiNames = [
  "Artistic",
  "Big",
  "Freedom",
  "Terrible",
  "Wild",
  "Cheerful",
  "Evil",
  "Playful",
  "Prickly",
  "Lunar",
  "Little",
  "Undending",
  "Melodious",
  "Enraged",
  "Steppe",
  "Hasty",
  "Snorting",
  "Good",
  "Tenacious",
  "Black",
  "Hissing",
  "This",
  "Young",
  "Bright",
];

const secondIndiNames = [
  "Angel",
  "Chipmunk",
  "Boar",
  "Dove",
  "Oak",
  "Hedgehog",
  "Crane",
  "Bison",
  "Mole",
  "Fox",
  "Mammoth",
  "Rhino",
  "Deer",
  "Pelican",
  "Ostrich",
  "Coward",
  "Ghoul",
  "Owl",
  "Hamster",
  "King",
  "Worm",
  "Sorrel",
  "Squirrel",
  "Emo",
  "Anchor",  
];

function Input() {    
    const [ inputValue, setInputValue ] = React.useState('');
    const [ items, setItems ] = React.useState([]);    

    function handleClick() {
      const newObj = {name: inputValue, firstName: getRandomName(indiNames), secondName: getRandomName(secondIndiNames), id: Date()};
      setItems([...items, newObj]);
      setInputValue('');      
    }
    function getRandomName(arr){
      return arr[Math.floor(Math.random()*arr.length)]
    };
    
    return (
      <div>
        <h2>Users list</h2>
        <input
        
        value={inputValue} 
        onChange={event => setInputValue(event.target.value)}
        type="text" placeholder="Enter your name ..." />
        <br/>
        <button onClick={handleClick}>Save</button>
        <ul>{items.map(item => <li key={item.id}>{item.name} The {item.firstName} {item.secondName}</li>)}</ul>
      </div>
    );
  }

  
  
  export default Input;
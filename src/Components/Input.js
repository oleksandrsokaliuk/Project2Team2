// import React from "react";



// function Input() {
//   const [inputValue, setInputValue] = React.useState('');
//   const [items, setItems] = React.useState([]);

//   function handleClick() {
//     const newObj = { name: inputValue, firstName: getRandomName(indiNames), secondName: getRandomName(secondIndiNames), id: Date() };
//     setItems([...items, newObj]);
//     setInputValue('');
//   }
//   function getRandomName(arr) {
//     return arr[Math.floor(Math.random() * arr.length)]
//   };

//   return (
//     <div>
//       <h2>Users list</h2>
//       <input

//         value={inputValue}
//         onChange={event => setInputValue(event.target.value)}
//         type="text" placeholder="Enter your name ..." />
//       <br />
//       <button onClick={handleClick}>Save</button>
//       <ul>{items.map(item => <li key={item.id}>{item.name} The {item.firstName} {item.secondName}</li>)}</ul>
//     </div>
//   );
// }



// export default Input;
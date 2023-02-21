function Test() {
    const clickHandler = () => {
      let randomNum = Math.floor(Math.random() * 10) + 1;
      console.log(randomNum);
      let userInput = prompt("Type a number!");
      alert(`Computer Number: ${randomNum}, Your Guess: ${userInput}`);
    };
  
    return (
      <div>
        <h1>Task: Add a button and handle a click event</h1>
        <button onClick={clickHandler}>Guess a Number</button>
      </div>
    );
  }
  
  export default Test;
  
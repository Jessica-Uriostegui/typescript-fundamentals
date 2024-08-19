import React from 'react';

//Defining basic TypeScript types
const App: React.FC = () => {
  //Task 1
  const greeting: string = 'Hello TypeScript!';

  //Task 2
  const numberList: number[] = [1, 2, 3, 4, 5];

  //Task 3
  const calculateSum = (a: number, b: number): number => {
    return a + b;
  };
  const sum = calculateSum(numberList[0], numberList[1]);

  //Array Manipulation and Data Rendering
  //Task 1 - ColorList Array
  const colorList: string[] = ['Red', 'Green', 'Blue', 'Yellow', 'Pink'];

  //Task 2
  const filterNumbers = (numbers: number[]): number[] => {
    return numbers.filter(number => number % 2 === 0);
  };
  const EvenNumbers: React.FC<{ numbers: number[] }> = ({ numbers }) => {
    const evenNumbers = filterNumbers(numbers);
  
    return (
      <div>
        <h2>Even Numbers</h2>
        <ul>
          {evenNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    );
  };

  //Task 3
  type User = {
    name: string;
    age: number;
  };

  const UserList: React.FC = () => {
    const users: User[] = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
    ];
  
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name} - {user.age} years old</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Number List: {numberList.join(',')}</p>
      <p>Sum of the first two numbers: {sum}</p>

      <h2>Color List</h2>
      <ul>
        {colorList.map((color, index) => (
          <li key={index} style={{ color: color }}>{color}</li>
        ))}
      </ul>

      <EvenNumbers numbers={numberList} />
      <UserList />
    </div>
  );
}


export default App;
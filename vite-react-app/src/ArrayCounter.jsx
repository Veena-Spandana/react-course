import { useState } from "react";

// When 1 counter = [{id: 1, value: 0}];
// When 2 counter = [{id: 1, value: 0}, {id: 2, value: 0}];
// When 3 counter = [{id: 1, value: 0}, {id: 2, value: 0},{id: 3, value: 0}]

function ArrayCounter(){
  const [counters, setCounters] = useState([{id: 1, value: 0}]);

  const addCounter = () => {
    setCounters([...counters, {id: counters.length + 1, value: 0}])
  };

  const increment = (id) => {
    setCounters(counters.map(counter => 
      counter.id === id ? {...counter, value: counter.value + 1} : counter
    ))}
  return (
    <div className="app-container">
      <button onClick={addCounter}>Add a counter</button>
      <ul>
        {counters.map(counter => (
          <li key={counter.id}>
          Counter: {counter.id} Value: {counter.value}
          <button onClick={() => increment(counter.id)}>Increment</button>
        </li>
        ))}

      </ul>
    </div>
  );
}

export default ArrayCounter;
import React, {useRef, useState, useEffect} from 'react';

function CountComponent() {
  const [count, setCount] = useState(0);

  const refCount = useRef(0);

  const handleStateCount = () => {
    setCount(count + 1);
  };

  const handleRefCount = () => {
    refCount.current += 1;
    console.log(`Ref count ${refCount.current}`);
  }

  useEffect(() => {
    console.log("component is rendered");
  })
  return (
    <div>
     {/* {refValue.current} */}

      <p>State Count: {count}</p>
      <button onClick={handleStateCount}>Increment State</button>

      <p>Ref Count: {refCount.current}</p>
      <button onClick={handleRefCount}>Increment Ref Count</button>
    </div>
  )
}

export default CountComponent;
import React, {useRef} from 'react';

function FocusComponent(){

  const input = useRef(null);

  const focusInput = () => {
    input.current.focus();
    input.current.style.backgroundColor = 'lightpink'
  }

  const resetInput = () => {
    // input.current.blur();
    input.current.style.backgroundColor = 'white';
  };
  return (
    <div>
      <input type="text" ref={input} placeholder="Focus me"/>
      <button onClick={focusInput}>Focus and Hightlight</button>

      <button onClick={resetInput}>Reset</button>
    </div>
  );
}

export default FocusComponent;
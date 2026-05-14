import React,{ useState } from "react";
import MouseTracker from "./MouseTracker";

function ParentComponent() {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent((prev) => !prev)
  };

  return(
    <div>
      <button onClick={toggleComponent}>
        {showComponent ? 'Unmounted Tracker' : 'Mounted Tracker'}
      </button>

      {showComponent && <MouseTracker />}
    </div>
  );
}

export default ParentComponent;
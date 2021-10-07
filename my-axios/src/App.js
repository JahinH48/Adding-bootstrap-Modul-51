
import './App.css';
import { useSpring, animated,config } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  return (
    <div className="App">
      <animated.div style={useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })}>
    <h1>Jisan Hasan</h1>
  </animated.div>

    </div>
  );
}

export default App;

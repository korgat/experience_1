import { useState } from 'react';
import classes from './style.module.scss';

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      {value}
      <button className={classes.button} onClick={() => setValue((prev) => ++prev)}>
        INCREASE
      </button>
    </div>
  );
};

export default Counter;

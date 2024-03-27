import { useState } from 'react';

export default function Clock(props) {
    //the color here does not get updated when the setcolor in App.js run since state gets a snapshot
  const [color, setColor] = useState(props.color);
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}

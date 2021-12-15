import React from 'react';

export default function Entry({ entry: { name, message } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{message}</p>
    </div>
  );
}

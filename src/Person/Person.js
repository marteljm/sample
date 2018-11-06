import React from 'react';

const person = (props) => {
  return <p>I'm a Person named {props.name} and I am {props.age} old and {props.children}</p>
}

export default person;

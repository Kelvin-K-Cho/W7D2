import React from 'react';
import {ErrorListItem} from './error_list_item';

export const ErrorList = (props) => {
  return (
    <ul style={{color: 'red'}}>
      {props.errors.map((error, index) => (
        <ErrorListItem key={index} error={error}/>
      ))}
    </ul>
  );
};

import React from 'react'
import FirstComponent from './FirstComponent'
import NamedComponent from './NamedComponent'

const App = () => {
  return (
    <div>
      <FirstComponent/>
      <NamedComponent name="User"/>
    </div>
  );
}

export default App;

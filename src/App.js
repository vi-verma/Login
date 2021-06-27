import React, {useState} from 'react';
import Navigation from './Navigation';
import Login from './Login';


function App() {
  const [userLogin, setUserLogin] = useState();

  return (
    <div className="container">
      <Navigation/>
      <Login on setUserLogin={setUserLogin}/>
    </div>
  );
}

export default App;

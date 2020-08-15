import React, {useState} from 'react';
import Home from './Home';
import Login from './Login';

export default function AppSwitch({route}) {
  const {userToken} = route.params;
  const [userTk, setUserTk] = useState(userToken);

  return userTk && userTk != '' ? (
    <Home setUserTk={setUserTk} userTk={userTk} />
  ) : (
    <Login setUserTk={setUserTk} />
  );
}

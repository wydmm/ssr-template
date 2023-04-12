import React from 'react';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    alert('asd');
  }, []);
  return (
    <React.Fragment>
      <h3>Home Page !</h3>
    </React.Fragment>
  );
};

export default Home;

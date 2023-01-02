import React from 'react';
import { useLocation } from 'react-router-dom';
import SignUpForm from '../Form/RegistrationForm';

const Home = () => {
  const location = useLocation();

  return (
    <div className="Home">
      {location.pathname === '/' && <SignUpForm />}
    </div>
  );
};

export default Home;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Account, NavBar } from '.';
import PasswordGenerator from '../components/Password/PasswordGenerator/PasswordGenerator';

const App = () => {
  return (
    <div className="root">
      <NavBar />
      <main className="content">
        <div className="toolbar" />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          
          <Route path="/password" element={<PasswordGenerator />} />


          <Route path="/account" element={<Account />} />

          {/* <Route path="/account/:id" element={<Account />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App;
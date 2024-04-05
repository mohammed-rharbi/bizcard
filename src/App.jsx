import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Name from "@/components/component/name";
import Loginform from "@/components/component/loginform";
import Registerfrom from "@/components/component/registerform";
import Welcome from "@/components/component/welcome";
import Navbar from "@/components/component/navbar";
import Create from "@/components/component/cardcreate";
import Edit from "@/components/component/editcard";
import Contact from "@/components/component/contact";
import Dash from "@/components/component/dashboard";






function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/card" element={<Name />} />
          <Route exact path="/login" element={<Loginform />} />
          <Route exact path="/register" element={<Registerfrom />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit" element={<Edit />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/dash" element={<Dash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
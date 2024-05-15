
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// =================================================================

const RegisterDoctor = () => {
  
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

 
  // =================================================================

  const addNewDoctor = async (e) => {
    const role_id=2
    const navigate = useNavigate();

    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/users/register", {
        firstName,
        lastName,
        age,
        country,
        email,
        password,
        phone,
        role_id
      });
      if (result.data.success) {
        setStatus(true);
        setMessage(result.data.message);
        navigate("/login")
      } else throw Error;
    } catch (error) {
      console.log (error)
      setStatus(false);
      
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while register, please try again");
    }
  };

  

  // =================================================================

  return (
    <>
      <div className="Form">
        {!isLoggedIn ? (
          <>
            <p className="Title">Register:</p>
            <form onSubmit={addNewDoctor}>
              <br />
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <br />
              <input
                type="number"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
              />
              <br />
              <input
                type="number"
                placeholder="phone number"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />

              <button className="docregbut" onClick={
                addNewDoctor()
           
              }>Register</button>
              <br />
            </form>
            {status
              ? message && <div className="SuccessMessage">{message}</div>
              : message && <div className="ErrorMessage">{message}</div>}
          </>
        ) : (
          <p>Logout First</p>
        )}
      </div>
    </>
  );
};

export default RegisterDoctor;

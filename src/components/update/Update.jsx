import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function Update() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ID, setID] = useState(null);

  console.log(firstName);
  console.log(lastName);
  console.log(email);

  const dataToApi = () => {
    axios
      .put(`https://629f5932461f8173e4e782d9.mockapi.io/Crud/${ID}`, {
        firstName,
        lastName,
        email,
      })
      .then(() => {
        navigate("/LoginData");
      });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
        </Form.Field>

        <Button type="submit" onClick={dataToApi}>
          UPDATE
        </Button>
      </Form>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  console.log(firstName);
  console.log(lastName);
  console.log(email);

  const dataToApi = () => {
    axios
      .post(`https://629f5932461f8173e4e782d9.mockapi.io/Crud`, {
        firstName,
        lastName,
        email,
      })
      .then(() => {
        navigate("/LoginData");
      });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="fname"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
        </Form.Field>

        <Button type="submit" onClick={dataToApi}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

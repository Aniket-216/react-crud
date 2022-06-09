import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://629f5932461f8173e4e782d9.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, firstName, lastName, email) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
  };

  const getData = () => {
    axios
      .get(`https://629f5932461f8173e4e782d9.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://629f5932461f8173e4e782d9.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Table celled>
        <Table.Header align="center">
          <Table.Row>
            <Table.HeaderCell>S. No.</Table.HeaderCell>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Operation</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data, index) => {
            return (
              <Table.Row>
                <Table.Cell>{index + 1} </Table.Cell>
                <Table.Cell>{data.id} </Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>
                  <Link to={`/View/${data.id}`}>
                    <Button className="btn btn-secondary">View</Button>
                  </Link>
                  <Link to="/Update ">
                    <Button
                      color="green"
                      onClick={() =>
                        setData(
                          data.id,
                          data.firstName,
                          data.lastName,
                          data.email
                        )
                      }
                    >
                      Update
                    </Button>
                  </Link>
                  <Button color="red" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

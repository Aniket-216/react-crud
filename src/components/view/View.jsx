import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function View() {
  const [viewData, setViewData] = useState([]);

  const { id } = useParams();
  //useMemo or callback

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://629f5932461f8173e4e782d9.mockapi.io/Crud/${id}`)
      .then((getData) => {
        const fetchedData = getData.data;
        console.log("get", getData);
        setViewData(fetchedData);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Link to={"/LoginData"} className="btn btn-primary">
        Back to Home
      </Link>
      <h1 className="display-4"> User ID : {viewData.id}</h1>
      <hr />
      <ul className="list-group w-100">
        <li className="list-group-item">First Name : {viewData.firstName} </li>
        <li className="list-group-item">Last Name : {viewData.lastName}</li>
        <li className="list-group-item">Email :{viewData.email}</li>
      </ul>
    </div>
  );
}

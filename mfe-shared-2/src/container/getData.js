import React from "react";
import axios from "axios";
import "./getData.css";
const GetData = ({ getUserDetail }) => {
  const [userData, setUserData] = React.useState();

  const getUsers = () => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        setUserData(data.data);
      });

      // console.log(users.data);
    } catch (err) {
      console.log("Found Error", err);
    }
  };

  // React.useEffect(() => {
  getUsers();
  // }, []);

  return (
    <>
      <h4>USER'S FROM SHARED-2</h4>
      <div className="card-container">
        {userData &&
          userData.map((el, index) => (
            <div className="card" key={index} onClick={() => getUserDetail(el)}>
              <div className="top">{el.name}</div>
              <div className="middle">
                Company : {el.company.name} <br />
                City : {"  " + el.address.city} <br />
              </div>
              <div className="bottom">
                Mobile : {el.phone}
                <br />
                Email : {el.email} <br />
                Website : {el.website}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default GetData;

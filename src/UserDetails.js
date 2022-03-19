import React from "react";
import moment from "moment";
import EditText from "./EditText";
import style from "./userDetails.module.css";

export default function UserDetails({position, setPosition}) {
  const [profileName, setProfileName] = React.useState("Loading..");
  const [username, setUsername] = React.useState("Loading..");
  const [dob, setDob] = React.useState("Loading..");

  async function fetchDetails() {
    let response;
    let details;
    try {
      response = await fetch("https://randomuser.me/api/");
      details = await response.json();
    } catch {
      alert("Server is off");
      details = {
        results: [
          {
            name: { first: "Random", title: "Mr", last: "User" },
            login: { username: "@user" },
          },
        ],
      };
    }
    return details?.results[0];
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async function () {
    let userDetails = await fetchDetails();
    if (userDetails !== undefined) {
      setProfileName(
        userDetails.name.title +
          " " +
          userDetails.name.first +
          " " +
          userDetails.name.last
      );
      setUsername(userDetails.login.username);
      setDob(moment(userDetails.dob.date).format("DD MMM, YYYY"));
      setPosition([userDetails.location.coordinates.latitude, userDetails.location.coordinates.longitude ]);
    }
  }, []);

  return (
    <div>
      <div>
        {" "}
        <span className={style.heading}>Name:</span>{" "}
        <EditText text={profileName} />{" "}
      </div>
      <div>
        {" "}
        <span className={style.heading}>Username: </span>{" "}
        <EditText text={username} />{" "}
      </div>
      <div>
        {" "}
        <span className={style.heading}>Birth date: </span>{" "}
        <EditText text={dob} />{" "}
      </div>
    </div>
  );
}

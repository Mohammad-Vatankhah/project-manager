import React, { useEffect } from "react";
import "./FollowersCard.css";

import { User } from "../User/User";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getAllUser } from "../../api/UserRequest";
const FollowersCard = () => {
  const [people, setPeople] = useState([]);
  const user = useSelector((state) => state.authReducer.authData.user);
  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await getAllUser();
      setPeople(data);
    };
    fetchPeople();
  }, []);
  return (
    <div className="FollowersCard">
      {people.length > 0 && (
        <>
          <h3>People you may know</h3>
          {people.map((person, id) => {
            if (person._id !== user._id) {
              console.log(person);
              return (
                <div className="follower">
                  <User person={person} key={id} />
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default FollowersCard;

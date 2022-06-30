import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/phones.css";

export const Phones = () => {
  const [phoneData, setphoneData] = useState([]);

  useEffect(() => {
    const getPhones = () => {
      axios
        .get("http://localhost:4041/api/phones")
        .then((res) => {
          setphoneData(res.data[0]);
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    };
    getPhones();
  }, []);

  const phoneDisplay = phoneData.map((items) => {
    function PhoneCard({ phone_id, name, photo, price }) {
      return (
        <div className="phones-card-container" key={phone_id}>
          <h1 className="phone-name">{name}</h1>
          <img className="phone-photo" src={photo} alt="" />
          <h2 className="phone-price">${price}</h2>
        </div>
      );
    }
    return <PhoneCard {...items} />;
  });

  return (
    <div className="phones">
      <div className="phones-container">{phoneDisplay}</div>
    </div>
  );
};

export default Phones;

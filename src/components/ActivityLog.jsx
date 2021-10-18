import React from "react";

import { BsThreeDots } from "react-icons/bs";

export default function ActivityLog() {
  const data = [
    {
      day: "Sun",
      date: "6/9 7:11pm",
      name: "Adobe Creative Suit Monthly Plan",
      status: "Paid",
    },
    {
      day: "Fri",
      date: "6/7 1:11am",
      name: "Amazon Premium Card",
      status: "Paid",
    },
    {
      day: "Mon",
      date: "6/3 3:07pm",
      name: "Sent Payment to Cleint X",
      status: "Paid",
    },
    {
      day: "Thu",
      date: "5/30 3:00pm",
      name: "Changed Password",
      status: "Account",
    },
  ];
  return (
    <div className="activity">
      <div className="activity__info">
        <h4>Wallets</h4>
        <BsThreeDots />
      </div>
      <div className="activity__container">
        {data.map((transaction) => {
          return (
            <div className="transaction">
              <div className="timestamp">
                <h5>{transaction.day}</h5>
                <h6>{transaction.date}</h6>
              </div>
              <div className="dot"></div>
              <div className="details">
                <h5>{transaction.name}</h5>
                <h5>{transaction.status}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

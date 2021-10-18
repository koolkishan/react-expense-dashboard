import React from "react";
import { BsThreeDots } from "react-icons/bs";
import wallet1 from "../assets/wallet1.png";
import wallet2 from "../assets/wallet2.png";

export default function Wallets() {
  const wallets = [
    {
      name: "BTC (Bitcoin)",
      balance: "1,777.10",
      USD: "9,241,123.31",
      image: wallet1,
    },
    {
      name: "ETH (Ether)",
      balance: "4,251.51",
      USD: "21,112.67",
      image: wallet2,
    },
  ];
  return (
    <div className="wallets">
      <div className="wallets__info">
        <h4>Wallets</h4>
        <BsThreeDots />
      </div>
      <div className="wallets__container">
        {wallets.map((wallet) => {
          return (
            <div className="wallet">
              <img src={wallet.image} alt="" />
              <div className="wallet__info">
                <h3 className="wallet__info__title">{wallet.name}</h3>
                <div className="wallet__info__balance">
                  <h4>Balance</h4>
                  <h3>{wallet.balance}</h3>
                </div>
                <div className="wallet__info__price">
                  <h4>USD</h4>
                  <h4>{wallet.USD}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

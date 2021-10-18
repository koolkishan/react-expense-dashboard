import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
export default function Sidebar() {
  const links = [
    {
      title: "Dashboard",
      icon: SiGoogleanalytics,
    },
    {
      title: "Buy / Sell",
      icon: AiFillAppstore,
    },
    {
      title: "News",
      icon: BiNews,
    },

    {
      title: "Send Money",
      icon: BiRocket,
    },
    {
      title: "Deposit",
      icon: BsCashStack,
    },

    {
      title: "Transactions",
      icon: FaWallet,
    },
    {
      title: "Account",
      icon: MdAccountCircle,
    },
    {
      title: "Settings",
      icon: AiFillSetting,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">
        <h2>
          FIN<span>CHECK</span>
        </h2>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li>
              <a href="#">
                {<link.icon />}
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React from "react";
import CardList from "./Component/CardList.jsx";
const Data = () => {
  const data = [
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/i/e/15amn7-thin-and-light-laptop-lenovo-original-imagsvykgkecffgr.jpeg?q=70",
      name: "DEll LAPTOP",
      start: "starts Form",
      price: 40000,
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
      name: "Apple Macbook",
      start: "starts Form",
      price: 70000,
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/r/3/-original-imagpxgqpggsx6tm.jpeg?q=70",
      name: "Asus VivoBook",
      start: "starts Form",
      price: 30000,
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/g/y/e/ideapad-slim-1i-thin-and-light-laptop-lenovo-original-imagufavnfjferxf.jpeg?q=70",
      name: "Lenovo",
      start: "starts Form",
      price: 45000,
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/w/latitude-3420-business-laptop-dell-original-imagn6hrxsryasb6.jpeg?q=70",
      name: "Dell I5",
      start: "starts Form",
      price: 45000,
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/l4x2rgw0/computer/m/n/n/vostro-3420-notebook-dell-original-imagfpq37h38xebf.jpeg?q=70",
      name: "Dell I3",
      start: "starts Form",
      price: 33000,
    },
  ];

  return (
    <div className="main-container">
      <CardList data={data}></CardList>
    </div>
  );
};
export default Data;

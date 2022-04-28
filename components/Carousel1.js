import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Image from "next/image";
import img1 from "../public/static/images/cards/1.jpg";
import img2 from "../public/static/images/cards/2.jpg";

function Item({ item }) {
  return (
    <div
      style={{
        color: "white",
        position: "relative",
        backgroundImage: `url(${item.img})`,
        height: 400,
      }}
    >
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </div>
  );
}

export default function Carousel1() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "/static/images/cards/2.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "/static/images/cards/1.jpg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img: "/static/images/cards/3.jpg",
    },
  ];

  return (
    <Carousel
      autoPlay
      stopAutoPlayOnHover
      swipe
      NextIcon={<AccountTreeIcon />}
      PrevIcon={<AccountTreeIcon />}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

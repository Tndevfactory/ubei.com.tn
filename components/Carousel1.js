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
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button
        sx={{ mb: 4 }}
        color="error"
        className="CheckButton mb-3"
        variant="contained"
      >
        voir plus
      </Button>
    </div>
  );
}

export default function Carousel1() {
  var items = [
    {
      name: "Rapidite et efficacite",
      description: "Notre but ultime est de vous satisfaire",
      img: "/static/images/cards/2.jpg",
    },
    {
      name: "Maintenance gratuite",
      description:
        "Vous disposez deja d'une offre de maintenance gratuite pour 3 ans",
      img: "/static/images/cards/1.jpg",
    },
    {
      name: "Remise extraordinaire",
      description: "Des prix tres abordable face a la concurrence ...",
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
      // next={(next, active) =>
      //   console.log(`we left ${active}, and are now at ${next}`)
      // }
      // prev={(prev, active) =>
      //   console.log(`we left ${active}, and are now at ${prev}`)
      // }
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

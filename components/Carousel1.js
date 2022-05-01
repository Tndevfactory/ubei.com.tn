import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

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
      <h2 style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}>{item.name}</h2>
      <p style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}>
        {item.description}
      </p>

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
      img: "/static/images/cards/carousel1.webp",
    },
    {
      name: "Maintenance gratuite",
      description:
        "Vous disposez deja d'une offre de maintenance gratuite pour 3 ans",
      img: "/static/images/cards/carousel2.webp",
    },
    {
      name: "Remise extraordinaire",
      description: "Des prix tres abordable face a la concurrence ...",
      img: "/static/images/cards/carousel3.webp",
    },
  ];

  return (
    <Carousel
      autoPlay
      stopAutoPlayOnHover
      swipe
      // animation="slide"
       duration="1500"
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
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

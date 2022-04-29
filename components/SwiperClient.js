// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperClient = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      autoplay
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Entreprise psexpress
            </Typography>
            <Typography variant="body2" color="text.secondary">
              en tant que vendeur B to B, je suis satisfait de la rapidite et
              l'efficacite de l'equipe Tndev
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Entreprise Hitcom
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Je n'hesiterai pas a travailler encore avec cette equipe
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Etudiante Bjaoui Z [technopole Ensi Manouba]
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Encadrement efficace pour mon projet PFE smart-house
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Etudiante Ben Khelif O [Campus FST Manar]
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Merci pour l'accompagnement et les heures en meeting
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Entreprise SmartSkills
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Merci pour la mise a niveau du staff de la socite concernant la
              partie Reactjs[context api]
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperClient;

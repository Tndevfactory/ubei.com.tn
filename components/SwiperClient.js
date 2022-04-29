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
              Web- app
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Realisation des applications web pour des entreprises ou
              particuliers comme des sites E-commerces, gestion de paie ou des
              simple traceurs d'incidents ou connexion d'employees
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Partager</Button>
            <Button size="small">Voir demo</Button>
          </CardActions>
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
            <Typography gutterBottom variant="h5" component="div">
              Web- app
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Realisation des applications web pour des entreprises ou
              particuliers comme des sites E-commerces, gestion de paie ou des
              simple traceurs d'incidents ou connexion d'employees
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Partager</Button>
            <Button size="small">Voir demo</Button>
          </CardActions>
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
            <Typography gutterBottom variant="h5" component="div">
              Web- app
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Realisation des applications web pour des entreprises ou
              particuliers comme des sites E-commerces, gestion de paie ou des
              simple traceurs d'incidents ou connexion d'employees
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Partager</Button>
            <Button size="small">Voir demo</Button>
          </CardActions>
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
            <Typography gutterBottom variant="h5" component="div">
              Web- app
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Realisation des applications web pour des entreprises ou
              particuliers comme des sites E-commerces, gestion de paie ou des
              simple traceurs d'incidents ou connexion d'employees
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Partager</Button>
            <Button size="small">Voir demo</Button>
          </CardActions>
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
            <Typography gutterBottom variant="h5" component="div">
              Web- app
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Realisation des applications web pour des entreprises ou
              particuliers comme des sites E-commerces, gestion de paie ou des
              simple traceurs d'incidents ou connexion d'employees
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Partager</Button>
            <Button size="small">Voir demo</Button>
          </CardActions>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperClient;

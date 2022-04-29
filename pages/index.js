import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Link from "../components/Link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Carousel1 from "../components/Carousel1";
import { styled } from "@mui/material/styles";
import { FormattedMessage, useIntl } from "react-intl";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import BackToTop from "../components/BackToTop";

import SwiperClient from "../components/SwiperClient";

export default function Index() {
  const router = useRouter();
  const { formatMessage: f } = useIntl();

  return (
    <>
      <Head>
        <title>Tndev Art</title>
        <meta
          name="google-site-verification"
          content="oWPG0Wtv_qIrPDPKZNXlIHgtAD7TnKYAE_ptUSEwP2o"
        />
        <meta charSet="UTF-8" />
        <meta name="description" content="web artist for artisans" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="tunis, vente, marketplace, ecommerce, good price"
        />
        <meta name="author" content="CH" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="web artist for artisans" />
        <meta property="og:description" content="market place." />
        <meta property="og:image" content="https://i.ibb.co/xzk4HFF/back.png" />
        <link rel="alternate" href="https://tndev-art.tn/ar" hrefLang="en" />
        <link rel="alternate" href="https://tndev-art.tn/fr" hrefLang="fr" />
        <link rel="alternate" href="https://tndev-art.tn/en" hrefLang="ar" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",

              "@type": "Person",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tunis",
                addressRegion: "TN",
                postalCode: "1001",
                streetAddress: "Tunisia",
              },
              colleague: [
                "http://www.xyz.edu/students/alicejones.html",
                "http://www.xyz.edu/students/bobsmith.html",
              ],
              email: "mailto:tndev8@gmail.com",
              image: "janedoe.jpg",
              jobTitle: "web developer",
              name: "CH",
              telephone: "(216) 553-85474",
              url: "https://tndev-art.tn",
            }),
          }}
        />
      </Head>
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: "6rem" }}>
        <BackToTop />
        <Box>
          <Carousel1 />
        </Box>

        <Box>
          <Typography sx={{ mt: 1 }} variant="h4">
            notre savoir faire :
          </Typography>
          <Typography sx={{ mt: 1 }} variant="body">
            [Email: demo@demo.tn] [password: demo@demo.tn]
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                image="/static/images/cards/java.png"
                alt="Web-application"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Web-application
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Realisation des applications web pour des entreprises ou
                  particuliers comme des sites E-commerces, gestion de paie ou
                  des simple traceurs d'incidents ou connexion d'employees
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Partager</Button>
                <Button size="small">Voir demo</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                image="/static/images/cards/mobile.png"
                alt="Mobile"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Mobile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Des solutions en React natif comme en flutter
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Partager</Button>
                <Button size="small">Voir demo</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                image="/static/images/cards/software.png"
                alt="Softwares"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Softwares
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Des solutions en Electron.js ou python sont disponibles
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Partager</Button>
                <Button size="small">Voir demo</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                image="/static/images/cards/student.png"
                alt="students"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Etudiants
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Des formations en backend comme en frontend et accompagnement
                  PFE disponibles
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Partager</Button>
                <Button size="small">Voir demo</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box>
          <Typography sx={{ mt: 3 }} variant="h4">
            nos produits
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                image="/static/images/cards/springboot.png"
                alt="Spring-boot"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Spring-boot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  La force et la securite de java, moderne microservice
                  application
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Partager</Button>
                <Button size="small">Voir demo</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                image="/static/images/cards/flask.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Python Flask
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  L'efficacite de flask et son rapide integration avec les IOT
                  telque rasberry pie ou STM
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Partager</Button>
                <Button size="small">Voir demo</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                image="/static/images/cards/dotnet.png"
                alt=".net"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  .net
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  La fonctionnalite de c# et son integration facile avec VR
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Partager</Button>
                <Button size="small">Voir demo</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                image="/static/images/cards/ruby.png"
                alt="Ruby"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Ruby
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gestion de grand projets, deploiement rapide 0 down time
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Partager</Button>
                <Button size="small">Voir demo</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box>
          <Typography sx={{ mt: 3 }} variant="h4">
            nos clients
          </Typography>
        </Box>

        <SwiperClient />
      </Container>
      <Footer />
    </>
  );
}

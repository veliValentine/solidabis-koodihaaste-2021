[![Build image and push to heroku](https://github.com/veliValentine/solidabis-koodihaaste-2021/actions/workflows/build-push-heroku.yml/badge.svg?branch=master)](https://github.com/veliValentine/solidabis-koodihaaste-2021/actions/workflows/build-push-heroku.yml)
# Solidabis koodihaaste 2021
Tehtävänä oli kehittää käyttöliittymä laskemaan eri matka-aikoja ja kulutuksia eri nopeuksilla.

Käyttöliittymä löytyy herokusta [https://trip-calculator-koodihaaste-21.herokuapp.com/](https://trip-calculator-koodihaaste-21.herokuapp.com/)
## Sisällyslyettelo

  - [Käytetyt teknologia](#käytetyt-teknologia)
    - [Server](#server)
    - [Client](#client)
  - [Käyttöohjeet](#käyttöohjeet)
  - [Kuvaus ratkaisusta](#kuvaus-ratkaisusta)
## Käytetyt teknologia
Sovellus on jaettu kahteen osaan. *Server* ja *client*.
- [API dokumentaatio](./server/API.md)
- [Client dokumentaatio](./client/README.md)
### Server
Serveri on rakennettu käyttäen Node.js. Reitityksen apuna on käytetty Express.js frameworkkia. Serveri pyörittää staattisesti rakennettua clienttiä.

Serveri pyörii Docker containerissä Heroku serverillä.

### Client
Ohjelman client puoli on rakennettu käyttäen java scriptiä ja Reactia.

## Käyttöohjeet
- Kloonaa [repositorio](https://github.com/veliValentine/solidabis-koodihaaste-2021.git).
- Suorita komento `npm install` projektin juuressa
- suorita komento `npm start`
- Avaa uusi terminaali
- Siirry client kansioon (`cd client`)
- Suorita komento `npm install`
- suorita komento `npm start`
- Avaa [http://localhost:3000](http://localhost:3000/)
  
## Kuvaus ratkaisusta
Ratkaisuun lähestyttiin full stack näkökulmasta, missä API vastaa laskutoimituksista ja client datan esittämisestä.

Ratkaisussa keskityttiin funktionaalisuuten ja toiminnallisuuteen.
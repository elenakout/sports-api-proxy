const fetch = require('node-fetch');

const interFc = {
  id: 108,
  area: {
    id: 2114,
    name: 'Italy',
  },
  activeCompetitions: [
    {
      id: 2001,
      area: {
        id: 2077,
        name: 'Europe',
      },
      name: 'UEFA Champions League',
      code: 'CL',
      plan: 'TIER_ONE',
      lastUpdated: '2020-03-16T00:00:29Z',
    },
    {
      id: 2146,
      area: {
        id: 2077,
        name: 'Europe',
      },
      name: 'UEFA Europa League',
      code: 'EL',
      plan: 'TIER_TWO',
      lastUpdated: '2020-03-13T00:00:00Z',
    },
    {
      id: 2019,
      area: {
        id: 2114,
        name: 'Italy',
      },
      name: 'Serie A',
      code: 'SA',
      plan: 'TIER_ONE',
      lastUpdated: '2020-03-14T12:00:54Z',
    },
    {
      id: 2122,
      area: {
        id: 2114,
        name: 'Italy',
      },
      name: 'Coppa Italia',
      code: 'CIT',
      plan: 'TIER_THREE',
      lastUpdated: '2020-03-04T17:25:04Z',
    },
  ],
  name: 'Inter FC',
  shortName: 'Inter',
  tla: 'INT',
  crestUrl:
    'https://upload.wikimedia.org/wikipedia/de/4/48/Internazionale_Milano_2014.svg',
  address: 'Corso Vittorio Emanuele II 9 Milano 20122',
  phone: '+39 (02) 77151',
  website: 'http://www.inter.it',
  email: 'segreteriaccic@inter.it',
  founded: 1908,
  clubColors: 'Blue / Black',
  venue: 'Stadio Giuseppe Meazza',
  squad: [
    {
      id: 1991,
      name: 'Samir Handanovič',
      position: 'Goalkeeper',
      dateOfBirth: '1984-07-14T00:00:00Z',
      countryOfBirth: 'Slovenia',
      nationality: 'Slovenia',
      shirtNumber: 1,
      role: 'PLAYER',
    },
    {
      id: 1992,
      name: 'Tommaso Berni',
      position: 'Goalkeeper',
      dateOfBirth: '1983-03-06T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 46,
      role: 'PLAYER',
    },
    {
      id: 1993,
      name: 'Daniele Padelli',
      position: 'Goalkeeper',
      dateOfBirth: '1985-10-25T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 27,
      role: 'PLAYER',
    },
    {
      id: 140823,
      name: 'Filip Stankovic',
      position: 'Goalkeeper',
      dateOfBirth: '2002-02-25T00:00:00Z',
      countryOfBirth: 'Slovenia',
      nationality: 'Serbia',
      shirtNumber: 35,
      role: 'PLAYER',
    },
    {
      id: 111,
      name: 'Diego Godín',
      position: 'Defender',
      dateOfBirth: '1986-02-16T00:00:00Z',
      countryOfBirth: 'Uruguay',
      nationality: 'Uruguay',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 1776,
      name: 'Cristiano Biraghi',
      position: 'Defender',
      dateOfBirth: '1992-09-01T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 1834,
      name: 'Alessandro Bastoni',
      position: 'Defender',
      dateOfBirth: '1999-04-13T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 95,
      role: 'PLAYER',
    },
    {
      id: 1995,
      name: "Danilo D'Ambrosio",
      position: 'Defender',
      dateOfBirth: '1988-09-09T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 33,
      role: 'PLAYER',
    },
    {
      id: 1998,
      name: 'Andrea Ranocchia',
      position: 'Defender',
      dateOfBirth: '1988-02-16T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 13,
      role: 'PLAYER',
    },
    {
      id: 2053,
      name: 'Stefan de Vrij',
      position: 'Defender',
      dateOfBirth: '1992-02-05T00:00:00Z',
      countryOfBirth: 'Netherlands',
      nationality: 'Netherlands',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 137678,
      name: 'Lorenzo Pirola',
      position: 'Defender',
      dateOfBirth: '2002-02-20T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 31,
      role: 'PLAYER',
    },
    {
      id: 1911,
      name: 'Nicolò Barella',
      position: 'Midfielder',
      dateOfBirth: '1997-02-07T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 2003,
      name: 'Marcelo Brozović',
      position: 'Midfielder',
      dateOfBirth: '1992-11-16T00:00:00Z',
      countryOfBirth: 'Croatia',
      nationality: 'Croatia',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 2005,
      name: 'Antonio Candreva',
      position: 'Midfielder',
      dateOfBirth: '1987-02-28T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 87,
      role: 'PLAYER',
    },
    {
      id: 2006,
      name: 'Roberto Gagliardini',
      position: 'Midfielder',
      dateOfBirth: '1994-04-07T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 5,
      role: 'PLAYER',
    },
    {
      id: 2007,
      name: 'Milan Škriniar',
      position: 'Midfielder',
      dateOfBirth: '1995-02-11T00:00:00Z',
      countryOfBirth: 'Slovakia',
      nationality: 'Slovakia',
      shirtNumber: 37,
      role: 'PLAYER',
    },
    {
      id: 2008,
      name: 'Borja Valero',
      position: 'Midfielder',
      dateOfBirth: '1985-01-12T00:00:00Z',
      countryOfBirth: 'Spain',
      nationality: 'Spain',
      shirtNumber: 20,
      role: 'PLAYER',
    },
    {
      id: 2009,
      name: 'Matías Vecino',
      position: 'Midfielder',
      dateOfBirth: '1991-08-24T00:00:00Z',
      countryOfBirth: 'Uruguay',
      nationality: 'Uruguay',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 2010,
      name: 'Assane Gnoukouri',
      position: 'Midfielder',
      dateOfBirth: '1996-09-28T00:00:00Z',
      countryOfBirth: 'Côte d’Ivoire',
      nationality: 'Côte d’Ivoire',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 2033,
      name: 'Kwadwo Asamoah',
      position: 'Midfielder',
      dateOfBirth: '1988-12-09T00:00:00Z',
      countryOfBirth: 'Ghana',
      nationality: 'Ghana',
      shirtNumber: 18,
      role: 'PLAYER',
    },
    {
      id: 2197,
      name: 'Stefano Sensi',
      position: 'Midfielder',
      dateOfBirth: '1995-08-05T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 12,
      role: 'PLAYER',
    },
    {
      id: 3317,
      name: 'Ashley Young',
      position: 'Midfielder',
      dateOfBirth: '1985-07-09T00:00:00Z',
      countryOfBirth: 'England',
      nationality: 'England',
      shirtNumber: 15,
      role: 'PLAYER',
    },
    {
      id: 3389,
      name: 'Victor Moses',
      position: 'Midfielder',
      dateOfBirth: '1990-12-12T00:00:00Z',
      countryOfBirth: 'Nigeria',
      nationality: 'Nigeria',
      shirtNumber: 11,
      role: 'PLAYER',
    },
    {
      id: 3459,
      name: 'Christian Eriksen',
      position: 'Midfielder',
      dateOfBirth: '1992-02-14T00:00:00Z',
      countryOfBirth: 'Denmark',
      nationality: 'Denmark',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 98223,
      name: 'Lucien Agoume',
      position: 'Midfielder',
      dateOfBirth: '2002-02-09T00:00:00Z',
      countryOfBirth: 'Cameroon',
      nationality: 'France',
      shirtNumber: 32,
      role: 'PLAYER',
    },
    {
      id: 111466,
      name: 'Thomas Schirò',
      position: 'Midfielder',
      dateOfBirth: '2000-04-25T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 3220,
      name: 'Lautaro Martínez',
      position: 'Attacker',
      dateOfBirth: '1997-08-22T00:00:00Z',
      countryOfBirth: 'Argentina',
      nationality: 'Argentina',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 3662,
      name: 'Romelu Lukaku',
      position: 'Attacker',
      dateOfBirth: '1993-05-13T00:00:00Z',
      countryOfBirth: 'Belgium',
      nationality: 'Belgium',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 7911,
      name: 'Alexis Sánchez',
      position: 'Attacker',
      dateOfBirth: '1988-12-19T00:00:00Z',
      countryOfBirth: 'Chile',
      nationality: 'Chile',
      shirtNumber: null,
      role: 'PLAYER',
    },
    {
      id: 114054,
      name: 'Sebastiano Esposito',
      position: 'Attacker',
      dateOfBirth: '2002-07-02T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 30,
      role: 'PLAYER',
    },
    {
      id: 135088,
      name: 'Matias Fonseca',
      position: 'Attacker',
      dateOfBirth: '2001-03-12T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 40,
      role: 'PLAYER',
    },
    {
      id: 135089,
      name: 'Edoardo Vergani',
      position: 'Attacker',
      dateOfBirth: '2001-02-06T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: 39,
      role: 'PLAYER',
    },
    {
      id: 11102,
      name: 'Giulio Nuciari',
      position: null,
      dateOfBirth: '1960-04-21T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: null,
      role: 'GOALKEEPER_COACH',
    },
    {
      id: 11583,
      name: 'Antonio Conte',
      position: null,
      dateOfBirth: '1969-07-31T00:00:00Z',
      countryOfBirth: 'Italy',
      nationality: 'Italy',
      shirtNumber: null,
      role: 'COACH',
    },
  ],
  lastUpdated: '2020-03-12T03:16:29Z',
};

let lastTeam = null;

async function teamsInfo(base, teamId) {
  if (teamId == 108) {
    return interFc;
  } else {
    if (lastTeam) {
      if (lastTeam.id == teamId) {
        return lastTeam;
      }
    }
    const response = await fetch(`${base}/teams/${teamId}`, {
      headers: {
        'X-Auth-Token': process.env.API_TOKEN,
      },
    });

    const tInfo = await response.json();
    lastTeam = tInfo;
    return tInfo;
  }
}

module.exports = teamsInfo;

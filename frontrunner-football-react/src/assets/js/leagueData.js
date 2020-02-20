import premFixtures from "./fixtures_prem";
import serieAFixtures from "./fixtures_serie_a";
import laLigaFixtures from "./fixturesLaLiga";
import bundesligaFixtures from "./fixturesBundesliga";
import ligue1Fixtures from "./fixturesLigue1";
import eredivisieFixtures from "./fixturesEredivisie";

const leagueData = {
  premiereLeague: {
    leagueName: "Premier League",
    imgAlt: "Flag of England",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/50px-Flag_of_England.svg.png",
    standingsApi: "premierLeague",
    fixtures: () => premFixtures,
    tierLimit: 5
  },
  serieA: {
    leagueName: "Serie A",
    imgAlt: "Flag of Italy",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/50px-Flag_of_Italy.svg.png",
    standingsApi: "serieA",
    fixtures: () => serieAFixtures,
    tierLimit: 5
  },
  bundesliga: {
    leagueName: "Bundesliga",
    imgAlt: "Flag of Germany",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/50px-Flag_of_Germany.svg.png",
    standingsApi: "bundesliga",
    fixtures: () => bundesligaFixtures,
    tierLimit: 5
  },
  laLiga: {
    leagueName: "La Liga",
    imgAlt: "Flag of Spain",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/50px-Flag_of_Spain.svg.png",
    standingsApi: "laLiga",
    fixtures: () => laLigaFixtures,
    tierLimit: 5
  },
  ligue1: {
    leagueName: "Ligue 1",
    imgAlt: "Flag of France",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/50px-Flag_of_France.svg.png",
    standingsApi: "ligue1",
    fixtures: () => ligue1Fixtures,
    tierLimit: 5
  },
  eredivisie: {
    leagueName: "Eredivisie",
    imgAlt: "Flag of the Netherlands",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/50px-Flag_of_the_Netherlands.svg.png",
    standingsApi: "eredivisie",
    fixtures: () => eredivisieFixtures,
    tierLimit: 5
  }
}

export default leagueData;
//Base URL
const base_url = "https://api.rawg.io/api/";
// https://api.rawg.io/api/games/id(339958)

//Getting the date
//month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  console.log(month);
  //if month is less than 10 return the month with a 0 added - 01, 02, 03 etc
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// getCurrentMonth(); // node ./src/api.js

//day
const getCurrentDay = () => {
  const day = new Date().getDate();
  //if month is less than 10 return the month with a 0 added - 01, 02, 03 etc
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

// const currentDate = `${currentDay}-${currentMonth}-${currentYear}`; //uk
// const lastYear = `${currentDay}-${currentMonth}-${currentYear - 1}`; //uk
// const nextYear = `${currentDay}-${currentMonth}-${currentYear + 1}`; //uk

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`; //us
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`; //us
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`; //us

// console.log(currentDate);
//Popular Games
// const popular_games = "https://api.rawg.io/api/games?dates=2020";
//fetches the games from last year all the way up to this current month, orders them by rating and
//sets the amount to 10
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
//id eventually gets passed in by executing the dispatch
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
// console.log(upcomingGamesURL());
//GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;

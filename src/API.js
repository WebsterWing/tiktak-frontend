import axios from 'axios'

const api_link = 'http://localhost:8080'
const ARTIFICAL_DELAY = 400 // Artifical API delay in milliseconds

export async function getFakeGames(page, query= {}) {
  await new Promise(resolve => setTimeout(resolve, ARTIFICAL_DELAY))

  if (page > 3) {
    return [];
  }

  var games_list = [];

  for (let i=0; i < 25; i++) {
    games_list.push(generateGame());
  }

  return games_list;
}

export async function getGames(page, query= {}) {
  return axios.get(`${api_link}/games?page=${page+1}`).then(res => res.data)
}

function generateGame() {
  return {
    id: 'id-string' + makeid(18),
    username1: "player1",
    username2: "bot",
    winner: (Math.random() > .5),
  }
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
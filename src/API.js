const baseUrl = 'https://mmo-games.p.rapidapi.com'

export const getJogos = async() => {
    try {
      const request = await fetch(`${baseUrl}/games`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": "b574ca5688msh20499d98ff1a48ap1a4e44jsn2d6a1886d2bf"
        }
      });
      const jogos = await request.json();
      return jogos;
    } catch(error){
        return error
    }
}



export const getNoticias = async() => {
  try {
    const request = await fetch(`${baseUrl}/latestnews`, {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key": "b574ca5688msh20499d98ff1a48ap1a4e44jsn2d6a1886d2bf"
      }
    });
    const noticias = await request.json();
    return noticias;
  } catch(error){
      return error
  }
}

export const getJogo = async() => {
  try {
    const request = await fetch(`${baseUrl}/game`, {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key": "b574ca5688msh20499d98ff1a48ap1a4e44jsn2d6a1886d2bf"
      }
    });
    const jogo = await request.json();
    return jogo;
  } catch(error){
      return error
  }
}

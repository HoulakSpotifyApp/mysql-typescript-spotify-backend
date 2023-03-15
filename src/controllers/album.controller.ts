import {Request, Response} from 'express'
import { connect } from '../database'
import {Album} from '../interfaces/Album'


export async function getUsers(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const users = await conn.query('SELECT * FROM users');
  return res.json(users[0]);
}

export async function getAlbums(req: Request, res: Response){

    //En este caso como el usuario va a ser siempre el mismo se deja como constante, sino esto vendria por parametros o en el header req
    const CLIENT_ID = "73a843357efd4a8a8b3efbf634505bc7";
    const CLIENT_SECRET = "4a5f1ebeb8834691b7f6319767e654e7";
    
    
   //Parametros que van en el header del accessToken
    let authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    } 
    //Obtener el Token
    let accessToken= await fetch('https://accounts.spotify.com/api/token', authParams)
    .then(result => result.json())
    .then(data =>  {return data.access_token});
    let searchParams = {
        method: 'GET' ,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      };
      //Obtener el id artista con el nombre pasado por parametro
  const artista = req.params.param;
  const artistID = await fetch('https://api.spotify.com/v1/search?q=' + artista + '&type=artist', searchParams) 
      .then(response => response.json())
      .then(data => {return data.artists.items[0].id});

      //Buscar artista por id
      let returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParams)
      .then(response => response.json())
      .then(data =>{return data.items});

      res.send(returnedAlbums);

}
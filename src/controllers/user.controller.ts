import {Request, Response} from 'express'
import { connect } from '../database'
import {User} from '../interfaces/User'

export async function getUsers(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const users = await conn.query('SELECT * FROM users');
  return res.json(users[0]);
}

export async function createUser(req: Request, res: Response){

  const newUser: User = req.body;
  //se asigna de forma estatica ya que en este caso en particular siempre va a ser el mismo 
  newUser.id_spotify = "73a843357efd4a8a8b3efbf634505bc7";
  // Se asigna el nombre del artista que viene por parametro
  newUser.nombre_artista = req.params.param;
  //Instancia de Conexion
  const conn = await connect();
  const users = await conn.query('INSERT INTO users SET ?', [newUser]);
  res.json({
    message:"creado con exito"
  })

}

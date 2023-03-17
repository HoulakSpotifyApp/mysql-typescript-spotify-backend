import {NextFunction, Request, Response} from 'express'

import {Album} from '../interfaces/Album'
import { DatabaseRepository } from '../declarations'
import { User } from '../models/User'


//Controlador que usa el repository

export class UserController {

  constructor(private repository: DatabaseRepository<User>){

  }
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
    
      const body = req.body;
      body.id_spotify = req.params.param;
      const user = await this.repository.create(body)
  
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

}
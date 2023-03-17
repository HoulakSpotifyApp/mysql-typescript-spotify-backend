import {User} from '../models/User'
import { DatabaseRepository, Query } from '../declarations'

import database from '../database'

//Repository
export class UserRepository implements DatabaseRepository<User>{
 async create(data: Partial<User>, query?: Query | undefined): Promise<User> {
    const repository = database.getRepository(User);
    const user = repository.create(data);

    await repository.save(user);

    return user;

  }
  list(query?: Query | undefined): Promise<User[]> {
    throw new Error('Method not implemented.')
  }

 

}
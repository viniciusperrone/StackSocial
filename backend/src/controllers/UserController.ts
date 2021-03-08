import { Request, Response } from 'express';

import knex from '../database/connection';

class UserController{
  async create(request: Request, response: Response){
    const{
      username,
      email,
      password
    } = request.body;

    const user = {
      username: username,
      email: email,
      password: password
    }

    const handleRegister = user.username && user.email && user.password ? user : "Register invalid!"
    
    console.log(handleRegister);

    const emailAlreadyExist = await knex('users').where('email', user.email).first();

    const register = emailAlreadyExist ? "Error! Email Already Exist!" : await knex('users').insert(handleRegister);

    const id_user = register[0];

    return response.json({
      id_user,
      ...user
    });
  }

  async show(request: Request, response: Response){
    const {
      username,
      password
    } = request.body;
    
    const users = await knex('users').where({username: username, password: password})

    return response.json(users);
  }

  async getUsers(request: Request, response: Response){
    const users = await knex('users').select('*');

    return response.json(users);
  }

  async update(request: Request, response: Response){
    
    const {
      id
    } = request.params;

    const {
      username,
      email
    } = request.body;

    const user = {
      username: username,
      email: email
    }

    const handleUser = user.username.trim().length;
    const handleEmail = user.email.trim().length;

    const updateUser = handleUser > 8 && handleEmail > 8 
      ? await knex('users').where("id", id).update(user)
      : "Failed update";

    console.log(updateUser);
    
    return response.json(user);
  }
}

export { UserController }
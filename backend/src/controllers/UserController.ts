import { Request, Response } from 'express';
import { hash, compare } from 'bcryptjs';

import knex from '../database/connection';

class UserController{
  async create(request: Request, response: Response){
    const{
      username,
      email,
      password
    } = request.body;

    const passwordHashed = await hash(password, 8)

    const user = {
      username: username,
      email: email,
      password: passwordHashed
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
    
    const user = await knex('users').where("username", username).first()

    if (!user){
      return response.status(400).json({ message: 'Credentials not found!'})
    }
    const comparePassord = await compare(password, user.password);

    const sign = comparePassord 
    ? user 
    : response.status(400).json({ message: 'Credentials not found.' }); 


    return response.json(sign);
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
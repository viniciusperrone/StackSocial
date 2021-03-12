import { Request, Response } from 'express';

import { celebrate, Joi } from 'celebrate';

import knex from '../database/connection';

class PostController{

  async create(request: Request, response: Response){
    const {
      title,
      content,
      id_user
    } = request.body;

    const handleBody = title && content && id_user ? "Ok" : "Imcoplete"

    console.log(handleBody);

    const userId = await knex('users').where('id', String(id_user)).first();

    const userAlreadyExist = userId ? true : false;

    const user_name = userAlreadyExist ? userId.username : 'User not exist!';

    const date_now = String(Date()).slice(0,15);

    const day = date_now.slice(8,10);
    const moth = date_now.slice(4,7);
    const year = date_now.slice(11,15)

    const date = `${moth} ${day} ${year}`;

    console.log(date);

    const post = {
      title: title,
      content: content,
      user_id: id_user,
      user_name: user_name,
      date_post: date
    }

    const register = await knex('posts').insert(post);

    const id = register[0];

    console.log(post);

    console.log(userId);

    return response.json({
      id,
      ...post
    });
  }

  async getPost(request: Request, response: Response){
    const posts = await knex('posts').select("*");

    return response.json(posts); 
  }

  async update(request: Request, response: Response){
    const {
      id_post,
      title,
      content,
      id_user
    } = request.body;

    const post = await knex('posts').where({id: id_post, user_id: id_user}).first();

    const date_now = String(Date()).slice(0,15);

    const day = date_now.slice(8,10);
    const moth = date_now.slice(4,7);
    const year = date_now.slice(11,15)

    const date = `${moth} ${day} ${year}`;

    const postUpdate = {
      title: title,
      content: content,
      date_post: date
    }

    const updatePost = await knex('posts').where({id: id_post}).update(postUpdate);
    response.json([
      post,
      updatePost
    ]);
  }

  async drop(request: Request, response: Response){
    const {
      id
    } = request.body;

    const deletePost = await knex('posts').where({id: id}).delete();

    response.json(deletePost);
  }
}

export { PostController }
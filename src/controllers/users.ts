import { Request, Response } from 'express';

import  * as usersService  from '../services/users.services';
import { SearchType } from '../enums';

export const getUsers = async ( req: Request, res: Response) => {

     const users = await usersService.findUsers( SearchType['All'] );

     ( users !== undefined )
     ? res.json( { users } ) 
     : res.status(404).json({
        msg : "No users found!" 
     })
}

export const getUser = async ( req: Request, res: Response) => {
    
    const { id } = req.params;
    const user = await usersService.findUsers( SearchType['One'], +id );

    ( user !== undefined )
    ? res.json( { user } ) 
    : res.status(404).json({
        msg : `No user found with id: ${id}!` 
     })
    
}

export const postUser = async ( { body } : Request, res: Response) => {

    try {


        const postUser = await usersService.addNewUser( body );
        
        ( postUser )
        ? res.status(201).json( postUser ) 
        : res.status(401).json({
            msg : "User already exist!" 
        })
        
        
    } catch ( error: any ) {
        console.log( error );
        
        res.json({
            msg : "Admin!" 

        })
        
        
    }
}

export const putUser =  async( req : Request, res: Response) => {

    try {
        req.body.id = req.params.id
        const userData = req.body

        const user = await usersService.updateUser( userData );
        
        ( user )
        ? res.status(200).json( user ) 
        : res.status(401).json({
            msg : `User not found!` 
        })
        
        
    } catch ( error: any ) {
        console.log( error );
        
        res.json({
            msg : "Admin!",
            error 

        })
        
        
    }
}
export const deleteUser =  async( req : Request, res: Response) => {

    try {
        const id = req.params.id

        const user = await usersService.removeUser( +id );
        
        ( user )
        ? res.status(200).json( user ) 
        : res.status(404).json({
            msg : `User not found!` 
        })
        
        
    } catch ( error: any ) {
        console.log( error );
        
        res.json({
            msg : "Admin!",
            error 

        })
        
        
    }
}

export const disableUser =  async( req : Request, res: Response) => {

    try {
        const id = req.params.id

        const user = await usersService.disableUser( +id );
        
        ( user )
        ? res.status(200).json( user ) 
        : res.status(404).json({
            msg : `User not found!` 
        })
        
        
    } catch ( error: any ) {
        console.log( error );
        
        res.json({
            msg : "Admin!",
            error 

        })
        
        
    }
}
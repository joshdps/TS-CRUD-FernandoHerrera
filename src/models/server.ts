import express, { Application }  from 'express';

import  userRoutes from '../routes/users';
import cors from 'cors';

import db  from '../db/connection';

class Server {

    // Vars declarations
    private app: Application;
    private port: string | number;
    private apiPaths = {
        users: '/api/users'
    }

    constructor(){

        // Initializing vars
        this.app  = express();
        this.port = process.env.PORT || 3000;
        
        //Database
        this.dbConnection();
        
        // middelwares
        this.middelwares();

        // Define routes
        this.routes();

    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log("Connected to database");
            
        }catch( error: any){
            throw new Error( error );
            
        }
    }

    middelwares() {
        
        // CORS
        this.app.use( cors() );

        //Bodyparser
        this.app.use( express.json() );

        // Public folder
        this.app.use( express.static('public') );

      }

    routes(){
        this.app.use( this.apiPaths.users, userRoutes )
    }

    listen(){
        try{
            this.app.listen( this.port, () => {
                console.log( `Server running on port ${ this.port }` );  
            }) 
            }catch( e: any ) {
                throw new Error( e.message )
        }
        
    }
}

export default Server;
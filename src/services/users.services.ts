import User from "../models/user";
import { SearchType } from "../enums";
import { Users, UsersWithoutId } from "../types";



export const findUsers =  async ( param: SearchType, id?: number ): Promise<any | undefined>  => {

    return ( param === SearchType.All )
    ?  await User.findAll()  
    :  await User.findByPk( id )  

    
}

export const addNewUser =  async ( user: UsersWithoutId ): Promise<any | undefined>  => {
    
    const emailExist = await User.findOne({
        where: { email: user.email }
    })
    
    if (emailExist) return

    return User.create( user )
    
    /*

        const { id, ...data } = user

    const [ _, created] = await User.findOrCreate ({ 
        where: { id }
     })
    
    return created

    const user = new User( user );
    return await user.save();
    */
      

    
}

export const updateUser =  async ( { id, ...data }: Users ): Promise<any | undefined>  => {
    
    const userExist = await User.findByPk( id );
    
    if ( !userExist ) return

    return await userExist.update( data )

   
}

export const removeUser =  async ( id: number ): Promise<any | undefined>  => {
    
    const userExist = await User.findByPk( id );
    
    if ( !userExist ) return

    return await User.destroy( {
        where: { id }
    } )

   
}

export const disableUser =  async ( id: number ): Promise<any | undefined>  => {
    
    const userExist = await User.findByPk( id );
    
    if ( !userExist ) return

    return await userExist.update( {
        state : false
    } )

   
}
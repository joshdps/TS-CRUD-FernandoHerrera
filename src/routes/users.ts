import { Router } from 'express';
import { getUsers, getUser, postUser, putUser, deleteUser, disableUser } from '../controllers/users';

const router = Router();

router.get( '/', getUsers );
router.get( '/:id'    , getUser );
router.post( '/'      , postUser );
router.put( '/:id'    , putUser );
router.patch( '/:id'  , disableUser );
router.delete( '/:id' , deleteUser );


export default router;
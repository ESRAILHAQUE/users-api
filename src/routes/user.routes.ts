import express from 'express';
import { createUser, deleteUser, getUser, getUserById, updateUser } from '../controllers/user.controller';

const router=express.Router();


router.post('/',createUser)
router.get('/',getUser)
router.get('/:id',getUserById)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

export default router;
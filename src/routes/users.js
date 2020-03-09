import { Router } from 'express';

import {
  getAllUsers,
  getUserDetails,
  addNewUser,
  updateUserDetails,
  deleteUserDetails,
} from '../controllers/users';

const router = Router();

router
  .route('/')
  .post(addNewUser)
  .get(getAllUsers);

router
  .route('/:id')
  .get(getUserDetails)
  .put(updateUserDetails)
  .delete(deleteUserDetails);

export default router;

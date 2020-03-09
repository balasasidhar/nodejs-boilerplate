import { Router } from 'express';

import users from './users';

const router = Router();

router.get('/', (_req, res) => res.status(200).json({ status: 'ok' }));
router.use('/users', users);

export default router;

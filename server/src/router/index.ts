import * as express from 'express';
import authRoutes from './auth';
const router = express.Router();

router.use('/auth', authRoutes);

router.get('/', (req: any, res: any) => {
    res.status(200).json({
        message : 'router is ok :)'
    });
});

export default router;

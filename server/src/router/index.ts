import * as express from 'express';
const router = express.Router();

router.get('/', (req: any, res: any) => {
    res.status(200).json({
        message : 'router is ok :)'
    });
});

export default router;

import * as express from 'express';
const router = express.Router();

router.post('/register', (req: any, res: any) => {
    res.status(200).json({
        message : 'register :)'
    });
});

router.post('/activeAccount', (req: any, res: any) => {
    res.status(200).json({
        message : 'activeAccount :)'
    });
});

router.post('/login', (req: any, res: any) => {
    res.status(200).json({
        message : 'login :)'
    });
});

router.post('/twoFactorAuth', (req: any, res: any) => {
    res.status(200).json({
        message : 'two Factor authentication :)'
    });
});

router.post('/forgotPassword', (req: any, res: any) => {
    res.status(200).json({
        message : 'forgot password :)'
    });
});

router.post('/resetPassword', (req: any, res: any) => {
    res.status(200).json({
        message : 'reset password :)'
    });
});

export default router;

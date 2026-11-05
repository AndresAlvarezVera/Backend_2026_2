import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Chat Backend 2026' });
});

export default router;
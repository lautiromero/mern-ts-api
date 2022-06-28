import { Router } from "express";
import * as videCtrl from '../controllers/videos.controller';

const router = Router();

router.get('/videos', videCtrl.getVideos);

router.get('/videos/:id', videCtrl.getVideo);

router.post('/videos', videCtrl.createVideo);

router.put('/videos/:id', videCtrl.updateVideo);

router.delete('/videos/:id', videCtrl.deleteVideo);

export default router;

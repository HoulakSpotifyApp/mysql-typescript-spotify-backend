import { Router } from "express";

import {getAlbums} from '../controllers/album.controller'
const router = Router();

//Obtencion del metodo del controller
router.route('/:param')
.get(getAlbums)


export default router
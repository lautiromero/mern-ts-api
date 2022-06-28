import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import config from './config'
import videRoutes from './routes/videos.routes'

/*------------------------*/

const app = express();

app.set('port', config.PORT);

// morgan logs, cors & express config
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use( videRoutes );

export default app;

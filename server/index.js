import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middlewares';
import { MeetupRoutes } from './modules/meetups/controller';


const app = express();

/**
 *  Database 
 */

dbConfig();

/**
 * Middlewares
 */

middlewareConfig(app);

app.use('/api', [MeetupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if(err) {
        console.log(err);
    }{
        console.log(`App listen port:  ${PORT}`);
    }
});
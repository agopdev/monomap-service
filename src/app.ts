import express from 'express';
import { MongoDatabase } from './data/MongoDatabase';
import { envs } from './_config/envs';
import { AppRoutes } from './presentation/AppRoutes';
import { emailJob } from './domain/jobs/EmailJob';

const app = express();
app.use(express.json());
app.use(AppRoutes.routes);

(async () => 
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL, 
    dbName: envs.MONGO_DB
  }))
();

app.listen(envs.PORT, () => {
  console.log('Server listening on port 3000');
  emailJob();
});

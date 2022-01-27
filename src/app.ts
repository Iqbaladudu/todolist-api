import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index';

const app = express();
const PORT = 8080;

const {
  MONGODB_ATLAS_USERNAME,
  MONGODB_ATLAS_PASSWORD,
  MONGODB_ATLAS_DBNAME
} = process.env;

const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.fi5je.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

app.use(cors());
app.use(routes);

mongoose.set('useFindAndModify', false);
mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(PORT, () => {
      console.info(`Server berjalan di port ${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });

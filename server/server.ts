import * as bodyParser from 'body-parser';
import express from 'express';
import { getArticle, getArticles, postArticle } from './routes/articles/service';
import { getImage, getImages } from './routes/images/service';

const app = express();
const port = 1111;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// articles
const articlesUri = '/api/articles';
app.get(`${articlesUri}`, getArticles);
app.get(`${articlesUri}/:articleId`, getArticle);
app.post(`${articlesUri}`, postArticle);

// imagesUri
const imagesUri = '/api/images';
app.get(`${imagesUri}`, getImages);
app.get(`${imagesUri}/:imageId`, getImage);

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

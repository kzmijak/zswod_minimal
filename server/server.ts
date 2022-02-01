import * as bodyParser from 'body-parser';
import express from 'express';
import { postMessages, putMessage } from './routes/images';
import { getArticle, getArticles, postArticle } from './routes/articles/controller';

const app = express();
const port = 1111;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// articles
const articlesUri = '/api/articles';
app.get(`${articlesUri}`, getArticles);
app.get(`${articlesUri}/:articleId`, getArticle);
app.post(`${articlesUri}`, postArticle);

// messages
app.post('/api/messages', postMessages);
app.put('/api/messages/:id', putMessage);

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

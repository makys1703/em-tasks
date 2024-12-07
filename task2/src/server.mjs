import express from 'express';
import { actionRouter } from './routes/action.routes.mjs';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.mjs';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(actionRouter);
app.use(errorHandlerMiddleware);

app.listen(PORT);

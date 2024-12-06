import express from 'express';
import { productRouter } from './routes/product.routes';
import { productBalanceRouter } from './routes/productBalance.routes';
import { errorHandlerMiddleware } from './middlewares/errorHandler.middleware';

const app = express();

app.use(productRouter);
app.use(productBalanceRouter);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT ?? 3000);

import express from 'express';
import 'express-async-errors';
import './database/connection';
import path from 'path';

import routes from './routes';
import errorHandler  from './errors/handler';

const app =  express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333); // REQ / RES - localhost:3333

/**
 * Rota = Conjunto
 * Recurso = unstable_useTransition
 * Métodos HTTP = GET, POST, PUT, DELETE
 * Parametros
 * 
 * GET = Buscando uma informação (lista, item)
 * POST = Criando uma informação
 * PUT = Editando uma informação
 * DELETE = Deletando uma informação
 * 
 * Query: https://localhost:3333/users?search=Walther?page=2
 * Routes Params: http://localhost:3333/users/1 (Identificar um recurso)
 * Body: https://localhost:3333/users/1 (Identifica um recurso)
 */

 /**
  * Driver nativo
  * Query builder
  * ORM (Object relational mapping)
  */
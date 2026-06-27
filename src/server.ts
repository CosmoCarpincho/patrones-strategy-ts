import express from 'express';
import rutasCompresion from './routes/compresion.routes.js';

const app = express();
const PORT = 3000;

// Middleware para leer JSON del body
app.use(express.json());

app.use('/', rutasCompresion);

app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto ${PORT}');
});
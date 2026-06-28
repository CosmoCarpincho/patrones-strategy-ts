import express from 'express';
import rutasCompresion from './routes/compresion.routes.js';

const app = express();
const PORT = 3000;

// Middleware para leer JSON del body
app.use(express.json());

app.get('/', (_req, res) => {
    res.json({
        status: 'ok',
        mensaje: 'Servidor corriendo correctamente',
    });
});

app.use('/', rutasCompresion);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
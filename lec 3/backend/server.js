import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('server is ready');
});

const port = process.env.PORT || 3000;  // ya to port env se uthaega ya 3000. env tbhi lgaya h k production m jany k bd 3000 use nhi hoga

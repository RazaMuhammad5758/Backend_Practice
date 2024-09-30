import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('server is ready');
});


app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: 'first joke',
            content: 'this is first joke'
        },{
            id: 2,
            title: 'second joke',
            content: 'this is second joke'
        },{
            id: 3,
            title: 'third joke',
            content: 'this is third joke'
        },{
            id: 4,
            title: 'forth joke',
            content: 'this is forth joke'
        },{
            id: 5,
            title: 'fifth joke',
            content: 'this is fifth joke'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;  // ya to port env se uthaega ya 3000. env tbhi lgaya h k production m jany k bd 3000 use nhi hoga

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);

})
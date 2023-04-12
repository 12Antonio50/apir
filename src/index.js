const express = require ('express');
const app = express();
const morgan = require ('morgan');
const cors = require("cors")

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//cors
app.use(cors())

app.get("/", (req, res) =>{
    res.send("Hola");
});

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/movies',require('./routes/movies'));


//Comienza servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


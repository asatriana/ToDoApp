let data =[{item:'Machine Learning for starter'},{item:'Edux Learning Path'},{item:'Snowflake on Azure '}];
const bodyParser = require ('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended : false});

module.exports = (app)=> {

    app.get('/todo',(req,res)=>{
        res.render('todo',{ todos : data});
    });

    app.post('/todo',urlEncodedParser,(req,res)=>{
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo',(req,res)=>{
    
    });

};
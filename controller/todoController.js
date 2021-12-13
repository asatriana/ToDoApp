let data =[{item:'Machine Learning for starter'},{item:'Edux Learning Path'},{item:'Snowflake on Azure '}];
const bodyParser = require ('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports = (app)=> {

    app.get('/todo',(req,res)=>{    
        console.log(data);
        res.render('todo',{ todos : data});
    });

    app.post('/todo',urlencodedParser,(req,res)=>{
        //console.log(req.body)
        //data.push(JSON.parse(JSON.stringify(req.body)));
        const obj = Object.assign({},req.body)
        data.push(obj);
        res.json(data);
        //console.log(data);
    });

    app.delete('/todo/:item',(req,res)=>{
        
        console.log(req.params.item);
        //data = data.filter(myData => myData.item.replace(/ /g, "-") !== req.params.item);
        //data=data.find(c => c.item.replace(/ /g, "-") !== req.params.item);
        data =
        res.json(data)
        console.log(data);
        //;
    });

};
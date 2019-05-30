const express = require('express')
const app = express()
 
app.use(express.static(__dirname + '/public') )
 


const opciones = {
    matematicas:{
        default:0,
        alias: 'm'
    },
    ingles:{
        default:0,
        alias:'i'
    },
    programacion:{
        demand:true,
        alias:'p'
    }
}

const argv = require('yargs')
            .command ('promedio', 'Calcular el promedio', opciones)
            .argv



if (argv._[0] == 'promedio') {
   let promedio = ((argv.m+argv.i+argv.p)/3)
   texto = ('El nombre del estudiante es ' + argv.n +' y ha obtenido un promedio de '+ promedio);
    console.log('Se La informacion se ha mostrado por html, lo puede visualizar en el navegador por medio del puerto localhost:3000/ ')
} 
                     

app.get('/',function (req, res){
    res.send(texto)
   
    
    })



app.listen(3000)

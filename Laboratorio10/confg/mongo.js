const Moongose = require("mongoose");

let database = "labo jueves";
let uri =`mongodb://${host}:${port}/${database}`;
let host= "localhost";
let port="27017";

const connect = () =>{
 Mongoose.connect(uri,{userNewUrlParse:true, useuNIFFIEDtOPOLOGY:true})
 .THEN( ()=>{
     Console.log(`connection`);
 }).catch( () =>{
     console.log("error")
     });
 
}
module.exports ={connect_to_database:connect};






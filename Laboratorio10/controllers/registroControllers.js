const Registro = require("../models/register")

const gatAll= (req,res) =>{
    Registro.find((err,registros)=>{
       if(err) return res.status(500).json({mensaje:"error")

       return res.status(200).json({registros});

   });
}


const gatOneById= (req,res) =>{
    Registro.findById(req.params.id,(err,registros)=>{
        if(err) return res.status(500).json({mensaje:"error")
        
        return res.status(200).json({registros});
 
    });
    

}

const insert= (req,res) =>{
   let registro = new registro({
       carnet: req.body.carnet,
       schedule: req.body.schedule,
       isLate: req.body.isLate
   });
    
 registro.save((err)=>{
     if(err) return res.status(500).json({mensaje:"error"})
     res.status(201).json({mansaje:"XD"})
 });
}



const update= (req,res) =>{
  
    

}


const erase= (req,res) =>{
  
    

}

module.exports = {
    gatAll,
    gatOneById,
    insert,
    update,
    erase
};
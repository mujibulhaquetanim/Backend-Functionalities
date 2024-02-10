async function deleteBooks(req,res){
    try{
        const {id}=req.params;
        res.status(200).json({msg: `The book with ${id} id was deleted`});

    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function putBooks(req,res){
    try {
        const {id}=req.params;
        const {name,description}=req.body;
        res.status(200).json({msg: `The book with ${id} id was updated. new is:${name} and description is: ${description}`});
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

module.exports={deleteBooks, putBooks};
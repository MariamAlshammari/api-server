const express=require('express');
const router =express.Router();


// const {implementations}=require('../handlers/routers-implementation');

// const {createClothes,
//     getClothesHandler,
//     getAllClothes,
//     updateClothes,
//     deleteClothes,


// }=require('../handlers/routers-implementation');

// router.get('/',getHelloHandler);
router.post('/clothes',createClothes);
router.get('/clothes',getAllClothes);


router.get('/clothes/:id', getClothesHandler);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

async function createClothes(req,res){
    let clothesInfo=req.body;
    let clothesType=await Clothes.create(clothesInfo);
    res.status(201).json(clothesType)
}

async function getAllClothes(req, res) {
    let all = await Clothes.getAll();
    res.status(200).json(all);
}


async function getClothesHandler(req,res){
   

    const id=parseInt(req.params.id)
    let clothesType=await Clothes.get({where:{id: id}});
    res.status(200).json(clothesType);

}

async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    let clothesInfo = req.body;

    let clothesType = await Clothes.update({ where: { id } });
    let updateClothess = await clothesType.update(clothesInfo);
    res.status(200).json(updateClothess);
}

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deleteClothess = await Clothes.delete({ where: { id } });
    res.status(204).json(deleteClothess);
}

module.exports=router;



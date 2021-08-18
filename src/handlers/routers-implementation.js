const {Food, Clothes}=require('../models');

async function createFood(req,res){
    let foodInfo=req.body;
    let foodType=await Food.create(foodInfo);
    res.status(201).json(foodType)
}

async function createClothes(req,res){
    let clothesInfo=req.body;
    let clothesType=await Clothes.create(clothesInfo);
    res.status(201).json(clothesType)
}


function getHelloHandler(req,res){
    res.status(200).send('Helloo World!, all working')

}

async function getFoodHandler(req,res){
    // let output = {
    //     name: req.query.name}
    //     res.status(200).json(output);

    const id=parseInt(req.params.id)
    let foodType=await Food.findOne({where:{id: id}});
    res.status(200).json(foodType);

}

async function getClothesHandler(req,res){
   

    const id=parseInt(req.params.id)
    let clothesType=await Clothes.findOne({where:{id: id}});
    res.status(200).json(clothesType);

}


async function getAllFood(req, res) {
    let all = await Food.findAll();
    res.status(200).json(all);
}

async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    let foodInfo = req.body;

    let foodType = await Food.findOne({ where: { id } });
    let updateFoods = await foodType.update(foodInfo);
    res.status(200).json(updateFoods);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    let deleteFoods = await Food.destroy({ where: { id } });
    res.status(204).json(deleteFoods);
}



async function getAllClothes(req, res) {
    let all = await Clothes.findAll();
    res.status(200).json(all);
}

async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    let clothesInfo = req.body;

    let clothesType = await Clothes.findOne({ where: { id } });
    let updateClothess = await clothesType.update(clothesInfo);
    res.status(200).json(updateClothess);
}

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deleteClothess = await Clothes.destroy({ where: { id } });
    res.status(204).json(deleteClothess);
}

module.exports={
    getHelloHandler,
    createFood,
    getFoodHandler,
    createClothes,
    getClothesHandler,
    getAllFood,
    updateFood,
    deleteFood,
    getAllClothes,
    updateClothes,
    deleteClothes
}
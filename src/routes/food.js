const express=require('express');
const router =express.Router();

const {Food}=require('../models/index');

// const {implementations}=require('../handlers/routers-implementation');

// const {getHelloHandler,
//     createFood,
//     getFoodHandler,
//     getAllFood,
//     updateFood,
//     deleteFood,
    


// }=require('../handlers/routers-implementation');

// router.get('/',getHelloHandler);


router.post('/food',createFood);
router.get('/food',getAllFood);

router.get('/food/:id', getFoodHandler);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function createFood(req,res){
    let foodInfo=req.body;
    let foodType=await Food.create(foodInfo);
    res.status(201).json(foodType)
}


async function getAllFood(req, res) {
    let all = await Food.findAll();
    res.status(200).json(all);
}

async function getFoodHandler(req,res){
    // let output = {
    //     name: req.query.name}
    //     res.status(200).json(output);

    const id=parseInt(req.params.id)
    let foodType=await Food.get({where:{id: id}});
    res.status(200).json(foodType);

}


async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    let foodInfo = req.body;

    let foodType = await Food.update({ where: { id } });
    let updateFoods = await foodType.update(foodInfo);
    res.status(200).json(updateFoods);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    let deleteFoods = await Food.delete({ where: { id } });
    res.status(204).json(deleteFoods);
}




module.exports=router;




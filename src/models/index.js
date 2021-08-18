'use strict';

const POSTGRES_URI=process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";

const {Sequelize, DataTypes}= require('sequelize');

const food=require('./food.model');
const clothes=require('./clothes.model');

const Collection = require('./collection-class');


var sequelize =new Sequelize(POSTGRES_URI,{});

const clothesModel = clothes(sequelize, DataTypes);
const foodModel = food(sequelize, DataTypes);

const clothesCollection = new Collection(clothesModel);
const foodCollection = new Collection(foodModel);


module.exports={
    db:sequelize,
    Food:foodCollection,
    Clothes:clothesCollection

}





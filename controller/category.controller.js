let Categories = require("./../model/Category");
let sequelizeInstance = require("./../config/db.config");
let express = require("express");
let expressApp = express();


let createTable = async () => {
    await sequelizeInstance.sync({force:true});
    insertCategories();
    console.log("Table created successfully")
}

let insertCategories = async () => {
    await Categories.bulkCreate([
        {
            name : "Fashion"
        },
        {
            name : "Mobile"
        },
        {
            name : "Electronics"
        },
        {
            name : "Appliances"
        }
    ])
}

let getAllCategories = async (req,res,next) => {
    let categories = await Categories.findAll();
    res.writeHead(200, { 'Content-Type' : 'application/json' });
    res.write(JSON.stringify(categories));
    // res.status(200).JSON({ message: "success", data: Categories});
    res.end();
}
// UI => route => controller => model => sqlconnection
let getAllCategoryById = async (req,res,next) => {
    let id = req.params.categoryId;
    if(!id) { res.status(400).send("ID not passed")}
    let categories =  await Categories.findAll({
        where:  {
            id : id
        }
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(categories));
    res.end();
}
let addNewCategory = async (req,res,next) => {
    let categoryToAdd = req.params;
    await Categories.create({
        name: categoryToAdd
    });
    res.status(201).send("New category added");
    res.end();
}

let deleteCategoryById = async (req,res, next) => {
    let id = req.params.categoryId;
    await Categories.destroy({
        where :{
            id: id
        }
    });
    res.status(200).send("data deleted");
    res.end();
}
//createTable();

module.exports = { getAllCategories, getAllCategoryById, addNewCategory,deleteCategoryById};
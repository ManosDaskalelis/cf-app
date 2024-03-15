const User = require("../models/user.model")

exports.findAll = async (req, res) => {
    console.log("find all users' products");

    try {
        const result = await User.find({}, { _id: 0, username: 1, products: 1 })
        res.status(200).json({ data: result })
        console.log("Reading all users' products");
    } catch (error) {
        res.status(400).json({ data: error })
        console.log("Problem in finding products");
    }
}

exports.findOne = async (req, res) => {
    const username = req.params.username
    console.log('Find products for ', username);

    try {
        const result = await User.findOne({ username: username }, { _id: 0, username: 1, products: 1 })
        res.status(200).json({ data: result })
        console.log("Search was successful");
    } catch (error) {
        res.status(400).json({ data: error })
        console.log("Problem in findin item");
    }
}

exports.create = async (req, res) => {
    const username = req.body.username
    const products = req.body.products

    console.log("Products inserted");
    try {
        const result = await User.updateOne(
            {username: username},
            {
                $push: {
                    products: products
                }
            }
        )
        res.status(200).json({data: result})
        console.log("Successful creation");
    } catch (error) {
        res.status(400).json({data: error})
        console.log("Failed");
    }
}

exports.update = async(req, res) =>{
    const username = req.params.body
    const _id = req.body.product._id
    const quantity = req.body.product.quantity
    
    console.log("Update product for username", username);
    try {
        const result = await User.updateOne(
            {username: username, "products._id": _id},
            {
                $set:{
                    "products.$.quantity":quantity
                }
            }
        )
        res.status(200).json({data: result})
        console.log("Update successfull");
    } catch (error) {
        res.status(400).json({data:error})
        console.log("Error in updating");
    }
}

exports.delete = async(req, res) => {
    const username = req.params.username
    const _id = req.params._id

    console.log("Delete product");
    try {
        const result = await User.updateOne(
            {username: username},
            {
                $pull: {
                    products: {_id: _id}
                }
            }
        )
        res.status(200).json({data:result})
        console.log("success in deleting");
    } catch (error) {
        res.status(400).json({data: error})
        console.log("problem in deleting");
    }
}

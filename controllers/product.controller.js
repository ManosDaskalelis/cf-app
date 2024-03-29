const Product = require('../models/product.model')
const logger = require('../logger/logger') 


exports.findAllProducts = async(req, res) => {
    console.log("Find all products");
  
    try {
      const result = await Product.find();
      res.status(200).json({data: result});
      logger.debug("Success in reading all products");
      logger.info("Success in reading all products");
    } catch (err) {
      console.log(`Problem in reading products, ${err}`)
      logger.error(`Problem in reading all products , ${err}`);
    }
  }

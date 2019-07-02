const db = require("../config/db.config.js");
const Customer = db.customers;
const Sequelize = require("sequelize");
const { Op }  = Sequelize; // $gt
// var parseInt = require('parse-int');
// var empty = require('is-empty');

// Post a Customer
exports.create = (req, res) => {	
  // Save to MySQL database
  Customer.create({  
    "name": req.body.name,
    "gender": req.body.gender,
    "age": req.body.age,
    "wallet_amt": req.body.wallet_amt
  }).then(customer => {		
  // Send created customer to client
    res.send(customer);
  });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  // debugger;
  let filter = {};
  const queryParams = req.query;
  // console.log(queryParams); // { q : "50" }
  if( Object.keys(queryParams).length ){
    const q = parseInt(queryParams.q);
    filter = {
      "where" : {
        "wallet_amt" : {
          [Op.gt] : q
        }
      }
    };
  }

  // const id = req.params.customerId;
  Customer.findAll(filter).then(customers => {
  // Send all customers to Client
    res.send(customers);
  });
};

// Find a Customer by Id
// exports.findAll = (req, res) => {	
// 	Customer.findAll(
// 		{
// 			where: {
// 				customerId : req.params.customerId
// 			}
// 		}).then(customer => {
// 		res.send(customer);
// 	});
// };
 
// Update a Customer
exports.update = (req, res) => {
  // debugger;
  const id = req.params.customerId;
  Customer.update( { "wallet_amt": req.body.wallet_amt }, 
    { "where": {"id": req.params.customerId} }
  ).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    "where": { "id": id }
  }).then(() => {
    res.status(200).send("deleted successfully a customer with id = " + id);
  });
};
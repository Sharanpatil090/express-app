module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    "name": {
      "type": Sequelize.STRING
    },
    "gender": {
      "type": Sequelize.STRING
    },
    "age": {
      "type": Sequelize.INTEGER
    },
    "wallet_amt": {
      "type": Sequelize.INTEGER
    }
  });
	
  return Customer;
};
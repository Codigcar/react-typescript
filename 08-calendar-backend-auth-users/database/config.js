const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('DB online');

  } catch (error) {
    console.log('Error: ',error);
    throw new Error("Error al iniciarlizar BD");
  }
};

module.exports = {
    dbConnection
}
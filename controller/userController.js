const User = require("../model_schema/userModules.js");

exports.home = (req, res) => {
  res.send("this is home page");
};





exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({
      name,
      email,
    });
    res.status(200).json({
      success: true,
      message: "user crated successfully",
      user,
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};





exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({
      success: true,
      message: "this is your find data",
      users,
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};






exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(402).json({
      success: false,
      message: error.message,
    });
  }
};

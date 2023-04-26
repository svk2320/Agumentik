const Website = require("../models/website.models");

webpage_id = "644889c61e4faf2ffffd673b";

const GetwebsiteDetails = async (req, res) => {
  try {
    const websiteDetails = await Website.find({});

    res.status(200).json({
      data: websiteDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  GetwebsiteDetails,
};

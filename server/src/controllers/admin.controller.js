const Website = require("../models/website.models");

webpage_id = "644889c61e4faf2ffffd673b";

const updateSocialMediaLinks = async (req, res) => {
  try {
    const links = req.body;

    console.log(req.body);

    Website.findByIdAndUpdate(
      webpage_id,
      { webpage_id, ...links },
      { new: true }
    )
      .then((updatedItem) => {
        console.log("Updated item:", updatedItem);
      })
      .catch((error) => {
        console.log("Error updating item:", error);
      });

    res.status(200).json({
      data: links,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  updateSocialMediaLinks,
};

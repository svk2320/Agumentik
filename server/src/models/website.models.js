mongoose = require("mongoose");

const websiteSchema = mongoose.Schema({
  instagram_link: String,
  linkedIn_link: String,
  facebook_link: String,
  twitter_link: String,
});

const Website = mongoose.model("website", websiteSchema);
module.exports = Website;

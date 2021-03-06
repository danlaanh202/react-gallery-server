const Image = require("../app/models/Image");
const User = require("../app/models/User");

class ImageController {
  async getUserImage(req, res) {
    try {
      const { password, ...userInfo } = await User.findOne({
        _id: req.params.id,
      });

      const image = await Image.find({
        uploader_id: userInfo._doc._id,
      });

      return res.status(200).json(image);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async getImageWithLimit(req, res) {
    //?limit=5
    const limitQuery = req.query.limit;
    try {
      let image = limitQuery
        ? await Image.find().sort({ createdAt: -1 }).limit(limitQuery)
        : await Image.find().sort({ createdAt: -1 }).limit(100);

      return res.status(200).json(image);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async getFavoriteImage(req, res, next) {
    try {
      const favoriteIds = req.body.favoriteIds;
      const image = await Image.find({ _id: { $in: favoriteIds } });
      return res.status(200).json(image);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
module.exports = new ImageController();

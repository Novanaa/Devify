import "@/server/config/db";
import { FeaturesModel } from "@/server/models/features";

export default async function features(req, res) {
  try {
    const sort = req.query.sort == "asc" ? 1 : -1;
    const { limit } = req.query;
    const featuresDatas = await FeaturesModel.find()
      .select(["-__v", "-_id"])
      .sort({ id: sort })
      .limit(limit);
    if (featuresDatas.length < 1)
      return res
        .status(400)
        .json({ features: featuresDatas, isVlidate: false, status: 400 });
    res
      .status(200)
      .json({ features: featuresDatas, isValidate: true, status: 200 });
  } catch (err) {
    res.status(400).json({ TypeError: err, isValidate: false, status: 400 });
  }
}

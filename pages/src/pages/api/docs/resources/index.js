import { ResourcesModel } from "@/server/models/resources";

export default async function resources(req, res) {
  try {
    const datas = await ResourcesModel.find()
      .select(["-__v", "-_id"])
      .sort({ id: 1 });
    res.status(200).json({ resources: datas, isValidate: true, statsu: 200 });
  } catch (err) {
    res.status(400).json({ TypeError: err, isValidate: false, status: 400 });
  }
}

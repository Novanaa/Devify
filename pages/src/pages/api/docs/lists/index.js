import "@/server/config/db";
import { ListsModel } from "@/server/models/lists";

export default async function lists(req, res) {
  try {
    const lists = await ListsModel.find()
      .select(["-_id", "-__v"])
      .sort({ id: 1 });
    if (lists.length <= 0)
      return res.status(404).json({ messege: "Not Found", status: 404 });
    res.status(200).json({ lists, total: lists.length, status: 200 });
  } catch (err) {
    res.status(400).json({ err });
  }
}

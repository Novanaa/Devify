import "@/server/config/db";
import { QueriesModel } from "@/server/models/queries";

export default async function queries(req, res) {
  await QueriesModel.find()
    .select(["-_id", "-__v"])
    .sort({ id: 1 })
    .then((result) =>
      res.status(200).json({ queries: result, isValidate: true, status: 200 })
    )
    .catch((err) => res.status(400).json({ err }));
}

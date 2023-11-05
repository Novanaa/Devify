import "@/server/config/db";
import { QueriesModel } from "@/server/models/queries";

export default async function searchQueries(req, res) {
  const { q } = req.query;
  await QueriesModel.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { method: { $regex: q, $options: "i" } },
    ],
  })
    .select(["-_id", "-__v"])
    .sort({ id: 1 })
    .then((queries) => {
      if (queries.length < 1)
        return res
          .status(400)
          .json({ queries, isValidate: false, status: 400 });
      res.status(200).json({ queries, isValidate: true, status: 200 });
    })
    .catch((err) => res.status(400).json({ err }));
}

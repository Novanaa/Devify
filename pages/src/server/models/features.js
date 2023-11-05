import mongoose from "mongoose";

const FeaturesSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
  },
});

export const FeaturesModel =
  mongoose.models.features || mongoose.model("features", FeaturesSchema);

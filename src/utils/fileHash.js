import crypto from "crypto";

function fileHash(fileName = "") {
  const hashedFileName = crypto
    .createHash("md5")
    .update(fileName)
    .digest("hex");

  return hashedFileName;
}

export default fileHash;

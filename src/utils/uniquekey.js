function uniquekey(schema) {
  schema.method("toJSON", function () {
    const obj = this.toObject();
    obj.uniquekey = obj._id;
    delete obj._id;
    return obj;
  });
}

export default uniquekey;

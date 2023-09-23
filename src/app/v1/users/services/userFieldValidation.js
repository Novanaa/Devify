async function userFieldValidation(model) {
  const username = await model.find().select(["name", "-_id"]);
  const name = username.map((user) => {
    return user.name;
  });
  return name;
}

export default userFieldValidation;

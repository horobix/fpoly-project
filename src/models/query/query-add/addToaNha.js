const addToaNha = async (table, data, res, url) => {
  let thuTu = await table.max("thuTu");

  data["thuTu"] = thuTu + 1;
  data["id"] = thuTu + 1;

  await table.create(data);
  res.redirect(url);
};

export default addToaNha;

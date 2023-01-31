const addKhuVuc = async (table, data, res, url) => {
  let thutuKhuVuc = await table.max("thuTu");
  data["thuTu"] = thutuKhuVuc + 1;
  console.log(data["thuTu"]);
  data["id"] = thutuKhuVuc + 1;
  await table.create(data);
  res.redirect(url);
};
export default addKhuVuc;

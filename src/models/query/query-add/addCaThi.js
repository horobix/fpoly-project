const addCaThi = async (table,data,res,url) => {
    let thuTuCaThi = await table.max("thuTu");
    data["thuTu"] = thuTuCaThi + 1;
    await table.create(data);
    res.redirect(url);
};
export default addCaThi;

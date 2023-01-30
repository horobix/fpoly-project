const addNganh = async (table,data,res,url) => {
    let thuTuNganh = await table.max("thuTu");
    data["thuTu"] = thuTuNganh + 1;
    data["id"] = thuTuNganh + 1;
    await table.create(data);
    res.redirect(url);
};
export default addNganh;

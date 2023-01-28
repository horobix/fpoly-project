const addRule = async (table, data, res, url) => {
    let thuTuRule = await table.max("thuTu");
    data["thuTu"] = thuTuRule + 1;
    await table.create(data);
    res.redirect(url);
};
export default addRule

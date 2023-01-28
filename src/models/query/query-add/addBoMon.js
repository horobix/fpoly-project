const addBoMon = async (table, data, res, url) => {
    let thuTuBoMon = await table.max("thuTu");
    data["thuTu"] = thuTuBoMon + 1;
    data["idCoSo"] = "hcm";
    data["id"] = thuTuBoMon + 1;
    await table.create(data);
    res.redirect(url);
};
export default addBoMon;

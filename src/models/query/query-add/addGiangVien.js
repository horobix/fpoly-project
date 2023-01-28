const addGiangVien = async (table, data, res, url) => {
    let idGV = await table.max("id");
    data["id"] = idGV + 1;
    await table.create(data);
    res.redirect(url);
};

export default addGiangVien;

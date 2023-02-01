const addCoSo = async (table, data, res, url) => {
    if (data['thuTu'] == "") {
        let idCoSo = await table.max("id");
        let thuTuCoSo = await table.max("thuTu");
        data["id"] = idCoSo + 1;
        data["thuTu"] = thuTuCoSo + 1;
        await table.create(data);
        res.redirect(url);
    } else {
        let idCoSo = await table.max("id");
        data['id'] = idCoSo + 1;
        await table.create(data);
        res.redirect(url);
    }
}

export default addCoSo;

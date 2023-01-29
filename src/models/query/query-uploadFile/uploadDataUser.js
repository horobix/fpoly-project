import * as fs from "fs";
import path from "path";
import { hashSync } from "bcryptjs";

const uploadDataUsers = (fields, files) => {
    let data = {
        ho: fields.ho,
        ten: fields.ten,
        email: fields.email,
        password: hashSync(fields.password, 10)
    }

    let currentImagePath = (fields.hinhhientai) ? fields.hinhhientai : undefined;
    data.hinh = (files.hinh.originalFilename) ? Date.now()+'-'+files.hinh.originalFilename : undefined;

    if (data.hinh) {
        let oldPath = files.hinh.filepath;
        let newPath = path.join(__dirname, `../../../public/img/${data.hinh}`);
        var rawData = fs.readFileSync(oldPath);

        fs.writeFile(newPath, rawData, (err) => (err) ? console.log(err) : '')

        //Xóa image cũ khi user upload, code trước => publish sau;
        // if (currentImagePath) {
        //     let currentPath = path.join(__dirname, `../../../public/img/${currentImagePath}`)
        //     fs.unlink(currentPath, (err) => err ? console.log(err) : '');
        // }
    }

    return data;
}

export default uploadDataUsers;
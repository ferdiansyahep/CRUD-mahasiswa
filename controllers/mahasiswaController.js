const db = require('../connection')
const response = require('../response')

//Get Mahasiswa
exports.getAll = async (req,res,next)=>{
    try {
        const [rows] = await db.query("SELECT * FROM mahasiswa");
        return response(200, rows , "Get All Mahasiswa",res)
    } catch (error) {
        next(error)
    }
}

//Get Mahasiswa by NIM
exports.getByNim = async(req,res,next)=>{
    try {
        const { nim } = req.params;
        const [rows] = await db.query("SELECT * FROM mahasiswa WHERE nim = ?",[nim])
        if(rows.length === 0){
        return response(404, null, "Mahasiswa tidak ditemukan", res)
        }
        return response(200, rows[0], "Get Mahasiswa by NIM", res)
    } catch (error) {
        next(error)
    }
}

//POST Mahasiswa
exports.create = async(req,res,next)=>{
    try {
        const {nim, nama_lengkap, kelas, alamat} = req.body;
        if(!nim || !nama_lengkap || !kelas || !alamat){
            return response(400, null, "Semua field (nim, namaLengkap, kelas, alamat) wajib diisi", res);
        }
        const sql = ` INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (?, ?, ?, ?)`;
        const [result] = await db.query(sql, [nim, nama_lengkap, kelas, alamat]);
        return response(201, { id: result.insertId, nim }, "Data Added Successfully", res);
    } catch (err) {
        // contoh: duplicate key NIM
        if (err && err.code === "ER_DUP_ENTRY") {
          return response(409, null, "NIM sudah terdaftar", res);
        }
        next(err);
      }
};

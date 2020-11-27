var db= require('../dbConnection');

var BasicInfo={

    getAllBasicInfo: function(callback){
        return db.query('select * from basicinfo', callback);
    },

    getBasicInfoById: function(id, callback){
        return db.query('select * from basicinfo where EmpNo=?',[id], callback);
    },

    addBasicInfo: function(basicinfo,callback){
        console.log(basicinfo.EmpNo);
        return db.query('INSERT INTO `basicinfo`( `EmpNo`, `Title`, `Initial`, `FirstName`, `MiddleName`, `LastName`, `Gender`, `DOB`, `EmpAge`, `OPhone`, `PMobile`, `OMail`, `PMail`, `PMail2`, `PMail3`, `Photo`, `Birth`, `Domicile`, `Religion`, `Caste`, `Nationality`, `Voter`, `PanNo`, `Adhar`, `Status`, `Child`, `MDate`, `SName`, `BankName`, `AccntType`, `Payment`, `AccntNo`, `BankDetail`, `IFSC`, `RBankNm`, `RAccntNo`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [basicinfo.EmpNo,basicinfo.Title,basicinfo.Initial, basicinfo.FirstName,
         basicinfo.MiddleName,basicinfo.LastName,basicinfo.Gender,basicinfo.DOB,
         basicinfo.EmpAge, basicinfo.OPhone,basicinfo.PMobile,basicinfo.OMail,
         basicinfo.PMail,basicinfo.PMail2,basicinfo.PMail3, basicinfo.Photo,
         basicinfo.Birth,basicinfo.Domicile,basicinfo.Religion,basicinfo.Caste,
         basicinfo.Nationality,basicinfo.Voter,basicinfo.PanNo,basicinfo.Adhar,
         basicinfo.Status,basicinfo.Child, basicinfo.MDate,basicinfo.SName,
         basicinfo.BankName,basicinfo.AccntType, basicinfo.Payment,
        basicinfo.AccntNo,basicinfo.BankDetail,basicinfo.IFSC,basicinfo.RBankNm,
        basicinfo.RAccntNo], callback);
    },
    deleteBasicInfo: function(id,callback){
        return db.query('delete from basicinfo where Id=?',[id],callback);
    },
  
    updateBasicInfo: function(eid,basicinfo,callback){
        return db.query('update basicinfo set Id=?,Title=?,Initial=?,FirstName=?,MiddleName=?,LastName=?,Gender=?,DOB=?,EmpAge=?,OPhone=?,PMobile=?,OMail=?,PMail=?,PMail2=?,PMail3=?,Photo=?,Birth=?,Domicile=?,Religion=?,Caste=?,Nationality=?,Voter=?,PanNo=?,Adhar=?,Status=?,Child=?,MDate=?,SName=?,BankName=?,AccntType=?,Payment=?,AccntNo=?,BankDetail=?,IFSC=?,RBankNm=?,RAccntNo=? where EmpNo=?',
        [basicinfo.Id, basicinfo.Title, basicinfo.Initial, basicinfo.FirstName, basicinfo.MiddleName,basicinfo.LastName,
            basicinfo.Gender, basicinfo.DOB, basicinfo.EmpAge, basicinfo.OPhone, basicinfo.PMobile, basicinfo.OMail,
            basicinfo.PMail, basicinfo.PMail2, basicinfo.PMail3, basicinfo.Photo,basicinfo.Birth,basicinfo.Domicile,
            basicinfo.Religion,basicinfo.Caste,basicinfo.Nationality, basicinfo.Voter,basicinfo.PanNo,basicinfo.Adhar,
            basicinfo.Status, basicinfo.Child, basicinfo.MDate,basicinfo.SName,basicinfo.BankName, basicinfo.AccntType, 
            basicinfo.Payment,basicinfo.AccntNo,basicinfo.BankDetail,basicinfo.IFSC,basicinfo.RBankNm,basicinfo.RAccntNo, eid], callback); 
    }
};

module.exports= BasicInfo;
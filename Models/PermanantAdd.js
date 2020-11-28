var db= require('../dbConnection');

var PermanantAdd={

    getAllPermanantAdd: function(callback){
        return db.query('select * from permanantadd', callback);
    },
    getAllPermanantAddById: function(id, callback){
        return db.query('select * from permanantadd where emp_id=?',[id], callback);
    },

    addPermanantAdd: function(permanantadd,callback){
        return db.query('INSERT INTO `permanantadd`(`emp_id`, `permanantadd`, `city`, `country`, `state`, `district`, `pincode`, `phone1`, `phone2`, `fax`, `mobile`, `presentadd`, `pcity`, `pcountry`, `pstate`, `pdistrict`, `ppincode`, `pphone1`, `pphone2`, `pfax`, `pmobile`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 
        [permanantadd.emp_id,
            permanantadd.permanantadd, permanantadd.city,
            permanantadd.country,permanantadd.state,
            permanantadd.district,permanantadd.pincode,
            permanantadd.phone1,permanantadd.phone2,
            permanantadd.fax,permanantadd.mobile,
            permanantadd.presentadd, permanantadd.pcity,
            permanantadd.pcountry,permanantadd.pstate,
            permanantadd.pdistrict,permanantadd.ppincode,
            permanantadd.pphone1,permanantadd.pphone2,
            permanantadd.pfax,permanantadd.pmobile], callback);
    },
    deletePermanantAdd: function(id,callback){
        return db.query('delete from permanantadd where emp_id=?',[id],callback);
    },
    updatePermanantAdd: function(id,permanantadd,callback){
        return db.query('update permanantadd set permanantadd=?,city=?,country=?,state=?,district=?,pincode=?,phone1=?,phone2=?,fax=?,mobile=?,presentadd=?,pcity=?,pcountry=?,pstate=?,pdistrict=?,ppincode=?,pphone1=?,pphone2=?,pfax=?,pmobile=? where emp_id=?',
        [permanantadd.permanantadd, permanantadd.city,
            permanantadd.country,permanantadd.state,
            permanantadd.district,permanantadd.pincode,
            permanantadd.phone1,permanantadd.phone2,
            permanantadd.fax,permanantadd.mobile,
             permanantadd.presentadd, permanantadd.pcity,
            permanantadd.pcountry,permanantadd.pstate,
            permanantadd.pdistrict,permanantadd.ppincode,
            permanantadd.pphone1,permanantadd.pphone2,
            permanantadd.pfax,permanantadd.pmobile,id], callback); 
    }
};

module.exports= PermanantAdd;
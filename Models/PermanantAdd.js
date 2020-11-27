var db= require('../dbConnection');

var PermanantAdd={

    getAllPermanantAdd: function(callback){
        return db.query('select * from permanantadd', callback);
    },
    getAllPermanantAddById: function(id, callback){
        return db.query('select * from permanantadd where emp_id=?',[id], callback);
    },

    addPermanantAdd: function(permanantadd,callback){
        return db.query('INSERT INTO `permanantadd`(`emp_id`,`permanantadd`, `city`, `country`, `state`, `district`, `pincode`, `phone1`, `phone2`, `fax`, `mobile`)  values(?,?,?,?,?,?,?,?,?,?,?)', 
        [permanantadd.emp_id,
            permanantadd.permanantadd, permanantadd.city,
            permanantadd.country,permanantadd.state,
            permanantadd.district,permanantadd.pincode,
            permanantadd.phone1,permanantadd.phone2,
            permanantadd.fax,permanantadd.mobile], callback);
    },
    deletePermanantAdd: function(id,callback){
        return db.query('delete from permanantadd where emp_id=?',[id],callback);
    },
    updatePermanantAdd: function(id,permanantadd,callback){
        return db.query('update permanantadd set permanantadd=?,city=?,country=?,state=?,district=?,pincode=?,phone1=?,phone2=?,fax=?,mobile=? where emp_id=?',
        [permanantadd.permanantadd, permanantadd.city,
            permanantadd.country,permanantadd.state,
            permanantadd.district,permanantadd.pincode,
            permanantadd.phone1,permanantadd.phone2,
            permanantadd.fax,permanantadd.mobile,id], callback); 
    }
};

module.exports= PermanantAdd;
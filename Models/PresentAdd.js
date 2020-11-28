var db= require('../dbConnection');

var PresentAdd={

    getAllPresentAdd: function(callback){
        return db.query('select * from presentadd', callback);
    }, 
    getAllPresentAddById: function(id2, callback){
        return db.query('select * from presentadd where emp_id=?',[id2], callback);
    },
    

    addPresentAdd: function(presentadd,callback){
        return db.query('INSERT INTO `presentadd`(`emp_id`, `presentadd`, `pcity`, `pcountry`, `pstate`, `pdistrict`, `ppincode`, `pphone1`, `pphone2`, `pfax`, `pmobile`) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 
        [   presentadd.emp_id,
            presentadd.presentadd, presentadd.pcity,
            presentadd.pcountry,presentadd.pstate,
            presentadd.pdistrict,presentadd.ppincode,
            presentadd.pphone1,presentadd.pphone2,
            presentadd.pfax,presentadd.pmobile], callback);
    },
  
    deletePresentaddAdd: function(id2,callback){
        return db.query('delete from presentadd where emp_id=?',[id2],callback);
    },
    updatePresentaddAdd: function(id2,presentadd,callback){
     return db.query('update presentadd set presentadd=?, pcity=?, pcountry=?, pstate=?,pdistrict=?, ppincode=?, pphone1=?, pphone2=?,pfax=?, pmobile=? where emp_id=?',
        [presentadd.presentadd, presentadd.pcity,
        presentadd.pcountry,presentadd.pstate,
        presentadd.pdistrict,presentadd.ppincode,
        presentadd.pphone1,presentadd.pphone2,
        presentadd.pfax,presentadd.pmobile,id2], callback); 
    }
};

module.exports= PresentAdd;
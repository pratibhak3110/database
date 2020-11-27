var db= require('../dbConnection');

var PresentAdd={

    getAllPresentAdd: function(callback){
        return db.query('select * from presentadd', callback);
    },

    addPresentAdd: function(presentadd,callback){
        return db.query('insert into presentadd values(?,?,?,?,?,?,?,?,?,?)', 
        [presentadd.presentadd, presentadd.pcity,
            presentadd.pcountry,presentadd.pstate,
            presentadd.pdistrict,presentadd.ppincode,
            presentadd.pphone1,presentadd.pphone2,
            presentadd.pfax,presentadd.pmobile], callback);
    },
    deletePresentaddAdd: function(id,callback){
        return db.query('delete from presentadd where Id=?',[id],callback);
    },
    updatePresentaddAdd: function(id,presentadd,callback){
        return db.query('update presentadd set presentadd=?, pcity=?, pcountry=?, pstate=?,pdistrict=?, ppincode=?, pphone1=?, pphone2=?,pfax=?, pmobile=?, OMail=? where Id=?',
        [presentadd.presentadd, presentadd.pcity,
            presentadd.pcountry,presentadd.pstate,
            presentadd.pdistrict,presentadd.ppincode,
            presentadd.pphone1,presentadd.pphone2,
            presentadd.pfax,presentadd.pmobile], callback); 
    }
};

module.exports= PresentAdd;
var db= require('../dbConnection');

var Skill={

    getAllSkill: function(callback){
        return db.query('select * from skill', callback);
    },

    addSkill: function(skill,callback){
        return db.query('insert into skill values(?,?,?,?,?)', 
        [skill.category, skill.skill,
            skill.level,skill.current,
            skill.experience], callback);
    },
    deleteSkill: function(id,callback){
        return db.query('delete from skill where Id=?',[id],callback);
    },
    updateSkill: function(id,skill,callback){
        return db.query('update skill set category=?, skill=?, level=?, current=?,experience=? where Id=?',
        [skill.category, skill.skill,
            skill.level,skill.current,
            skill.experience], callback); 
    }
};

module.exports= Skill;
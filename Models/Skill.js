var db= require('../dbConnection');

var Skill={

    getAllSkill: function(callback){
        return db.query('select * from skill', callback);
    },

    addSkill: function(skill,callback){
        return db.query('INSERT INTO `skill`(`emp_id`, `category`, `skill`, `level`, `current`, `experience`) VALUES(?,?,?,?,?,?)', 
        [
           skill.emp_id, skill.category, skill.skill,
            skill.level,skill.current,
            skill.experience], callback);
    },
    deleteSkill: function(id,callback){
        return db.query('delete from skill where emp_id=?',[id],callback);
    },
    updateSkill: function(id,skill,callback){
        return db.query('update skill set category=?, skill=?, level=?, current=?,experience=? where emp_id=?',
        [
            skill.emp_id,skill.category, skill.skill,
            skill.level,skill.current,
            skill.experience], callback); 
    }
};

module.exports= Skill;
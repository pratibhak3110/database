var db= require('../dbConnection');

var Skill={

    getAllSkill: function(callback){
        return db.query('select * from skill', callback);
    },
      getAllSkillById: function(id4,callback){
        return db.query('select * from skill where emp_id=?',[id4], callback);
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
    updateSkill: function(sid,skill,callback){
        return db.query('UPDATE `skill` SET `category`=?,`skill`=?,`level`=?,`current`=?,`experience`=? WHERE `emp_id`=? AND `Id`=?',
        [
            skill.category, skill.skill,
            skill.level,skill.current,
            skill.experience,sid, skill.Id], callback); 
    }
};

module.exports= Skill;
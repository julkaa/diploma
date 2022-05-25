module.exports = (sequelize, Sequelize) => {
	const List = sequelize.define('lists', {
	  title: {
		  type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
        },
       done: {
         type: Sequelize.BOOLEAN,
         allowNull: false,
         defaultValue: false
       }
	  
    },
    {
        timestamps: false
    });
	
	return List;
}

module.exports = (sequelize, Sequelize) => {
  const Note = sequelize.define(
    "notes",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Note;
};

module.exports = function (sequelize, DataTypes) {
    const Crew = sequelize.define("Crew", {
        crewName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        firmName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        profileImage: {
            type: DataTypes.TEXT,
            defaultValue: "https://www.rhinodigital.com/wp-content/uploads/2016/12/blank-user.jpg"
        }
    });

    Crew.associate = function(models) {
        Crew.belongsTo(models.User);

        Crew.belongsToMany(models.Property, { through: 'CrewProperty' })
    };

    return Crew
};
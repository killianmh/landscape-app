module.exports = function (sequelize, DataTypes) {
    const LandscapeManager = sequelize.define("LandscapeManager", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        lastName: {
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

    LandscapeManager.associate = function(models) {
        LandscapeManager.belongsTo(models.User);

        LandscapeManager.belongsToMany(models.Property, { through: 'LandscapeManagerProperty' })
    };

    return LandscapeManager
};
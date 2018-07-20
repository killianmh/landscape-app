module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define ("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        }
    });

    User.associate = function(models) {
        User.hasOne(models.Landscaper);
        User.hasOne(models.Crewchief);
        User.hasOne(models.Propertymanager);
        User.hasOne(models.Architect);
    }

    return User;
};
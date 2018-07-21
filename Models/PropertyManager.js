module.exports = function (sequelize, DataTypes) {
    const PropertyManager = sequelize.define("PropertyManager", {
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

    PropertyManager.associate = function(models) {
        PropertyManager.belongsTo(models.User);

        PropertyManager.belongsToMany(models.Property, { through: 'PropertyManagerProperty' })
    };

    return PropertyManager
};
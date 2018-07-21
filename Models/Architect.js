module.exports = function (sequelize, DataTypes) {
    const Architect = sequelize.define("Architect", {
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

    Architect.associate = function(models) {
        Architect.belongsTo(models.User);

        Architect.belongsToMany(models.Property, { through: 'ArchitectProperty' })
    };

    return Architect;
};
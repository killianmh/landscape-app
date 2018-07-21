module.exports = function (sequelize, DataTypes) {
    const Property = sequelize.define("Property", {
        propertyName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        propertyAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        // This is the reference to the CAD drawing of the site
        sitePlan: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Property.associate = function(models) {
        Property.belongsToMany(models.Architect, { through: 'ArchitectProperty' })
        Property.belongsToMany(models.Crew, { through: 'CrewProperty' })
        Property.belongsToMany(models.LandscapeManager, { through: 'LandscapeManagerProperty' })
        Property.belongsToMany(models.PropertyManager, { through: 'PropertyManagerProperty' })
    };

    return Property;
};
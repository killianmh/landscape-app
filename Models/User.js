module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define ("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    User.associate = function(models) {

        // Based on how this is setup, it might appear possible for a single user to have up to 4 accounts
        // (one of each type). But this isn't possible because of the unique requirement on the email field

        // This is the landscaping crew contracted to upkeep grounds
        User.hasOne(models.Crew);

        // This is the manager of a landscaping company who has multiple crews and properties to look after
        User.hasOne(models.LandscapeManager);

        // This is the manager of a property management company who has multiple properties to look after
        User.hasOne(models.PropertyManager);

        // This is the landscape architect
        User.hasOne(models.Architect);

        // Define many-to-many relationship with property model
        // User.belongsToMany(models.Property, { through: 'UserProperty' })
    }

    return User;
};
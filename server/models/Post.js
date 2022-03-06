//  const { sequelize } = require(".")

module.exports=(sequelize,DataTypes)=>{

    const Posts=sequelize.define("Posts",{
        Name:{
            type:DataTypes.STRING,
            allowNull:false,
        },

        EMPID:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },

        USERNAME:{
            type:DataTypes.STRING,
            allowNull:false,
        },

    });
    return Posts

};
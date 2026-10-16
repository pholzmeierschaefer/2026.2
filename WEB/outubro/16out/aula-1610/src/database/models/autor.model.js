const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Autor = sequelize.define(
	"Autor",
	{
		id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "id"
        },
		nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "nome",
        },
		nacionalidade: {
            type: DataTypes.STRING(50),
            field: "nacionalidade",
        },
		anoNascimento: {
            type: DataTypes.INTEGER,
            field: "ano_nascimento",
        },
	},
	{
        timestamps: false,
        tableName: "autores",
    },
);

module.exports = Autor;

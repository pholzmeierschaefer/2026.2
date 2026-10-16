const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Livro = sequelize.define(
	"Livro",
	{
		id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "id"
        },

        autorID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "autor_id"
        },

        titulo: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        isbn: {
            type: DataTypes.STRING(13),
            allowNull: false,
            unique: true
        },

        editora: {
            type: DataTypes.STRING(80),
        },

        paginas: {
            type: DataTypes.INTEGER,
        },

        anoPublicacao: {
            type: DataTypes.INTEGER,
            field: "ano_publicacao"
        },

        categoria: {
            type: DataTypes.ENUM('FANTASIA', 'TERROR', 'FICCAO_CIENTIFICA', 'ROMANCE', 'TECNICO'),
            allowNull: false,
        }
	},
	{
        timestamps: false,
        tableName: "livros",
    },
);

module.exports = Livro;

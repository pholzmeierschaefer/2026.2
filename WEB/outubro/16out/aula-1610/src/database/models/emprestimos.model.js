const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Emprestimo = sequelize.define(
	"Emprestimo",
	{
		id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "id"
        },

        leitorID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "leitor_id"
        },

        livroID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "livro_id"
        },

        dataEmprestimo: {
            type: DataTypes.DATE,
            allowNull: false,
            field: "data_emprestimo"

        },

        dataPrevista: {
            type: DataTypes.DATE,
            allowNull: false,
            field: "data_prevista"
        },

        dataDevolucao: {
            type: DataTypes.DATE,
            field: "data_devolucao"
        },
	},
	{
        timestamps: false,
        tableName: "emprestimos",
    },
);

Emprestimo.associate = (models) => {
    Emprestimo.belongsTo(models.Livro, {
        foreignKey: "livroID",
        as: "livro",
    });

    Emprestimo.belongsTo(models.Leitor, {
        foreignKey: "leitorID",
        as: "leitor",
    });
}

module.exports = Emprestimo;

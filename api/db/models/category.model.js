const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.NOW

  },
  // Otros campos específicos para la tabla de categorías
  // Ejemplo: name, description, createdAt, etc.
}
}

class Category extends Model {
  static associate() {
    // Asociaciones si es necesario
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    };
  }
}

module.exports = { CATEGORY_TABLE, Category, CategorySchema };

const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDER_TABLE = 'orders';

const OrderSchema = {
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

  }
  // Otros campos específicos para la tabla de pedidos
  // Ejemplo: customerId, totalAmount, createdAt, etc.
}
}

class Order extends Model {
  static associate() {
    // Asociaciones si es necesario
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    };
  }
}

module.exports = { ORDER_TABLE, Order, OrderSchema };

import { DataTypes } from 'sequelize';
import db from './index.js';

const Log = db.sequelize.define('Log', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },

  created: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Date.now, // Automatically set the current timestamp
  },

  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // foreigner key for bot, better to have called botId
  botId: {
    type: DataTypes.UUID,
    references: {
      model: 'Bots',
      key: 'id',
    },
  },

  // foreigner key for work, better to have called workerId
  workerId: {
    type: DataTypes.UUID,
    references: {
      model: 'Workers',
      key: 'id',
    },
  },
}, {
  timestamps: false, // Disable Sequelize's default timestamps
});

export default Log;

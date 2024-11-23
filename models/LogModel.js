import { DataTypes } from 'sequelize';
import db from './index.js';
import Bot from './BotModel.js';

const Log = db.sequelize.define('Log', {
  // Immutable Required UUID
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },

  // Immutable Required ISO Timestamp
  created: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Date.now, // Automatically set the current timestamp
  },

  // Mutable Required String
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // Immutable Required UUID - references a unique bot
  botId: {
    type: DataTypes.UUID,
    references: {
      model: 'Bots',
      key: 'id',
    },
  },

  // Immutable Required UUID - references a unique worker
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

import { DataTypes } from 'sequelize';
import db from './index.js';
import Log from './LogModel.js';
import Worker from './WorkerModel.js';

const Bot = db.sequelize.define('Bot', {
    // Immutable Required UUID
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Automatically generates a UUID
        allowNull: false,
        primaryKey: true,
    },

    // Mutable Required String
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    // Mutable Optional String
    description: {
        type: DataTypes.STRING, // Optional by default
    },

    // Mutable Required String Enum
    status: {
        type: DataTypes.ENUM('DISABLED', 'ENABLED', 'PAUSED'), // Define allowed values
        allowNull: false,
        defaultValue: 'DISABLED',
    },

    // Immutable Required Epoch Timestamp
    created: {
        type: DataTypes.BIGINT, // Store epoch timestamp as a big integer
        allowNull: false,
        defaultValue: () => Date.now(), // Automatically set to the current timestamp
    },
}, {
    timestamps: false, // Disable Sequelize's `createdAt` and `updatedAt` fields
});

Worker.belongsTo(Bot, {
    foreignKey: 'botId',
as: 'bot',
});

Bot.hasMany(Worker, {
    foreignKey: 'botId',
    as: 'workers',
});


Bot.hasMany(Log, {
  foreignKey: 'botId',
  as: 'logs',
});


Log.belongsTo(Bot, {
  foreignKey: 'botId',
  as: 'bot',
});

export default Bot;

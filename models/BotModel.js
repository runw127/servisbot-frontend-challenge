import { DataTypes } from 'sequelize';
import db from './index.js';
import Log from './LogModel.js';
import Worker from './WorkerModel.js';

const Bot = db.sequelize.define('Bot', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Automatically generates a UUID
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING, // Optional by default
    },

    status: {
        type: DataTypes.ENUM('DISABLED', 'ENABLED', 'PAUSED'),
        allowNull: false,
        defaultValue: 'DISABLED',
    },

    created: {
        type: DataTypes.BIGINT,
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

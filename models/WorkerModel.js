import { DataTypes } from 'sequelize';
import db from './index.js';
import Log from './LogModel.js';

const Worker = db.sequelize.define('Worker', {

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },


    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },


    description: {
        type: DataTypes.STRING,
    },

    // foreigner key for bot, better to have called botId
    botId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Bots',
            key: 'id',
        },
    },

    created: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: () => Date.now(),
    },
}, {
    timestamps: false, // Disable Sequelize's `createdAt` and `updatedAt` fields
});

Worker.hasMany(Log, {
    foreignKey: 'workerId',
    as: 'logs',
});

export default Worker;

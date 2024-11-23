import { DataTypes } from 'sequelize';
import db from './index.js';
import Log from './LogModel.js';

const Worker = db.sequelize.define('Worker', {
    // Immutable Required UUID
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },

    // Mutable Required String
    name: {
        type: DataTypes.STRING,
        allowNull: false, // Required field
    },

    // Mutable Optional String
    description: {
        type: DataTypes.STRING, // Optional by default
    },

    // Mutable Required String - references a unique bot
    botId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Bots', // Table name for Bot
            key: 'id',     // Foreign key references Bot's `id`
        },
    },

    // Immutable Required Epoch Timestamp
    created: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: () => Date.now(),
    },
}, {
    timestamps: false, // Disable Sequelize's `createdAt` and `updatedAt` fields
});

// Prevent updates to immutable fields
Worker.beforeUpdate((instance) => {
    if (instance.changed('id')) {
        throw new Error('The UUID field "id" is immutable and cannot be updated.');
    }
    if (instance.changed('created')) {
        throw new Error('The "created" field is immutable and cannot be updated.');
    }
});

Worker.hasMany(Log, {
    foreignKey: 'workerId',
    as: 'logs',
});

export default Worker;

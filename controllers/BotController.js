import validator from 'validator';
import Bot from '../models/BotModel.js';
import Worker from '../models/WorkerModel.js';
import Log from '../models/LogModel.js';

// TODO: Need to move to ulti folder with test
const { isUUID } = validator;

const listAllBots = (req, res) => {
    Bot.findAll().then(bot => {
        return res.json(bot);
    });
}

// query all bots with their workers(future use)
const listAllBotsWithWorkers = async (req, res) => {
    Bot.findAll({
        include: {
            model: Worker,
            as: 'workers',
        },
    }).then(bot => {
        return res.json(bot);
    });
}

const findBotById = async (req, res) => {
    const { id } =  req.params;

    if (!isUUID(id)) {
        return res.status(400).json({ error: 'Invalid UUID format.' });
    }

    const bot = await Bot.findOne({
        where: { id },
    });

    if (!bot) {
        console.log(`Bot with ID ${id} not found.`);
    }

    return res.status(200).json(bot);
}

// TODO: this might could merge with function findBotById.
const findBotByIdWithItsWorkers = async (req, res) => {
    const { id } =  req.params;

    if (!isUUID(id)) {
        return res.status(400).json({ error: 'Invalid UUID format.' });
    }

    const bot = await Bot.findOne({
        where: { id },
        include: { 
            model: Worker, // Include Workers
            as: 'workers', // Use the alias defined in the association
        },
    });

    if (!bot) {
        console.log(`Bot with ID ${id} not found.`);
    }

    return res.status(200).json(bot);
}

const findBotByIdWithItsLogs = async (req, res) => {
    const { id } =  req.params;

    if (!isUUID(id)) {
        return res.status(400).json({ error: 'Invalid UUID format.' });
    }

    const bot = await Bot.findOne({
        where: { id },
        include: {
            model: Log,
            as: 'logs',
        },
    });

    if (!bot) {
        console.log(`Bot with ID ${id} not found.`);
    }

    return res.status(200).json(bot);
}


export default {
    listAllBots,
    listAllBotsWithWorkers,
    findBotById,
    findBotByIdWithItsWorkers,
    findBotByIdWithItsLogs,
};

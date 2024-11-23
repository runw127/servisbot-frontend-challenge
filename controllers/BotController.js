import validator from 'validator';
import Bot from '../models/BotModel.js';
import Worker from '../models/WorkerModel.js';

// TODO: Need to move to ulti folder with test
const { isUUID } = validator;

const listAllBots = (req, res) => {
    Bot.findAll().then(bot => {
        return res.json(bot);
    });
}

// query all bots with their workers(future use)
const listAllBotsWithWorkers = (req, res) => {
    Bot.findAll({
        include: {
            model: Worker,
            as: 'workers',
        },
    }).then(bot => {
        return res.json(bot);
    });
}

const findBotById = (req, res) => {
    const { id } =  req.params;

    // Validate the UUID format
    if (!isUUID(id)) {
        return res.status(400).json({ error: 'Invalid UUID format.' });
    }

    const bot = Bot.findOne({
        where: { id },
    });

    if (!bot) {
        console.log(`Bot with ID ${id} not found.`);
    }

    return res.status(200).json(bot);
}

export default { listAllBots, listAllBotsWithWorkers, findBotById };

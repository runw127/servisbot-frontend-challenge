import Bot from '../models/BotModel.js';
import Worker from '../models/WorkerModel.js';

const listAllBots = (req, res) => {
    Bot.findAll({
        include: {
            model: Worker,
            as: 'workers',
        },
    }).then(bot => {
        return res.json(bot);
    });
}

export default { listAllBots };

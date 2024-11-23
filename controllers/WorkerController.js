import { Op } from 'sequelize';
import validator from 'validator';
import Bot from '../models/BotModel.js';
import Worker from '../models/WorkerModel.js';
import Log from '../models/LogModel.js';

// TODO: Need to move to ulti folder with test
const { isUUID } = validator;


const findRelatedWorkersById = async (req, res) => {
    const { id } = req.params;

    if (!isUUID(id)) {
        return res.status(400).json({ error: 'Invalid UUID format.' });
    }
  
    try {
      const worker = await Worker.findOne({
        where: { id },
        include: {
          model: Bot,
          as: 'bot', // Include the associated bot
        },
      });
  
      if (!worker) {
        return res.status(404).json({ error: `Worker with ID ${id} not found.` });
      }
  
      const relatedWorkers = await Worker.findAll({
        where: {
          botId: worker.botId,
          id: { [Op.ne]: id },
        },
      });

      return res.status(200).json(relatedWorkers);
    } catch (error) {
      console.error('Error fetching related workers:', error.message);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
};

const findLogsByWorkerWithBot = async (req, res) => {
    const { id } = req.params;

    try {
        const workerWithLogsAndBot = await Worker.findOne({
            where: { id },
            include: [
                {
                model: Log,
                as: 'logs',
                },
                {
                model: Bot, // Inlcude the associated bot as requested
                as: 'bot',
                },
            ],
        });

        if (!workerWithLogsAndBot) {
            return res.status(404).json({ error: `Worker with ID ${id} not found.` });
        }

        return res.status(200).json({
            logs: workerWithLogsAndBot.logs,
            worker: {
                id: workerWithLogsAndBot.id,
                name: workerWithLogsAndBot.name,
                description: workerWithLogsAndBot.description,
                botId: workerWithLogsAndBot.botId,
                created: workerWithLogsAndBot.created,
            },
            bot: workerWithLogsAndBot.bot,
        });

    } catch (error) {
        console.error('Error fetching logs for worker:', error.message);
        return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
}
  

export default { findRelatedWorkersById, findLogsByWorkerWithBot }
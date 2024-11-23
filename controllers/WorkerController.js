import { Op } from 'sequelize';
import validator from 'validator';
import Bot from '../models/BotModel.js';
import Worker from '../models/WorkerModel.js';

// TODO: Need to move to ulti folder with test
const { isUUID } = validator;


const findRelatedWorkersById = async (req, res) => {
    const { id } = req.params;

    if (!isUUID(id)) {
        return res.status(400).json({ error: 'Invalid UUID format.' });
    }
  
    try {
      // Step 1: Find the worker and its associated bot
      const worker = await Worker.findOne({
        where: { id },
        include: {
          model: Bot,
          as: 'bot', // Include the associated bot
        },
      });
  
      // If the worker is not found, return a 404 response
      if (!worker) {
        return res.status(404).json({ error: `Worker with ID ${id} not found.` });
      }
  
      // Step 2: Query other workers related to the same bot
      const relatedWorkers = await Worker.findAll({
        where: {
          botId: worker.botId, // Find workers with the same bot ID
          id: { [Op.ne]: id }, // Exclude the current worker (not equal to the given ID)
        },
      });
  
      // Return the related workers
      return res.status(200).json(relatedWorkers);
    } catch (error) {
      console.error('Error fetching related workers:', error.message);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
};
  

export default { findRelatedWorkersById };
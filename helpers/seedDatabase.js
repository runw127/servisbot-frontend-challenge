import Bot from '../models/BotModel.js';
import Worker from '../models/WorkerModel.js';
import Log from '../models/LogModel.js';

const seedDatabase = async () => {
    const bot = await Bot.bulkCreate([
        { name: 'Bot One', description: 'Test Bot One', status: 'ENABLED' },
        { name: 'Bot Two', description: 'Test Bot One', status: 'DISABLED' }
    ]);
    const workers = await Worker.bulkCreate([
        { name: 'Worker One', botId: bot[0].id },
        { name: 'Worker Two', botId: bot[0].id },
        { name: 'Worker Three', botId: bot[1].id },
        { name: 'Worker Four', botId: bot[1].id }
    ]);
    await Log.bulkCreate([
        { message: 'Log for Bot One message 1', botId: bot[0].id, workerId: null },
        { message: 'Log for Bot One message 2', botId: bot[0].id, workerId: null },
        { message: 'Log for Bot Two message 1', botId: bot[1].id, workerId: null },
        { message: 'Log for Bot Two message 2', botId: bot[1].id, workerId: null },
        { message: 'Log for Worker One message 1', botId: null, workerId: workers[0].id },
        { message: 'Log for Worker One message 2', botId: null, workerId: workers[0].id },
        { message: 'Log for Worker Two message 1', botId: null, workerId: workers[1].id },
        { message: 'Log for Worker Two message 2', botId: null, workerId: workers[1].id },
    ]);
};
  
export default seedDatabase;
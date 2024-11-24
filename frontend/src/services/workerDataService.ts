import api from "./apiService";
import { BotWithWorkers, WorkerWithLogs } from "../models/api.model";

export const fetchWorkersWithLogs = async (botId: string) :  Promise<WorkerWithLogs[]> => {
    try {
        const botWithWorkers = await api.get<BotWithWorkers>(`/bot/list/${botId}/workers`);

        if (botWithWorkers.data) {

            const workersWithLogsArray = await Promise.all(
                botWithWorkers.data.workers.map(async (worker) => {
                    const { data } = await api.get<WorkerWithLogs>(`/worker/${worker.id}/logs`);
                    if (data.logs.length > 0) {
                        return { ...worker, logs: data.logs };
                    }
                    return { ...worker, logs: [] };
                })
            );
            
            return workersWithLogsArray;
        }
        return [];
    } catch (error) {
        console.error('Error fetching bots:', error);
        throw error;
    }
}
export interface Log {
    id: string;
    created: string;
    message: string;
    botId: string | null;
    workerId: string;
};
  
export interface Worker {
    id: string;
    name: string;
    description: string | null;
    botId: string;
    created: string;
};

export interface WorkerWithLogs extends Worker {
    logs: Log[];
}

export interface Bot {
    id: string;
    name: string;
    description: string;
    status: string;
    created: string;
};

export interface BotWithWorkers extends Bot {
    workers: Worker[];
};
const { Queue } = require("bullmq");

const connection = {
    host: 'paybank-redis',
    port: 6379
}

const queueName = "twoFactorQueue"

const queue = new Queue(queueName, {connection})

export const getJob = async () => {
    const jobs =  await queue.getJobs(['waiting', 'delayed', 'active', 'completed', 'failed']) // busca todos os jobs
    return jobs[0] // seleciona apenas o 1º job
}

export const cleanJobs = async() => {
    return queue.obliterate
}

module.exports = { getJob, cleanJobs }
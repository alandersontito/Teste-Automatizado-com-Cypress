const { defineConfig } = require("cypress");

const { obtercodigo2FA } = require("./cypress/support/tasks/db.js"); // importa do db.js

const { getJob, cleanJobs } = require("./cypress/support/tasks/redis.js"); // Call para o REDIS

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", { obtercodigo2FA });
      return config;
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async get2FAJob() {
          const job = await getJob()
          return job ? job.data : null
        },
        async clear2FAJobs() {
          await cleanJobs()
          return null
        }
      })
      return config;
    },
  },
});
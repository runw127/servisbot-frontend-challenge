/**
 * @swagger
 * /api/v1/bot/list:
 *   get:
 *     summary: Get the list of bots
 *     responses:
 *       200:
 *         description: A list of bots
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: UUID
 *                     example: "9a32dbbf-3595-4956-98b9-24cda348e98a"
 *                   name:
 *                     type: string
 *                     example: "Bot One"
 *                   description:
 *                     type: string
 *                     exmaple: "description for test"
 *                   status:
 *                     type: string
 *                     exmaple: "DISABLED"
 *                   created:
 *                     type: BIGINT
 *                     example: "1732487754624"
 */

/**
 * @swagger
 * /api/v1/bot/list/{id}/workers:
 *   get:
 *     summary: Get the list of workers for a bot
 *     description: Retrieve the list of workers associated with a specific bot by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the bot to retrieve workers for.
 *         schema:
 *           type: string
 *           example: "1791dd24-c5a3-4662-b003-1b4524e4d189"
 *     responses:
 *       200:
 *         description: A list of workers associated with the specified bot.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "2f00b6e6-61a5-4e99-b6e9-60afa25da1cf"
 *                   name:
 *                     type: string
 *                     example: "Worker One"
 *                   description:
 *                     type: string
 *                     example: "This is Worker One"
 *                   botId:
 *                     type: string
 *                     example: "1791dd24-c5a3-4662-b003-1b4524e4d189"
 *                   created:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-24T15:36:22.810Z"
 */

/**
 * @swagger
 * /api/v1/bot/list/{id}/logs:
 *   get:
 *     summary: Get the list of logs for a bot
 *     description: Retrieve all logs associated with a specific bot by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the bot to retrieve logs for.
 *         schema:
 *           type: string
 *           example: "1791dd24-c5a3-4662-b003-1b4524e4d189"
 *     responses:
 *       200:
 *         description: A list of logs for the specified bot.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "log-1"
 *                   created:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-24T15:36:22.810Z"
 *                   message:
 *                     type: string
 *                     example: "This is a log message for the bot"
 *                   botId:
 *                     type: string
 *                     example: "1791dd24-c5a3-4662-b003-1b4524e4d189"
 */

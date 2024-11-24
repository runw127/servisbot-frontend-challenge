/**
 * @swagger
 * /api/v1/worker/{id}/logs:
 *   get:
 *     summary: Get the list of logs for a worker associated with a bot
 *     description: Retrieve all logs for a worker associated with a specific bot
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the worker to retrieve logs for.
 *         schema:
 *           type: string
 *           example: "2f00b6e6-61a5-4e99-b6e9-60afa25da1cf"
 *     responses:
 *       200:
 *         description: A list of logs for the specified worker.
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
 *                     example: "Log message for the worker"
 *                   workerId:
 *                     type: string
 *                     example: "2f00b6e6-61a5-4e99-b6e9-60afa25da1cf"
 *                   botId:
 *                     type: string
 *                     example: "1791dd24-c5a3-4662-b003-1b4524e4d189"
 */

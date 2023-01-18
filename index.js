const TelegramBot = require("node-telegram-bot-api");
const token = process.env["TOKEN"];

const da = ["CAACAgIAAxkBAAMNY8gy3jjFh6PmNjUu2d3fA8uheHYAAq0mAAJdxUBKJs9QCO7d2fQtBA", "CAACAgIAAxkBAAMPY8gy7EuBVccq4PbXhi8_-b8fnL0AAscsAAJw5EBKzE9pjgQp_k8tBA", "CAACAgIAAxkBAAMRY8gy_YGHGKobVsu--OktMsPlvHMAAgUqAAK_REBKWuEk3R3otNItBA"];
const net = ["CAACAgIAAxkBAAMHY8gyqz44nTahCuF0FUe9zDqCrd0AAuIoAAJepEBKr68mqsK-4rQtBA", "CAACAgIAAxkBAAMJY8gyvXrcE6G-WKLig8Ee1AVkFQ4AApEpAAL4H0FKu7oR1Msbr5UtBA", "CAACAgIAAxkBAAMLY8gyzwO25y_bv-_oY6qRgMWfr6sAAt8kAAIFXEBKJS96W9FrQBgtBA"];
const gde = ["CAACAgIAAxkBAAMCY8gx9rFdl5nV6WcKJHh1kaX1In0AAhAqAAN8QEoE3MtEKVicMS0E"];
const ladno = ["CAACAgIAAxkBAAMTY8gzDmeO7UVtQKQeqjETqyp8uLoAAm8oAAJi-0BK_mZzNap-z5ItBA", "CAACAgIAAxkBAAMVY8gzHHHBRWZRN8MhkhBbsPiALSAAAsskAAJZSUlKmAFrZsKaN84tBA"];

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

const bot = new TelegramBot(token, { "polling": true });
bot.on("message", msg => {
	//bot.sendSticker(msg.chat.id, fileid);
	if(!msg.text) return;
	const body = msg.text.match(/[а-я]/gi).join("").toLowerCase();
	if(body.endsWith("да"))    bot.sendSticker(msg.chat.id, rand(da),    { "reply_to_message_id": msg.message_id });
	if(body.endsWith("нет"))   bot.sendSticker(msg.chat.id, rand(net),   { "reply_to_message_id": msg.message_id });
	if(body.endsWith("где"))   bot.sendSticker(msg.chat.id, rand(gde),   { "reply_to_message_id": msg.message_id });
	if(body.endsWith("ладно")) bot.sendSticker(msg.chat.id, rand(ladno), { "reply_to_message_id": msg.message_id });
});

require("http").createServer((req, res) => {
	res.writeHead(200);
	res.end("ok");
}).listen(7070);

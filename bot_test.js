const botkit = require('botkit');  // 봇 모듈 사용
const Slack = require('slack-node');  // 슬랙 모듈 사용

const controller = botkit.slackbot({
	debug: false,
	log: true
});

const botScope = [
	'direct_message',
	'direct_mention',
	'mention'
];

controller.hears(['업무보고'], botScope, (bot, message) => {
	bot.reply(message, '업무보고 링크주소');
});

controller.hears(['가이드', 'guide', '튜토리얼'], botScope, (bot, message) => {
	bot.reply(message, '가이드 링크주소');
});

controller.hears(['api', '명세서'], botScope, (bot, message) => {
	bot.reply(message, 'api명세서 링크주소');
});

controller.hears(['일정', '일정관리'], botScope, (bot, message) => {
	bot.reply(message, '일정관리 링크주소');
});

controller.hears(['비품', '비품정리'], botScope, (bot, message) => {
	bot.reply(message, '비품관리 링크주소');
});

controller.spawn({
	token: '--bot TOKEN--'
}).startRTM();
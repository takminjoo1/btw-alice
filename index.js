const botkit = require('botkit');  // 봇 모듈 사용
const Slack = require('slack-node');  // 슬랙 모듈 사용
const schedule = require('node-schedule');  // 스케줄러 모듈 사용

const controller = botkit.slackbot({
	debug: false,
	log: true
});

const botScope = [
	'direct_message',
	'direct_mention',
	'mention'
];

const webhookUri = "--webhook--";
 
slack = new Slack();
slack.setWebhook(webhookUri);
 

// 처음 가입시
//controller.on('channel_join', function(bot, message) {
//  bot.reply(message,'Welcome to the channel!');
//});


// 매일 아침 9시가 되면 업무 보고 알림을 보낸다. 
schedule.scheduleJob('00 09 * * *', function(){
	 slack.webhook({
      channel: "#minju-bot", // 404발생
	  text:'업무보고 보내셨나요?',
	  attachments:[
		{
		  fallback:"구글드라이브: <https://docs.google.com|업무보고>",
		  pretext:"구글드라이브: <https://docs.google.com|업무보고>",
	      color:"#00FFFF",
	      fields:[
	        {
	          title:"[알림]",
	          value:"해당링크로 접속하여 작성해 주세요.",
	          short:false
	        }
	      ]
	    }
	  ]
	}, function(err, response){
	  console.log(response);
	});
});
const Slack = require('slack-node');  // 슬랙 모듈 사용
const schedule = require('node-schedule');  // 스케줄러 모듈 사용

const webhookUri = "--webhook--";  // Webhook URL

const slack = new Slack();
slack.setWebhook(webhookUri);


schedule.scheduleJob('53 22 * * *', function(){
	 slack.webhook({
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
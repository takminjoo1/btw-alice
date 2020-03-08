const schedule = require('node-schedule');  // 스케줄러 모듈 사용

// rule-style 사용
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = new schedule.Range(3,4);
rule.hour = 22;
rule.minute = 48;
schedule.scheduleJob(rule, function(){
	console.log('rule 방식');
});

// cron-style 사용
schedule.scheduleJob('47 22 * * *', function(){
	console.log('cron-style 방식');
});
var Slack = require('slack-node');
 
webhookUri = "--webhook--";
 
slack = new Slack();
slack.setWebhook(webhookUri);
 
//slack.webhook({
//  channel: "#minju99",
//  username: "minju_alice",
//  text: "첫 테스트 성공"
//}, function(err, response) {
//  console.log(response);
//});


slack.webhook({
  channel: "#general",
  username: "webhookbot",
  icon_emoji: ":ghost:",
  text: "test message, test message"
}, function(err, response) {
  console.log(response);
});
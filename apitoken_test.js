var Slack = require('slack-node');
apiToken = "--apiToken--";
 
slack = new Slack(apiToken);
 
slack.api("users.list", function(err, response) {
  console.log(response);
});
 
slack.api('chat.postMessage', {
  text:'hello from nodejs',
  channel:'#general'
}, function(err, response){
  console.log(response);
});
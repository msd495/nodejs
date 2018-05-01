

var SlackBot = require('slackbots');


// create a bot
var bot = new SlackBot({
    token: 'xoxb-299281924614-RV9M2uFkxVAw6Ikw3seCEIWv',
    name: 'My Bot'
});


bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    //bot.postMessageToChannel('class-notifications', 'hey guys how are you..I am a slackbot!', params);
    

    bot.postMessageToChannel('class-notifications', 'hey guys how are you..I am a slackbot!').then(function(data) {
    	console.log("I have posted a message");
	})
    // define existing username instead of 'user_name'
    bot.postMessageToUser('Ayush', 'meow!', params); 
    
    // If you add a 'slackbot' property, 
    // you will post to another user's slackbot channel instead of a direct message
    //bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' }); 
    
    // define private group instead of 'private_group', where bot exist
    //bot.postMessageToGroup('private_group', 'meow!', params); 
});


bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log("data is"+JSON.stringify(data));
});

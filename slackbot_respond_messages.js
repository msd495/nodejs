var SlackBot = require('slackbots');
var SlackClient=require('@slack/client');
//import * as SlackClient from '@slack/client';

slackWebClient = new SlackClient.WebClient("xoxb-299281924614-RV9M2uFkxVAw6Ikw3seCEIWv");
slackBot = new SlackClient.RtmClient("xoxb-299281924614-RV9M2uFkxVAw6Ikw3seCEIWv")
slackBot.on(SlackClient.RTM_EVENTS.MESSAGE, message => {
    slackWebClient.chat.postMessage("class-notifications", 'Hello', { attachments: myAttachments, as_user: true });
});
slackBot.start();
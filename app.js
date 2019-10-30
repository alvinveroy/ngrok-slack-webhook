require('dotenv').config();
const ngrok = require('ngrok');
const Slack = require('node-slack');

const slack = new Slack(process.env.SLACK_WEBHOOK);

const ssh = async _ => {
    const url = await ngrok.connect({
        proto : 'tcp',
        addr : 22,
        authtoken: process.env.AUTH
    });
    slack.send({
        text: url,
        channel: '#dildo',
        username: 'raspi',
        icon_emoji: ":ghost:"
    });
    return url
};

ssh();
require('dotenv').config();
const ngrok = require('ngrok');
const Slack = require('node-slack');

const slack = new Slack(process.env.SLACK_WEBHOOK);

const ssh = async _ => {
    const url = await ngrok.connect({
        proto : 'tcp',
        addr : 22,
        authtoken: process.env.AUTH,
    });    
    return url;
};

ssh()
.then(data => { 
        slack.send({
            text: data,
            channel: '#dildo',
            username: 'raspi',
            icon_emoji: ":ghost:"
        });
        console.log('Tunnel Address: ' + data);
    })
.catch(err => console.log(err));
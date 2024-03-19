import express from 'express';
// const AWS = require('aws-sdk');
import AWS from 'aws-sdk';

// Initialize Express app
// const app = express();
// const port = 8081;

// Use JSON body parser middleware
// app.use(bodyParser.json());

// Configure AWS credentials
// AWS.config.update({
//   accessKeyId: 'AKIAYS2NVLJLPZ3HEYGW',
//   secretAccessKey: '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',
//   region: 'us-east-1'
// });
const AWS_ACCESS_KEY_ID = 'AKIAYS2NVLJLPZ3HEYGW';
const AWS_SECRET_ACCESS_KEY = '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';
const AWS_REGION = 'us-east-1';
const lexruntime = new AWS.LexRuntime({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION
  });

// Initialize Amazon Lex client
const lexClient = new AWS.LexRuntime();

const Chatbot=(req,res,next)=>{
    const user_input = req.body.user_input;
    console.log(user_input)
    const params = {
        botAlias: 'bot',
        botName: 'clgapp',
        inputText: user_input,
        userId: 'DRFNELFPDL'
      };
    // Call Amazon Lex
    lexruntime.postText(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          const bot_response = data.message;
          res.json({ response: bot_response });
        }
    });
}

export default Chatbot;
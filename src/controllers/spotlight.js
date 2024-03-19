import AWS from 'aws-sdk'
// const { promisify } = require('util');
import {promisify} from 'util'
// const request = require('request');
import request from 'request'
import { env } from 'process';

// Configure AWS SDK
AWS.config.update({
    region: 'us-east-1',
    credentials: {
        // accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        // secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
        accessKeyId:'AKIA24VFU53WOVUPU4ED',
        secretAccessKey:'YGXYQEKpUmTniv6miyolTx2eTzhiQES9t2s36Jnm',
        // sessionToken: 'your-session-token' // if applicable
    }
});
const rekognition = new AWS.Rekognition();
rekognition.listCollections({}, (err, data) => {
    if (err) console.error('Error listing collections:', err);
    else console.log('Collections:', data.CollectionIds);
});
  
// const rekognition = new AWS.Rekognition();
const dynamodb = new AWS.DynamoDB();
const Spotlight=async(req,res,next)=>{
    console.log(process.env.AWS_SECRET_ACCESS_KEY)
    try {
        const imageDataUrl = req.body.imageDataUrl;
        //console.log(imageDataUrl)
        // if (!imageDataUrl) {
        //     return res.status(400).send("imageDataUrl is undefined");
        // }
        // Extract the base64-encoded image data
        const [, encodedData] = imageDataUrl.split(',', 1);
        const imageBuffer = Buffer.from(imageDataUrl, 'base64');
    
        // Image recognition with AWS Rekognition
        const params = {
          CollectionId: 'thubemployees',
          Image: {
            Bytes: imageBuffer,
          },
        };
    
        const response = await rekognition.searchFacesByImage(params).promise();
    
        let found = false;
    
        for (const match of response.FaceMatches) {
          const face = await dynamodb.getItem({
            TableName: 'facerecognition',
            Key: { RekognitionId: { S: match.Face.FaceId } },
          }).promise();
    
          if (face.Item) {
            const email = face.Item.FullName.S;
    
            // Make a request to your API endpoint
            const api_url = 'https://dev.technicalhub.io/codemind/api/thub_app/anniversary_api.php';
            const apiParams = {
              Action: 'Details',
              Email: email,
            };
    
            try {
              const response = await promisify(request.post)({
                url: api_url,
                json: apiParams,
                rejectUnauthorized: false,
              });
    
              if (response.statusCode === 200) {
                console.log('200')
                return res.json(response.body);
              } else {
                console.log('API request failed with status code')
                return res.status(500).json({ error: `API request failed with status code ${response.statusCode}` });
              }
            } catch (error) {
                console.log(`An error occurred: ${error.message}`)
              return res.status(500).json({ error: `An error occurred: ${error.message}` });
            }
    
            found = true;
          }
        }
    
        if (!found) {
          return res.json({});
        }
    
        return res.send('Image captured successfully');
      } catch (error) {
        return res.status(500).send(`Error capturing and saving image: ${error.message}`);
      }
}

export default Spotlight;

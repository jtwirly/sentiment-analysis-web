import axios from 'axios';
import API_KEY from './config';

export const analyzeSentiment = async (comment) => {
  const response = await axios.post(
    `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${API_KEY}`,
    {
      document: {
        content: comment,
        type: 'PLAIN_TEXT',
      },
      encodingType: 'UTF8',
    }
  );
  const sentimentScore = response.data.documentSentiment.score.toFixed(2);
  return sentimentScore;
};

axios.post('API_KEY', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

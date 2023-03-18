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

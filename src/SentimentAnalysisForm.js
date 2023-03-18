import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SentimentAnalysisForm = () => {
  const [comment, setComment] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
          document: {
            content: comment,
            type: 'PLAIN_TEXT',
          },
          encodingType: 'UTF8',
        }
      );
      setSentiment(response.data.documentSentiment.score.toFixed(2));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="comment">
        <Form.Label>Enter a message to analyze:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter message"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isLoading ? 'Analyzing...' : 'Analyze'}
      </Button>
      {sentiment !== null && (
        <p className="mt-3">
          Sentiment score: <strong>{sentiment}</strong>
        </p>
      )}
    </Form>
  );
};

export default SentimentAnalysisForm;

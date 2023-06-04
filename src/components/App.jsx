import { useState } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Notification } from 'components/notification/Notification';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = name => {
    console.log(name);
    switch (name) {
      case 'good':
        setGood(prevG => prevG + 1);
        break;

      case 'neutral':
        setNeutral(prevN => prevN + 1);
        break;

      case 'bad':
        setBad(prevB => prevB + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let pers = Math.round((good / countTotalFeedback()) * 100);
    return pers ? pers : 0;
  };

  const total = countTotalFeedback();
  const pers = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={countFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            countTotalFeedback={total}
            PositiveFeedback={pers}
            options={{ good, neutral, bad }}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

import { useState } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Notification } from 'components/notification/Notification';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsBtn = [
    { name: 'good', title: { en: 'Good', ua: 'Добре' } },
    { name: 'neutral', title: { en: 'Neutral', ua: 'Задовільно' } },
    { name: 'bad', title: { en: 'Bad', ua: 'Погано' } },
  ];

  const countFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    let total = 0;
    total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let pers = Math.round((good / countTotalFeedback()) * 100);
    let res = pers ? pers : 0;
    return res;
  };

  const total = countTotalFeedback();
  const pers = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={countFeedback} options={optionsBtn} />
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

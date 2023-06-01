import { useState } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Notification } from 'components/notification/Notification';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const countFeedback = name => {
    setState({
      ...state,
      [name]: state[name] + 1,
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let pers = Math.round((state.good / countTotalFeedback()) * 100);
    return pers ? pers : 0;
  };

  const total = countTotalFeedback();
  const pers = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={countFeedback} options={state} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            countTotalFeedback={total}
            PositiveFeedback={pers}
            options={state}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

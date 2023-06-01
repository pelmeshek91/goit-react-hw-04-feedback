import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={s.btnWrap}>
      {options.map(({ name, title }) => {
        return (
          <button
            onClick={() => onLeaveFeedback(name)}
            key={name}
            className={s.btn}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

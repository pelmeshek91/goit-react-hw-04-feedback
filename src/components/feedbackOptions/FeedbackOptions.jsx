import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={s.btnWrap}>
      {Object.keys(options).map(name => {
        return (
          <button
            onClick={() => onLeaveFeedback(name)}
            key={name}
            className={s.btn}
          >
            {name.replace(name[0], name[0].toUpperCase())}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

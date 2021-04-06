import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import '../../App.css';

class Profile extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedbac = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedbac()) * 100).toFixed(1);

  leaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  ds = [];

  render() {
    const total = this.countTotalFeedbac();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="profile">
        <Section title="Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Feedback">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            'Статистики еще нет'
          )}
        </Section>
      </div>
    );
  }
}

export default Profile;

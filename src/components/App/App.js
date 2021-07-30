import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";
import Notification from "../Notification";
import { Wrapper } from "./App.styles";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (e) => {
    let name = e.target.name;
    this.setState((prevState) => {
      return (prevState[name] = prevState[name] + 1);
    });
  };

  render() {
    const [good, neutral, bad] = Object.keys(this.state);
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedback = Math.floor((this.state.good / total) * 100);
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={good} onLeaveFeedback={this.addFeedback} />
          <FeedbackOptions
            options={neutral}
            onLeaveFeedback={this.addFeedback}
          />
          <FeedbackOptions options={bad} onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : null}
        </Section>
        {total ? null : <Notification message="No feedback given" />}
      </Wrapper>
    );
  }
}

export default App;

import React, { useState } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";
import Notification from "../Notification";
import { Wrapper } from "./App.styles";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positiveFeedback = Math.floor((good / total) * 100);
  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={"good"}
          onLeaveFeedback={() => {
            setGood((prev) => prev + 1);
          }}
        />
        <FeedbackOptions
          options={"neutral"}
          onLeaveFeedback={() => setNeutral((prev) => prev + 1)}
        />
        <FeedbackOptions
          options={"bad"}
          onLeaveFeedback={() => setBad((prev) => prev + 1)}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : null}
      </Section>
      {total ? null : <Notification message="No feedback given" />}
    </Wrapper>
  );
}

export default App;

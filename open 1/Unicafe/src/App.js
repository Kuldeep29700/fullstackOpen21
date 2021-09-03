import React, { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.clickHandle}>{props.text}</button>
    </>
  );
};

const Heading = (props) => {
  return (
    <>
      <h1>{props.line}</h1>
    </>
  );
};

const Statistics = (props) => {
  if (props.good >= 1 || props.poor >= 1 || props.neutral >= 1) {
    return (
      <>
        <h1>Statistics</h1>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="Poor" value={props.poor} />
        <StatisticsLine
          text="all"
          value={props.poor + props.neutral + props.good}
        />
        <StatisticsLine
          text="Positive"
          value={
            (
              (props.good / (props.poor + props.neutral + props.good)) *
              100
            ).toFixed(2) + "%"
          }
        />
        <StatisticsLine
          text="Average"
          value={(
            (props.good - props.poor) /
            (props.poor + props.neutral + props.good)
          ).toFixed(2)}
        />
      </>
    );
  }
  return (
    <>
      <h3>{props.textmid}</h3>
    </>
  );
};
const StatisticsLine = (props) => {
  return (
    // <table>
    //   <tbody>
    //  <tr>
    //   <th>{props.text}</th>
    //    <td>{props.value}</td>
    // </tr>
    //   </tbody>
    // </table>
    ///dont showing proper margin
    <tr>
      <td>{props.text}</td>
      <th>{props.value}</th>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [poor, setPoor] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const clickHandlepoor = () => {
    setPoor(poor + 1);
  };

  const clickHandlegood = () => {
    setGood(good + 1);
  };

  const clickHandleneutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <>
      <Heading line="Give Feedback" />

      <Button clickHandle={clickHandlegood} text="Good" />

      <Button clickHandle={clickHandleneutral} text="Neutral" />

      <Button clickHandle={clickHandlepoor} text="Poor" />

      <br />
      <br />
      <Statistics
        good={good}
        poor={poor}
        neutral={neutral}
        textmid="No feedback given!! Please click above options to give feedback"
      />
    </>
  );
};
export default App;

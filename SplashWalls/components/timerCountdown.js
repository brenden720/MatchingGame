import TimerCountdown from 'react-native-timer-countdown';

render() {
  return (
    <TimerCountdown
      initialSecondsRemaining={1000 * 60}
      onTick={secondsRemaining => console.log('tick', secondsRemaining)}
      onTimeElapsed={() => console.log('complete')}
      allowFontScaling={true}
      style={{ fontSize: 20 }}
    />
  )
}

export default TimerCountdown;

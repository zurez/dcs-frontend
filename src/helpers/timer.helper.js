function getTimeInMinuteSecondsOld(timeRemaining, timeOriginal, speed = 1) {
  const baseSecond = 60000;
  const baseMinute = baseSecond * 60;
  let shouldBlink = false;
  let showTextAbove = false;
  const minutes = Math.floor(
    (timeRemaining % baseMinute) / (1000 * 60 * speed)
  );
  const seconds = Math.floor((timeRemaining % baseSecond) / (1000 * speed));

  return { minutes, seconds };
}

function getTimeInMinuteSeconds(timeRemaining) {}

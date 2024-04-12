function makeDate(birthday, timeZone) {
  return new Date(new Date(birthday).toLocaleString("en-US", { timeZone }));
}

export function isBirthday({ birthday, timeZone, currentTime }) {
  const now = makeDate(currentTime, timeZone);

  const [birthdayMonth, birthdayDay] = birthday.split("-").map(Number);

  const currentDay = now.getDate();
  const currentMonth = now.getMonth() + 1;
  return currentDay === birthdayDay && currentMonth === birthdayMonth;
}

// outputs
// is it their birthday in their timezone

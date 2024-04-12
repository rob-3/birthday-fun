import assert from "node:assert";
import { isBirthday } from "./birthday.mjs";

// birthday: "MM-DD"
// last active: Date()
// last wish: number
// timezone: string "America/New_York"

assert(
  isBirthday({
    birthday: "04-12",
    timeZone: "America/New_York",
    currentTime: "2024-04-12T01:00-04:00",
  }),
);
assert(
  isBirthday({
    birthday: "04-12",
    timeZone: "America/Los_Angeles",
    currentTime: "2024-04-12T01:00-04:00",
  }) === false,
);
assert(
  isBirthday({
    birthday: "04-12",
    timeZone: "America/New_York",
    currentTime: "2024-04-11T23:00-04:00",
  }) === false,
);
assert(
  isBirthday({
    birthday: "04-12",
    timeZone: "America/Los_Angeles",
    currentTime: "2024-04-11T23:00-04:00",
  }) === false,
);
assert(
  isBirthday({
    birthday: "04-12",
    timeZone: "America/New_York",
    currentTime: "2024-04-12T03:00-04:00",
  }),
);
assert(
  isBirthday({
    birthday: "04-12",
    timeZone: "America/Los_Angeles",
    currentTime: "2024-04-12T03:00-04:00",
  }),
);
assert(
  isBirthday({
    birthday: "04-12",
    timeZone: "America/New_York",
    currentTime: "2024-04-11T23:00-07:00",
  }),
);
assert(
  isBirthday({
    birthday: "04-12",
    timeZone: "America/Los_Angeles",
    currentTime: "2024-04-11T23:00-07:00",
  }) === false,
);

import dayjs from "dayjs";
import USERS from "../../../common/data/userDummyData";

const now = new Date();

export default [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: dayjs().add(1, "day").toDate(),
    end: dayjs().add(1, "day").toDate(),
    user: USERS.ELLA,
  },
  {
    id: 1,
    title: "Long Event",
    start: dayjs().add(3, "day").toDate(),
    end: dayjs().add(5, "day").toDate(),
    user: USERS.JANE,
  },
  {
    id: 2,
    title: "DTS STARTS",
    start: dayjs().add(4, "day").startOf("week").toDate(),
    end: dayjs().add(4, "day").endOf("week").toDate(),
    color: "danger",
    user: USERS.JOHN,
  },
  {
    id: 3,
    title: "DTS ENDS",
    start: dayjs().startOf("week").add(4, "day").toDate(),
    end: dayjs().endOf("week").add(11, "day").toDate(),
    color: "success",
    user: USERS.CHLOE,
  },
  {
    id: 4,
    title: "Some Event",
    start: dayjs().add(15, "day").toDate(),
    end: dayjs().add(16, "day").toDate(),
    color: "danger",
    user: USERS.GRACE,
  },
  {
    id: 5,
    title: "Conference",
    start: dayjs().add(18, "day").toDate(),
    end: dayjs().add(20, "day").toDate(),
    desc: "Big conference for important people",
    color: "warning",
    users: [USERS.GRACE, USERS.JOHN, USERS.ELLA],
    icon: "VolumeUp",
  },
  {
    id: 6,
    title: "Meeting",
    start: dayjs().add(22, "day").add(10, "hour").add(30, "minute").toDate(),
    end: dayjs().add(22, "day").add(12, "hour").add(30, "minute").toDate(),
    desc: "Pre-meeting meeting, to prepare for the meeting",
    color: "success",
    users: [USERS.SAM, USERS.CHLOE, USERS.ELLA],
  },
  {
    id: 7,
    title: "Lunch",
    start: dayjs().add(1, "day").add(12, "hour").add(30, "minute").toDate(),
    end: dayjs().add(1, "day").add(13, "hour").add(30, "minute").toDate(),
    desc: "Power lunch",
    color: "dark",
    icon: "DinnerDining",
  },
  {
    id: 8,
    title: "Meeting",
    start: dayjs().add(3, "day").add(14, "hour").toDate(),
    end: dayjs().add(3, "day").add(15, "hour").add(30, "minute").toDate(),
    color: "primary",
    user: USERS.RYAN,
  },
  {
    id: 9,
    title: "Happy Hour",
    start: dayjs().add(4, "day").add(17, "hour").toDate(),
    end: dayjs().add(4, "day").add(17, "hour").add(30, "minute").toDate(),
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: dayjs().add(4, "day").add(20, "hour").toDate(),
    end: dayjs().add(4, "day").add(21, "hour").toDate(),
  },
  {
    id: 11,
    title: "Planning Meeting with Paige",
    start: dayjs().add(7, "day").add(8, "hour").toDate(),
    end: dayjs().add(7, "day").add(10, "hour").add(30, "minute").toDate(),
    user: USERS.RYAN,
    color: "primary",
  },
  {
    id: 11.1,
    title: "Inconvenient Conference Call",
    start: dayjs().add(7, "day").add(9, "hour").add(30, "minute").toDate(),
    end: dayjs().add(7, "day").add(12, "hour").toDate(),
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: dayjs().add(7, "day").add(11, "hour").add(30, "minute").toDate(),
    end: dayjs().add(7, "day").add(14, "hour").toDate(),
  },
  {
    id: 11.3,
    title: "Quote Follow-up - Tea by Tina",
    start: dayjs().add(7, "day").add(15, "hour").add(30, "minute").toDate(),
    end: dayjs().add(7, "day").add(16, "hour").toDate(),
  },
  {
    id: 12,
    title: "Late Night Event",
    start: dayjs()
      .startOf("day")
      .add(30, "day")
      .add(23, "hour")
      .add(30, "minute")
      .toDate(),
    end: dayjs().startOf("day").add(31, "day").add(2, "hour").toDate(),
    color: "warning",
    user: USERS.GRACE,
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: dayjs()
      .startOf("day")
      .add(33, "day")
      .add(20, "hour")
      .add(30, "minute")
      .toDate(),
    end: dayjs().startOf("day").add(33, "day").add(22, "hour").toDate(),
    color: "danger",
    user: USERS.ELLA,
    icon: "Nightlight",
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: dayjs()
      .startOf("day")
      .add(36, "day")
      .add(19, "hour")
      .add(30, "minute")
      .toDate(),
    end: dayjs().startOf("day").add(38, "day").add(2, "hour").toDate(),
    icon: "Groups",
  },
  {
    id: 14,
    title: "Today",
    start: dayjs().startOf("hour").add(-2, "hour").toDate(),
    end: dayjs().startOf("hour").add(2, "hour").toDate(),
    icon: "HourglassTop",
    color: "primary",
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    end: now,
  },
  {
    id: 16,
    title: "Video Record",
    start: dayjs().endOf("month").add(-1, "day").toDate(),
    end: dayjs().endOf("month").add(1, "day").toDate(),
    icon: "Videocam",
  },
  {
    id: 17,
    title: "Dutch Song Producing",
    start: dayjs()
      .endOf("month")
      .add(12, "day")
      .startOf("day")
      .add(16, "hour")
      .toDate(),
    end: dayjs()
      .endOf("month")
      .add(12, "day")
      .startOf("day")
      .add(20, "hour")
      .toDate(),
    icon: "Mic",
    color: "success",
    user: USERS.SAM,
  },
  {
    id: 18,
    title: "Itaewon Halloween Meeting",
    start: dayjs()
      .endOf("month")
      .add(13, "day")
      .startOf("day")
      .add(16, "hour")
      .toDate(),
    end: dayjs()
      .endOf("month")
      .add(13, "day")
      .startOf("day")
      .add(20, "hour")
      .toDate(),
    icon: "SentimentVerySatisfied",
    color: "danger",
  },
  {
    id: 19,
    title: "Online Coding Test",
    start: dayjs()
      .endOf("month")
      .add(14, "day")
      .startOf("day")
      .add(16, "hour")
      .toDate(),
    end: dayjs()
      .endOf("month")
      .add(14, "day")
      .startOf("day")
      .add(20, "hour")
      .toDate(),
    icon: "Code",
    color: "warning",
  },
  {
    id: 20,
    title: "An overlapped Event",
    start: dayjs()
      .endOf("month")
      .add(15, "day")
      .startOf("day")
      .add(16, "hour")
      .toDate(),
    end: dayjs()
      .endOf("month")
      .add(15, "day")
      .startOf("day")
      .add(20, "hour")
      .toDate(),
  },
  {
    id: 21,
    title: "Phone Interview",
    start: dayjs()
      .endOf("month")
      .add(23, "day")
      .startOf("day")
      .add(16, "hour")
      .toDate(),
    end: dayjs()
      .endOf("month")
      .add(23, "day")
      .startOf("day")
      .add(20, "hour")
      .toDate(),
  },
  {
    id: 22,
    title: "Cooking Class",
    start: dayjs()
      .endOf("month")
      .add(23, "day")
      .startOf("day")
      .add(16, "hour")
      .toDate(),
    end: dayjs()
      .endOf("month")
      .add(23, "day")
      .startOf("day")
      .add(20, "hour")
      .toDate(),
    icon: "OutdoorGrill",
    color: "success",
  },
  {
    id: 23,
    title: "Go to the gym",
    start: dayjs()
      .endOf("month")
      .add(23, "day")
      .startOf("day")
      .add(16, "hour")
      .toDate(),
    end: dayjs()
      .endOf("month")
      .add(23, "day")
      .startOf("day")
      .add(20, "hour")
      .toDate(),
  },
];

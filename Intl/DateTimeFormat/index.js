const date = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "UTC",
  timeZoneName: "",
};

console.log(new Intl.DateTimeFormat("kr", options).format(date));

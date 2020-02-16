document.addEventListener("DOMContentLoaded", function() {
  const rxend = new Date("2020-03-10T03:41:00").getTime();
  let rightnow = new Date().getTime();

  console.log(rxend);
  console.log(rightnow);

  let diffTime = rxend - rightnow;
  let duration = moment.duration(diffTime, "milliseconds");
  let interval = 1000;

  setInterval(function() {
    duration = moment.duration(duration - interval, "milliseconds");

    $(".days").text(duration.days());
    $(".hours").text(duration.hours());
    $(".minutes").text(duration.minutes());
    $(".seconds").text(duration.seconds());
  }, interval);
});

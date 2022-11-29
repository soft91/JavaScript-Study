const number = 123456.789;

console.log(
  new Intl.NumberFormat("kr", {
    style: "currency",
    currency: "KRW",
  }).format(number)
);

console.log(
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(number)
);

console.log(
  new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(number)
);

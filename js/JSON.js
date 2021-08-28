const shop = {
  name: "ALIA Store",
  address: "ranbir road",
  revinue: 14000,
  products: ["pepsi", "phone", "laptop"],
};

//obj ke string e convert
const shopStringify = JSON.stringify(shop.name);
console.log(shopStringify);

// onvert kora string ke punoray obj e convert
const converted = JSON.parse(shopStringify);
console.log(converted);

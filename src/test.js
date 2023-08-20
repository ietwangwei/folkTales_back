var list = [
  {
    name: "vi",
    age: 12,
    list: [
      {
        name: "vi",
        age: 12,
      },
    ],
  },
];

function adpter(list, dist) {
  if (typeof list === "object") {
    if (Array.isArray(list)) {
      for (let i of list) {
        dist.push(adpter(i, {}));
      }
    } else {
      for (let i in list) {
        dist[i] = list[i];
      }
    }
  }
  return dist;
}

console.log(adpter(list, []));

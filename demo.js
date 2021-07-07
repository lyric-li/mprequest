const MpRequest = require("./src/index.js");
const { CancelToken } = require("./src/index.js");

const mreq = new MpRequest();

let cancel;
mreq.post("https://member-dev.manniuhealth.com/app-gateway/maniujk-ucs-consumer/userInfo/getCenterUserInfo",
  { a: 1 }, {
    id: "1",
    cancelToken: new CancelToken((c) => {
      console.log("2333 c:", c);
      cancel = c;
    }),
  });

setTimeout(() => {
  console.log("444444 cancel:", cancel);
  cancel();
}, 1000);

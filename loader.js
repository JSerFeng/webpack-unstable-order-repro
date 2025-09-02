module.exports = function loader(code) {
  const request = this.request;
  const callback = this.async();

	// You can simulate an unstable async operation by switching the waiting module
	// uncomment this 👇 and run again
  // if (request.includes("entry1")) {
  if (request.includes("entry1")) {
    setTimeout(() => {
      callback(null, code);
    }, 1000);
  } else {
    callback(null, code);
  }
};

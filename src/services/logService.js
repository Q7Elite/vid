import Raven from "raven-js";

function init() {
  Raven.config("https://0532d37c9a947eba9daaaab1e6171a9@sentry.io/1249956", {
    release: "1-0-0",
    environment: "development-test",
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};

import * as Sentry from "@sentry/react";
import {
  Integrations
} from "@sentry/tracing";
import Raven from "raven-js";


export function init() {
  Sentry.init({
    dsn: "https://eb9a999ac4474653a4506c9f8f139922@o483364.ingest.sentry.io/5534945",
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0
  });
};

export function log(error) {
  Raven.captureException(error);
};
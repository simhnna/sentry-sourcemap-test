import { fail } from "./app/code";
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://5d74aa453a97267c9facae9e38c7ae64@o4506535120797696.ingest.sentry.io/4506535122239488",
  attachStacktrace: true,
});

fail();

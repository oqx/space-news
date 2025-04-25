import { test as testBase } from "vitest";
import { worker } from "./mocks/browser";

export const testWithMSW = testBase.extend({
  worker: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      await worker.listen();

      await use(worker);

      worker.close();
    },
    {
      auto: true,
    },
  ],
});

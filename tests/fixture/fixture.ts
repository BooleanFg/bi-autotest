import { test as base } from '@playwright/test';
import type { PlayWrightAiFixtureType } from '@midscene/web/playwright';
import { PlaywrightAiFixture } from '@midscene/web/playwright';

// export const test = base.extend<PlayWrightAiFixtureType>(PlaywrightAiFixture());

export const test = base.extend<PlayWrightAiFixtureType>(
  PlaywrightAiFixture({
    cache: { id: "dashboard_creat_example2.spec.ts(creat dashboard_折线图)" },
  }),
);
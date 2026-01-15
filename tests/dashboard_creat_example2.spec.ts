import { expect } from "@playwright/test";
import { test } from "./fixture/fixture";

test.beforeEach(async ({ page }) => {
  // 设置认证cookie
  await page.context().addCookies([
    {
      name: 'sso.jd.com',
      value: 'BJ.1524860172365E2B0FF407B101964896.7020260115095122',
      domain: '.jd.com',
      path: '/',
    }
  ]);

  await page.goto("https://jdp.jd.com/develop?system=bi-new");

});

test('creat dashboard_折线图', async ({ page, ai, aiQuery, aiAssert }) => {
  // 👀 添加图表
  await ai('点击左侧"添加图表"按钮');


  await ai('点击左侧"折线图"按钮');


  await ai('点击"跳过"按钮');


  await ai('点击右侧"省份"按钮');


  await ai('点击右侧"订单金额"按钮');


  await ai('点击右下角"查询"按钮');
  await page.waitForTimeout(7000);

  // 👀 用 AI 断言
  await aiAssert('页面新增了一个折线图1');
});
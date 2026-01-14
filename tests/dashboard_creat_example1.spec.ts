import { expect } from "@playwright/test";
import { test } from "./fixture/fixture";

test.beforeEach(async ({ page }) => {
  // 设置认证cookie
  await page.context().addCookies([
    {
      name: 'sso.jd.com',
      value: 'BJ.3AED868404655E265DFD0AD48A9A53B6.4420260112095007',
      domain: '.jd.com',
      path: '/',
    }
  ]);
  
  await page.goto("https://jdp.jd.com/develop?system=bi-new");

});

test('creat dashboard', async ({ page, ai, aiQuery, aiAssert }) => {
  // 👀 添加图表
  await ai('点击左侧"添加图表"按钮');
  await page.waitForTimeout(3000);

  await ai('点击左侧"明细表"按钮');
  await page.waitForTimeout(3000);

  await ai('点击左侧"明细表"按钮');
  await page.waitForTimeout(3000);

  await ai('点击"跳过"按钮');
  await page.waitForTimeout(3000);

  await ai('点击右侧"省份"按钮');
  await page.waitForTimeout(3000);

  await ai('点击右侧"订单金额"按钮');
  await page.waitForTimeout(3000);

  await ai('点击右下角"查询"按钮');
  await page.waitForTimeout(7000);

//   // 👀 找到列表里耳机相关的信息
//   const items = await aiQuery(
//     'string[], 搜索结果列表中包含"playwright"相关的标题'
//   );
//
//   console.log("search result", items);
//   console.log("search result number", items?.length);
//   // 断言大于 1 条搜索结果
//   expect(items?.length).toBeGreaterThan(1);

  // 👀 用 AI 断言
  await aiAssert('页面新增了一个包含省份和订单量的明细表1，并且有多条数据');
});
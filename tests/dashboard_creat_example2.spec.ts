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

  // 创建折线图断言
  await aiAssert('页面新增了一个折线图1');

  await ai('点击右上角"样式"按钮');

  await ai('打开“数据标签”开关和“图例”开关');

  // 配置样式断言
  await aiAssert('折线图1发生以下变化：1.折线上显示数据；2.折线图上方显示订单金额的图例');

  await ai('点击右上角“分析”按钮');

  await ai('“选择字段”下拉框中选择“订单金额（求和）”,点击应用');

  await ai('点击右上角“占比”按钮，点击应用');

//   await aiAssert('折线图1发生以下变化：1.折线图按照订单金额从左到右从高到低排序；2.折线图显示每个省份的订单金额占比;3.折线图上方显示订单金额_总占比的图例');

  await ai('点击右上角“占比”按钮，点击应用');

  await ai('点击右上角“参考线”按钮');

  await ai('“计算指标”下拉框中选择“订单金额（求和）”');

  await ai('在“固定值”右边的输入框中输入“1000000000”，点击应用');

  await aiAssert('折线图1发生以下变化：1.折线图按照订单金额从左到右从高到低排序；2.折线图显示每个省份的订单金额占比;3.折线图上方显示订单金额_总占比的图例；4.折线图上显示一条参考线');

  await ai('左上角点击像笔一样的图案，输入框中把“柏凌峰的页面”改成“折线图测试1”');

  await ai('右上角点击“保存”按钮');

  await aiAssert('没有报错');

});
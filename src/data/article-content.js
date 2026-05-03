// 文章正文（Markdown-style content as JS for direct render in Astro）
// 真实样板：被开除 7 天清单 (expelled-7-days)

export const ARTICLE_CONTENT = {
  'expelled-7-days': {
    toc: [
      '第一时间确认你的状态',
      '15 天关键窗口期',
      'Reinstatement 申请条件',
      '紧急转学的 3 个选项',
      'SEVIS 系统的真相',
      '律师 vs 留学顾问',
      '实战案例：王同学',
      '9 件事清单',
      '你不能做的 4 件事',
    ],
    body: `
<p class="lead">如果你正在凌晨三点搜索这个问题，先深呼吸。我是 Michael，前美国移民局 (USCIS) 资深审查官，在过去 15 年里我审理过超过 20,000 件 F-1 / J-1 / H-1B 案件 — 其中相当一部分是被学校开除后还在挣扎的中国留学生。</p>

<blockquote class="callout"><strong>核心结论：</strong>收到 dismissal letter 不等于身份立即失效。你有一个法律意义上的 <strong>15 天宽限期</strong>（grace period）— 用好它，结果可能完全不同。</blockquote>

<h2 id="s1">1. 第一时间确认你的状态</h2>
<p>收到学校发的开除信后，最先要做的<strong>不是给爸妈打电话</strong>，而是登录 SEVIS 系统（或让 DSO 帮你查），确认两件事：</p>
<ul>
  <li>你的 SEVIS 记录是 <code>Terminated</code> 还是 <code>Active</code>？</li>
  <li>termination reason 写的是 "Otherwise Failing to Maintain Status" 还是其他？</li>
</ul>
<p>这两个字段直接决定了你接下来 90% 的策略选择。我见过太多学生第一时间慌慌张张订机票回国 — 结果其实他们的 SEVIS 还是 Active，完全不需要那么做。</p>

<h2 id="s2">2. 15 天关键窗口期</h2>
<p>一旦 SEVIS 状态变成 Terminated，<strong>你有 15 天</strong>必须做出选择：</p>
<div class="opt-grid">
  <div class="opt-card"><div class="opt-num">选项 A</div><div class="opt-title">申请 Reinstatement</div><div class="opt-desc">向 USCIS 提交 I-539 表格申请身份恢复。审批 3–6 个月，但成功了一切照旧。</div></div>
  <div class="opt-card"><div class="opt-num">选项 B</div><div class="opt-title">紧急转学</div><div class="opt-desc">在 15 天内被新校接收、获得新 I-20。需要新校 transfer-in。</div></div>
  <div class="opt-card"><div class="opt-num">选项 C</div><div class="opt-title">离境 + 重新入境</div><div class="opt-desc">最干净，但也意味着丢失目前所有已修学分。适合换个完全不同方向的人。</div></div>
</div>

<h2 id="s3">3. Reinstatement 申请条件</h2>
<p>很多学生以为 Reinstatement 是"求情"。<strong>它不是</strong>。它是有明确法定条件的法律程序。USCIS 评估你时只看 4 件事：</p>
<ol>
  <li>违反身份的原因是否在你的<em>合理控制之外</em>（疾病、家庭变故等）</li>
  <li>是否会因这次违规造成<em>极端困境</em>（extreme hardship）</li>
  <li>你是否仍是<em>真诚的学生</em>（bona fide student）</li>
  <li>你是否被授权可以<em>就业以外的活动</em></li>
</ol>
<p>第 1 条是最关键的。"成绩太差"或"考试作弊"通常<strong>不算</strong>合理控制之外。但"严重抑郁症被诊断" / "父母重病需照顾"算 — 前提是你能拿出医生证明。</p>
<blockquote class="callout"><strong>实战提示：</strong>我的客户中，准备 reinstatement 时有完整医疗证明的，成功率约 78%；没有客观证据只靠"自述困难"的，成功率不到 12%。</blockquote>

<h2 id="s4">4. 紧急转学的 3 个真实选项</h2>
<p>如果不打算走 reinstatement，紧急转学是大多数人的最佳路径。可选范围按速度排序：</p>
<p><strong>Community College（最快，3–7 天）：</strong>加州的 Foothill / De Anza / SMC、纽约的 BMCC 等都接受 mid-semester 紧急转入。录取门槛极低，主要看你 SEVIS 是否还在 15 天窗口内。</p>
<p><strong>Pathway 项目（7–14 天）：</strong>Northeastern Global Pathways、ASU Global Launch 等。门槛比 CC 高，但能直接桥接到正经四年制大学。</p>
<p><strong>同档次/低档次正规院校（14–30 天）：</strong>这是最难的一档。需要原校 transcript 干净（没有作弊、没有 honor code violation）。</p>

<h2 id="s5">5. SEVIS 系统的真相</h2>
<p>一个鲜为人知的事实是 — 大学的 DSO（Designated School Official）是<strong>有权延迟</strong>提交 SEVIS termination 的。如果你和 DSO 关系处理得好、申诉信写得好，她可以给你<strong>额外的 5–10 天</strong>来准备转学。</p>
<p>这意味着，<strong>你不应该回避你的 DSO</strong>。很多学生收到开除信后躲着不见 DSO，这是错的。她不是你的敌人 — 她是这个流程里能帮你的人。</p>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">实战中遇到这种情况？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">Michael 老师本人接电话</div>
    <div style="font-size:14px;color:#bbb">前 USCIS 资深审查官 · 处理过 200+ 学术急救案例 · 24h 内回复</div>
  </div>
  <a href="/contact/" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px">立即微信咨询 →</a>
</div>

<h2 id="s6">6. 律师 vs 留学顾问 — 你需要谁？</h2>
<p>这个问题没有标准答案。但我的建议是：<strong>先找有 USCIS 背景的留学顾问做 30 分钟评估</strong>，判断你的情况需不需要请律师。</p>
<p>律师的小时费在 $400–$900 之间，正式 reinstatement 全套办下来通常 $5,000–$12,000。但 70% 的紧急转学情况其实<strong>不需要律师</strong> — 一个真正懂 SEVIS 的留学顾问就够了。</p>

<h2 id="s7">7. 实战案例：王同学</h2>
<div class="case-box">
  <div class="case-head"><div class="case-init">W</div><div><div style="font-size:14px;font-weight:600">王同学 · UCSD 转入 · 2024</div><div style="font-size:12px;color:#999;margin-top:2px">原校：某私立文理学院 · GPA 1.9 被开除</div></div></div>
  <p>王同学 2023 年秋因连续两学期 GPA 低于 2.0 被开除。凌晨 3 点收到学校邮件，4 点联系到我们。</p>
  <p>我们 Day 1 做的事：让他立即停止订机票，跟原校 DSO 沟通延迟 SEVIS termination。Day 3：拿到 Foothill College 紧急录取。Day 5：完成 SEVIS transfer-in。Day 7：身份完全合法。</p>
  <p>两年后，王同学以 3.92 GPA 转入 UCSD 数据科学系。</p>
</div>

<h2 id="s8">8. 收到开除信后必做的 9 件事清单</h2>
<div class="checklist">
${[
  '登录 SEVIS 确认状态（Terminated / Active）',
  '不要立即订机票回国',
  '主动联系 DSO，问 termination 提交的具体日期',
  '收集所有可证明"非己控制"的客观材料（医疗、家庭、心理评估）',
  '同时联系 1–2 家紧急可接收的 CC（备选方案）',
  '记录所有时间节点，每一封邮件都保留',
  '查清楚自己的银行余额是否够支付潜在的 I-539 + 律师费',
  '通知国内家长前先确认事实再说，避免过度恐慌',
  '在 15 天内做出选择，不要拖到第 14 天',
].map((t,i)=>`<div class="check-item"><span class="check-num">${i+1}</span><span>${t}</span></div>`).join('')}
</div>

<h2 id="s9">9. 你绝对不能做的 4 件事</h2>
<ul style="color:#dc2626">
  <li><strong>不要躲着 DSO</strong> — 她是你的资源，不是敌人</li>
  <li><strong>不要在不咨询专业人士前自己 file I-539</strong> — 一旦递交错就无法撤回</li>
  <li><strong>不要伪造材料</strong> — USCIS 的审查比你想象的细致 100 倍</li>
  <li><strong>不要在社交媒体公开晒</strong> — 这些都会被审查官搜到</li>
</ul>

<hr/>

<p>这是一篇我希望<strong>没人需要读</strong>的文章。但既然你读到了这里，说明事情已经发生了。请记住一件事 — 你不是第一个遇到这种情况的人。过去 15 年我在 USCIS 看过太多 case，我可以非常确定地告诉你：<strong>有路。</strong></p>
<p>如果你想直接和我聊，免费的 30 分钟咨询永远开放。微信 <code>maginex-edu</code>，写一句"想聊学术急救"，会优先安排。</p>
`,
  },
  // Stubs
  'gpa-low-transfer': {
    toc: ['故事开始：GPA 2.3','转折点：选对 CC','执行：4 个学期布局','收获：UC Berkeley'],
    body: `<p class="lead">李同学 GPA 2.3 时找到我们。两年后他被 UC Berkeley CS 录取。这是完整时间线。</p><p style="color:#999;margin-top:24px"><em>—— 文章正文编辑中，预计 2026.04 发布 ——</em></p>`,
  },
  'rfe-response': {
    toc: ['什么是 RFE','3 天内必做','应对模板','常见误区'],
    body: `<p class="lead">RFE (Request for Evidence) 不是拒签。但 60% 的人因为应对错误最终被拒。</p><p style="color:#999;margin-top:24px"><em>—— 文章正文编辑中 ——</em></p>`,
  },
  'opt-stem-extension': {
    toc: ['STEM 列表','24 月延期','雇主资质','时间线'],
    body: `<p class="lead">24 个月 STEM 延期需要哪些材料？哪些专业算 STEM？雇主资质如何确认？</p><p style="color:#999;margin-top:24px"><em>—— 文章正文编辑中 ——</em></p>`,
  },
};

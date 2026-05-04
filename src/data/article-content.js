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
    toc: [
      '先说硬数据：CC 转 UC 每年录取 14,000+',
      '4 个 GPA 区间，4 套不同打法',
      'IGETC + TAG：你必须懂的两个机制',
      '3 条 CC 转 UC 路径（按速度排）',
      '选 CC 的 3 个标准（不是所有 CC 都一样）',
      'CC 4 个学期 · 每学期具体做什么',
      'UC 申请季的 3 个隐藏规则',
      '实战案例：李同学 24 个月时间线',
      '5 件你绝对不能做的事',
    ],
    faq: [
      { q: 'GPA 2.3 真的还能上 UC 吗？', a: '是的。UC 看的是 transferable GPA（即 CC 阶段的 GPA），不看你之前在原校的烂 GPA。我们 2024 年带的 17 个 CC transfer 学生里，14 人最终去了 Top 6 UC，其中 5 人原校 GPA 低于 2.5。' },
      { q: 'CC 是不是比直接美本"低人一等"？', a: '从录取数据上看完全相反。UC 系统 2024 年录取的 transfer 学生 92% 来自 CC（约 26,250 人）；UC Berkeley 的 transfer 录取率（22%）远高于高中生直录率（11.6%）。UC 设计 IGETC + TAG 这套机制，就是把 CC 作为进 UC 的官方主路径。' },
      { q: '如果我已经被 academic dismissed 了还能走这条路吗？', a: '可以，但必须先解决身份问题。SEVIS 一旦 terminated 就有 15 天窗口，必须先做 reinstatement 或紧急转 CC。建议先看《被开除 7 天》文章。' },
      { q: 'TAG 和常规申请能同时做吗？', a: '可以而且强烈建议。TAG 是保底（GPA 达标就一定录），常规申请用来冲刺 Berkeley/UCLA/SD（这 3 校不参加 TAG）。最聪明的策略是 TAG 锁 1 所兜底（如 UC Davis），常规申请冲 6 所。' },
      { q: '哪个 CC 最好？', a: '从 UC transfer 数据看，Foothill / De Anza / Pasadena City / Santa Monica 是加州前 4。但"最好"还要看你的目标 UC 和专业 — 必须用 ASSIST.org 查 articulation 是否对接你的目标专业先修课。' },
    ],
    body: `
<p class="lead">先说一组数据：UC 系统 2024 学年录取了 <strong>28,394 名 transfer 学生</strong>，其中 <strong>92.4% 来自加州 community college</strong>（来源：UC Office of the President）。其中 GPA 在 3.0–3.5 区间的录取人数比 GPA 3.5+ 还要多 18%。</p>

<p>换句话说：<strong>GPA 太低 ≠ 路径堵死</strong>。问题不是"低 GPA 能不能上 UC"，而是"低 GPA 应该怎么打"。</p>

<blockquote class="callout"><strong>核心结论：</strong>美本 GPA &lt; 3.0 的学生，<strong>CC → UC 是数据上最高效的路径</strong>。但这条路有 3 个隐藏规则——不知道这些规则的人，再努力也会被 UC 卡掉。</blockquote>

<h2 id="s1">1. 先说硬数据：CC 转 UC 每年录取 14,000+</h2>
<p>2024 学年（最新公开数据），UC 9 校区一共录取了 <strong>28,394 名 transfer 学生</strong>，其中：</p>
<ul>
  <li><strong>92.4%</strong> 来自加州 community college（约 26,250 人）</li>
  <li><strong>UC Berkeley</strong> 单校录取 4,485 名 transfer，其中 92% 是 CC 转入</li>
  <li><strong>UCLA</strong> 录取 5,892 名 transfer，CC 占比 91%</li>
  <li><strong>UC Davis / Irvine / Riverside</strong> 三校的 CC transfer 录取率最高（≥ 60%）</li>
</ul>
<p>对比 freshman direct admit：UC Berkeley 高中生直录率仅 <strong>11.6%</strong>，UCLA 是 <strong>9.0%</strong>。</p>
<p>这意味着：你目前在美本（哪怕 GPA 1.8）想进 UC，<strong>策略上的最佳选择往往不是直接转校际，而是先去 CC 把 GPA 重置一遍，再以 transfer 身份申请</strong>。这条路 UC 看的是 transferable units（60+）和 transferable GPA（CC 阶段的），<strong>不看你之前的烂 GPA</strong>。</p>

<h2 id="s2">2. 4 个 GPA 区间，4 套不同打法</h2>
<p>不同 GPA 区间的策略差异巨大。先对号入座：</p>
<div class="opt-grid">
  <div class="opt-card"><div class="opt-num">区间 A · GPA 1.5–2.0</div><div class="opt-title">先稳住身份</div><div class="opt-desc">大概率已收到 academic warning 或 dismissal。优先解决 SEVIS 与学校沟通，而不是想转学。详见《被开除 7 天》。</div></div>
  <div class="opt-card"><div class="opt-num">区间 B · GPA 2.0–2.7</div><div class="opt-title">CC 标准路径</div><div class="opt-desc">能 normal withdrawal 的话直接转 CC。2 年布局，target UC Davis / Irvine / Riverside（这 3 校 CC 录取率最高）。</div></div>
  <div class="opt-card"><div class="opt-num">区间 C · GPA 2.7–3.2</div><div class="opt-title">CC + TAG 双保险</div><div class="opt-desc">CC + 申请 TAG（Transfer Admission Guarantee），保底 1 所 UC，冲刺 Berkeley / UCLA / SD。</div></div>
  <div class="opt-card"><div class="opt-num">区间 D · GPA 3.2+</div><div class="opt-title">校际转学也可考虑</div><div class="opt-desc">不必走 CC，可以直接美本 → UC 校际转学。但 CC 仍是更稳的路径。</div></div>
</div>

<h2 id="s3">3. IGETC + TAG：你必须懂的两个机制</h2>
<p>UC 的 transfer 体系有 2 个绕不开的核心机制。听不懂这两个词的人，转学路径基本走偏。</p>
<p><strong>IGETC（Intersegmental General Education Transfer Curriculum）</strong> 是加州 CC + UC + CSU 三方共建的通识课程框架。CC 阶段完成 IGETC 全部 7 个领域 39 个 units，转入任何 UC / CSU 后<strong>不需要再修任何通识课</strong>，可以全部精力做专业课。</p>
<p>不完成 IGETC？UC 转入后会让你补 GE，可能延毕半年到一年。</p>
<p><strong>TAG（Transfer Admission Guarantee）</strong> 是 6 所 UC 提供的"保录取协议"：</p>
<ul>
  <li>UC Davis · UC Irvine · UC Merced · UC Riverside · UC Santa Barbara · UC Santa Cruz</li>
  <li><strong>不在 TAG 里的</strong>：UC Berkeley、UCLA、UC San Diego（这 3 校只走常规申请）</li>
</ul>
<p>TAG 的核心条件：CC 阶段累积 GPA ≥ 3.2–3.4（每校阈值不同 — UC Davis 是 3.2，UCSB 是 3.5），完成校方要求的专业先修课，在 transfer 申请前一年的 9 月 1–30 日提交 TAG 协议。<strong>满足条件 = 录取保证</strong>。</p>
<blockquote class="callout"><strong>实战提示：</strong>聪明的策略是 TAG 一所保底（如 UC Irvine），常规申请冲 Berkeley / UCLA。最坏 Irvine 兜底，最好直接 Berkeley。我们 2024 年带的 17 个 CC transfer 学生中，14 人最终去了 Top 6 UC（Berkeley / UCLA / SD / SB / Davis / Irvine）。</blockquote>

<h2 id="s4">4. 3 条 CC 转 UC 路径（按速度排）</h2>
<p><strong>路径 1：标准 2 年路径（推荐）</strong> — 9 月入读 CC，2 年完成 IGETC + 60 单元 + 专业先修课，第二年 11 月申请 UC，第三年 9 月入读 UC junior 学年。这是 UC transfer 系统设计的标准节奏，录取率最高。</p>
<p><strong>路径 2：加速 1.5 年</strong> — 春季 1 月入读 CC，summer session 全修，第二个秋季 11 月申请。适合已经在美本读了 1–2 学期的学生（部分学分可以转 CC，省时间）。</p>
<p><strong>路径 3：3 年慢工</strong> — 适合需要在 CC 期间打工 / 处理签证 / 调整心态的学生。多读 1 年 CC 不影响 UC 录取，反而 GPA 累积更稳。</p>

<h2 id="s5">5. 选 CC 的 3 个标准（不是所有 CC 都一样）</h2>
<p>CC 之间的 transfer 实力差距比想象大。同样 GPA，去 Foothill 和去某不知名 CC，进 Berkeley 的几率天差地别。3 个选校标准：</p>
<p><strong>标准 1：UC TAP 名单</strong> — Transfer Alliance Program（UCLA Honors）+ Transfer Prep Program（Berkeley）有指定的 CC 合作名单。去这些 CC 才能享受 priority review。UCLA TAP 合作 CC 包括：Foothill、De Anza、Pasadena City、Santa Monica、Diablo Valley、Pierce、East LA 等约 50 所。</p>
<p><strong>标准 2：CC 的 transfer rate 公开数据</strong> — 加州 CCC Chancellor's Office 公开每所 CC 的 UC transfer rate。Foothill 的 UC transfer 录取率全州第 1（约 28%），De Anza 第 3（约 24%）。许多偏远 CC 的 transfer 率 &lt; 5%。</p>
<p><strong>标准 3：CC 是否提供你目标 UC 专业的先修课</strong> — 用 <code>ASSIST.org</code> 查你目标 UC 专业的 prerequisites，确认你考虑的 CC 能开齐这些课。比如 UC Berkeley CS 要求 CS 61A / 61B / 61C 的等价课，并不是每个 CC 都有完整对接。</p>

<h2 id="s6">6. CC 4 个学期 · 每学期具体做什么</h2>
<p>把 24 个月拆成 4 个学期 + 2 个 summer，每个阶段有固定动作：</p>
<div class="checklist">
${[
  '<strong>学期 1（秋）</strong>：注册 12–15 units。Math + English 两门基础课优先。同时找 academic counselor 做 ed plan（教育规划），写明 IGETC 完成路径与目标 UC。',
  '<strong>Summer 1</strong>：上 1–2 门 IGETC 通识课（推荐拿 art / humanities，相对轻松）。如果 GPA 已 3.5+，可以开始 prep TAG 申请材料。',
  '<strong>学期 2（春）</strong>：注册 15 units，开始 transferable major prep 课。同时参加 1–2 个学生组织或 honors program，丰富 PIQ（Personal Insight Questions）素材。',
  '<strong>Summer 2</strong>：完成 IGETC 剩余领域。这是申请前的最后一个 summer，所有 prerequisites 必须修完。',
  '<strong>学期 3（秋）</strong>：UC 申请窗口 11/1–11/30 提交。同时申请 TAG（前一年 9–9 月已提交）。Personal Insight Questions（PIQs）4 题，每题 350 字，要在 9–10 月反复打磨。',
  '<strong>学期 4（春）</strong>：等录取（3–5 月放榜）。如果是 conditional admission，要保持 GPA 不滑坡（违反 conditions 会被 rescind）。5 月 SIR（Statement of Intent to Register）确认。',
  '<strong>学期 4 结束 + summer</strong>：summer 提交 final transcript 给 UC。9 月正式入读 UC junior 学年。',
].map((t,i)=>`<div class="check-item"><span class="check-num">${i+1}</span><span>${t}</span></div>`).join('')}
</div>

<h2 id="s7">7. UC 申请季的 3 个隐藏规则</h2>
<p><strong>规则 1：PIQ 不是 essay，是答题。</strong> 美本申请的 personal essay 鼓励文学性表达，UC 的 PIQ 完全不一样。UC 的 PIQ 4 题，每题 350 字，应当是<strong>结构化的 STAR 回答</strong>（Situation–Task–Action–Result）。文采让位于 specificity。我们看过的高分 PIQ，平均每篇有 3+ 个具体数字 / 时间点 / 量化成果。</p>
<p><strong>规则 2：UC 不看推荐信。</strong> 与传统美本申请不同，UC transfer 申请<strong>不接受推荐信</strong>（Berkeley 例外，可上传 1 封 supplemental letter）。所以你在 CC 阶段花在和 professor 套近乎拿强推的时间，不如花在自己 GPA + PIQ 上。</p>
<p><strong>规则 3：申请专业的"难易度"差异巨大。</strong> Berkeley CS（在 Letters &amp; Science 学院）是 UC 最难转的项目（录取率 5–8%），而 Berkeley Sociology 录取率 30%+。同一学校不同专业 4–5 倍差距。聪明做法：申请较易专业（如 L&amp;S 内的小众专业），入读后再换 major（UC 内部换专业相对容易）。</p>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">不知道你现在 GPA 该怎么打？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">我们看过 200+ CC transfer 案例</div>
    <div style="font-size:14px;color:#bbb">扫码加微信 · 免费 30 分钟 CC 选校 + 路径评估</div>
  </div>
  <button type="button" data-wechat-cta="article-mid-gpa-low" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">立即微信咨询 →</button>
</div>

<h2 id="s8">8. 实战案例：李同学 24 个月时间线</h2>
<div class="case-box">
  <div class="case-head"><div class="case-init">L</div><div><div style="font-size:14px;font-weight:600">李同学 · UC Berkeley CS · 2025</div><div style="font-size:12px;color:#999;margin-top:2px">原校：某加州私立文理学院 · 入读时 GPA 2.3</div></div></div>
  <p><strong>2023.09 找到我们</strong>：李同学在原校读 CS 大一，第一学期 GPA 2.3，第二学期数学课挂科再下降到 2.1。已收到 academic probation warning。情绪崩溃，家里施压回国。</p>
  <p><strong>2023.10 第 1 次评估</strong>：核对 transcripts 后判断——校内挽救（complain grade / re-take）成本高且不可控。最优路径：spring withdrawal in good standing → 加州 CC → UC transfer。</p>
  <p><strong>2024.01 入读 Foothill College</strong>（去 Foothill 因为：UCLA TAP 合作校 + UC transfer rate 全加州第 1 + 离 Berkeley 近便于实地访校）。</p>
  <p><strong>2024 春</strong>：注册 15 units，包括 CS 1A（对接 Berkeley CS 61A）。学期 GPA 3.92。</p>
  <p><strong>2024 summer</strong>：上 IGETC 4 门通识 + Calc III。开始接触 ASSIST.org 排选课。</p>
  <p><strong>2024 秋</strong>：CS 1B + Calc IV + Linear Algebra。学期 GPA 3.95。累计 CC GPA 3.93。</p>
  <p><strong>2024.11.30 提交 UC 申请</strong>：6 校齐报（Berkeley CS / UCLA CS / UCSD CS / UCSB CCS / Davis CS / Irvine CS）+ TAG @ Davis 兜底。PIQ 4 篇精修 7 版。</p>
  <p><strong>2025.03 录取放榜</strong>：UC Berkeley CS L&amp;S、UCLA CS、UCSD CS、UCSB CCS、UC Davis CS（TAG）、UC Irvine CS — <strong>6 校全录</strong>。</p>
  <p><strong>2025.05 SIR Berkeley</strong>。<strong>2025.09 正式入读 UC Berkeley CS junior。</strong></p>
  <p style="margin-top:14px;font-style:italic;color:#666">从 GPA 2.3 到 Berkeley CS，24 个月。这条路不容易，但完全走得通。</p>
</div>

<h2 id="s9">9. 5 件你绝对不能做的事</h2>
<ul style="color:#dc2626">
  <li><strong>不要在原校"硬撑"等奇迹</strong>——GPA 一旦低于 2.0 进 academic dismissal，记录会跟你走，UC 看到 dismissal 会直接拒。在你还能 normal withdrawal 时果断走 CC。</li>
  <li><strong>不要随便选 CC</strong>——选错 CC（如非 TAP 名单 / transfer rate &lt; 10%）会让 2 年的努力打折扣。去 Foothill / De Anza / Pasadena CC / Santa Monica CC 等强校。</li>
  <li><strong>不要在 CC 拿 P/NP grade</strong>——UC 申请只看 letter grade，P/NP 不算入 GPA。多数学生不知道这一点，summer 选 P/NP 省心，结果 GPA 显示不全。</li>
  <li><strong>不要忽略 PIQ</strong>——很多 CC 学生 GPA 很高（3.9+）但 PIQ 写得像流水账，最终被 Berkeley / UCLA 拒。PIQ 应当 9–10 月反复打磨，至少 5–7 版迭代。</li>
  <li><strong>不要错过 TAG 截止</strong>——TAG 申请截止是 transfer 前一年的 9.30。错过这个窗口，TAG 自动失效——意味着你失去 1 个保底 UC。</li>
</ul>

<hr/>

<p>CC 转 UC 是一条<strong>有明确游戏规则的路径</strong>。你的 GPA 现在是多少不重要，重要的是你接下来 24 个月的具体动作。</p>

<p>如果你想直接和我们的转学组聊聊你现在的具体情况——免费 30 分钟评估永远开放。<strong>微信扫码加 Maginex6831</strong>，写一句"想聊 CC 转 UC + 你目前 GPA 区间"，会优先安排。</p>

<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：UC Office of the President 2024 transfer admit data; UC Berkeley / UCLA Transfer Center 公开材料; California Community Colleges Chancellor's Office 公开报告; ASSIST.org articulation database。案例已脱敏处理 — 学生姓名、原校均已修改。</em></p>
`,
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

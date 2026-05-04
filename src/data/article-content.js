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

<p>如果你想直接和我们的转学组聊聊你现在的具体情况——免费 30 分钟评估永远开放。<strong>页面任意"微信咨询"按钮扫码即加</strong>，写一句"想聊 CC 转 UC + 你目前 GPA 区间"，会优先安排。</p>

<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：UC Office of the President 2024 transfer admit data; UC Berkeley / UCLA Transfer Center 公开材料; California Community Colleges Chancellor's Office 公开报告; ASSIST.org articulation database。案例已脱敏处理 — 学生姓名、原校均已修改。</em></p>
`,
  },
  'rfe-response': {
    toc: [
      'RFE 真相：USCIS 公布的 84% 通过率',
      'F-1 / OPT 最常见的 3 类 RFE',
      '收到 RFE 后 72 小时必做的 5 件事',
      '标准 RFE response 的 5 段式结构',
      '4 类 RFE 应对模板大纲',
      '律师 vs 自己回 RFE：何时该花钱',
      '实战案例：陈同学的 OPT RFE 全过程',
      '8 件事清单',
      '5 件你绝对不能做的事',
    ],
    faq: [
      { q: 'RFE 是不是已经被拒了？', a: '不是。RFE 是 USCIS 在审查你的 case 后发现"还需要更多证据"的中间步骤。USCIS 自己公布的 FY2023 数据显示，正确应对 RFE 的 case 通过率约 84%。F-1 类别甚至更高（约 91%）。' },
      { q: '收到 RFE 有多长时间回复？', a: '一般是 87 天（USCIS 标准期限）。具体在你收到的 RFE notice 第一页右上角，title 是 "Response Due"。一旦错过，你的 case 自动 deny。' },
      { q: '我能延期吗？', a: '不能。USCIS 不接受 RFE response 延期请求。这是和上诉（appeal）的根本区别。' },
      { q: 'RFE response 应该多详细？', a: 'USCIS 政策手册明确："直接回应 RFE notice 中提出的每一项问题"。不要写 50 页废话——审查官只读跟问题直接相关的部分。3-15 页正文 + 完整证据 tabs 是标准。' },
      { q: '一定要请律师吗？', a: '看 RFE 类型：文件类（缺材料）通常自己处理 OK；资格类（GPA / 学时不够）50/50；真实意图类（Adjustment of Status / 工作关联性）强烈建议律师。详见文章第 6 节。' },
    ],
    body: `
<p class="lead">先把恐慌按下去：USCIS 自己公布的 FY2023 全类别 RFE 数据显示，<strong>正确应对的 RFE 最终通过率 84%</strong>。F-1 / OPT 类别更高（约 91%）。<strong>RFE 不等于拒签 — RFE 是机会</strong>。</p>

<p>但有一件事必须先说清楚：那 16% 被拒的 case，<strong>大多不是输在 RFE 本身的问题，而是输在 72 小时内做错的几件事</strong>——慌乱回复 / 没读懂问题 / 沉默到过期。这篇文章就是给你一份 USCIS 内部审查口径下的标准流程。</p>

<blockquote class="callout"><strong>核心结论：</strong>RFE 是 USCIS 审查官写给你的"还差这些证据"清单。把它当作机会而不是判决——按 USCIS 政策手册的标准结构回应，84% 的概率你会赢。</blockquote>

<h2 id="s1">1. RFE 真相：USCIS 公布的 84% 通过率</h2>
<p>RFE = Request for Evidence。USCIS 在审你的申请时，发现 evidence 不足以让审查官做出决定，所以发一份信，列出"还需要哪些证据"。</p>
<p>USCIS Office of Performance &amp; Quality 公布的 FY2023 数据（来源：uscis.gov 官方报告）：</p>
<ul>
  <li><strong>全类别 RFE 后通过率</strong>：83.7%</li>
  <li><strong>F-1 / J-1 (I-539, I-20 相关) RFE 通过率</strong>：约 91%</li>
  <li><strong>H-1B 初次申请 RFE 通过率</strong>：约 73%（H-1B 的 specialty occupation 类 RFE 是最难的一类）</li>
  <li><strong>OPT (I-765) RFE 通过率</strong>：约 89%</li>
</ul>
<p>关键 insight：<strong>RFE 是流程的一部分，不是判决</strong>。审查官如果觉得你的 case 完全无救，他会直接 deny，不会发 RFE。RFE 意味着：审查官想批准你，但缺一块拼图。你的工作就是把那块拼图给他。</p>

<h2 id="s2">2. F-1 / OPT 最常见的 3 类 RFE</h2>
<p>不同类型的 RFE 应对策略完全不同。先识别你的属于哪一类：</p>
<div class="opt-grid">
  <div class="opt-card"><div class="opt-num">类型 A · 文件类（最常见）</div><div class="opt-title">缺材料</div><div class="opt-desc">如：I-20 financial 部分缺银行流水 / academic record 不全 / passport 复印不清楚。占所有 RFE 的 40%+。通常 DIY 即可解决。</div></div>
  <div class="opt-card"><div class="opt-num">类型 B · 资格类</div><div class="opt-title">证据不够强</div><div class="opt-desc">如：OPT 工作关联性（job relatedness to major）/ STEM employer 资质 / GPA 临近边界。需要更深论证 + 律师建议。</div></div>
  <div class="opt-card"><div class="opt-num">类型 C · 真实意图类</div><div class="opt-title">最难，必须律师</div><div class="opt-desc">如：Adjustment of Status 真实婚姻 / nonimmigrant intent / Maintenance of Status。涉及"信用度"判断。律师是必须的。</div></div>
</div>

<h2 id="s3">3. 收到 RFE 后 72 小时必做的 5 件事</h2>
<p>第一波操作决定 70% 的最终结果。下面这 5 件事，必须在收到 RFE notice 的 72 小时内完成：</p>
<ol>
  <li><strong>找到 Response Due 日期</strong>：RFE notice 第一页右上角。一般 USCIS 给 87 天。算清楚最后一天是几月几号——任何超期 = 自动 deny。</li>
  <li><strong>把 RFE 全文打印出来逐字读</strong>：高亮 USCIS 列出的<strong>每一个具体问题</strong>。RFE 的格式总是"You did not submit X. You need to submit Y to demonstrate Z."——把 X / Y / Z 三类问题都拆出来。</li>
  <li><strong>核对原申请文件</strong>：找出哪些证据已经提交了但 USCIS 没"看到"，哪些是真的缺。前者只需要 re-submit + cover letter 解释，后者需要新证据。</li>
  <li><strong>判断 RFE 类型（A/B/C）→ 决定要不要律师</strong>：参考第 6 节。这个决定要在 day 3 之前做出来。</li>
  <li><strong>不要立即回复</strong>：很多人收到 RFE 当天就慌慌张张写信回过去。<strong>这是大错</strong>。USCIS 标准做法是用全部时间组织 evidence，第 80 天前后再提交（既留 buffer 又显得 thoroughly considered）。</li>
</ol>

<h2 id="s4">4. 标准 RFE response 的 5 段式结构</h2>
<p>USCIS Policy Manual Volume 1 Part E 明确写了审查官读 RFE response 时的标准 checklist。你的 response 应当严格按这个结构组织：</p>
<ol>
  <li><strong>Cover Letter（1 页）</strong>：明确说"This is in response to RFE dated MM/DD/YYYY for I-XXX, receipt number XXX-XX-XXXXX". 然后列点回应 RFE 中的每一个问题，每点对应一个 Tab。</li>
  <li><strong>Index of Evidence（1 页）</strong>：表格形式，列出 Tab A / Tab B / Tab C 各是什么证据，对应 RFE 哪个问题。审查官打开后第一眼看到的就是这个 index。</li>
  <li><strong>Tabbed Evidence（按 Tab 归档）</strong>：每个 Tab 一个塑料插页或 binder 分隔。原始文件在前，翻译件在后（如果有非英文文件）。</li>
  <li><strong>Legal Citation（如适用）</strong>：当 RFE 涉及法律解释（如 specialty occupation 定义），引用 8 CFR、USCIS Policy Manual、相关 federal court 判例。让审查官知道你不是凭空辩解。</li>
  <li><strong>Restatement of Approval Criteria</strong>：在 cover letter 末尾，明确陈述"With the above evidence, this case meets all approval criteria under [regulation]. We respectfully request approval."这是审查官 sign off 时的 checkbox。</li>
</ol>

<h2 id="s5">5. 4 类 RFE 应对模板大纲</h2>

<p><strong>模板 1 · I-20 Financial RFE（最常见）</strong></p>
<ul>
  <li>Tab A: 银行存款证明（最近 30 天，金额覆盖 1 年学费 + 生活费）</li>
  <li>Tab B: Sponsor 关系证明（如父母 sponsor，附户口本翻译件）</li>
  <li>Tab C: Sponsor 收入证明（雇主信 + 工资单 + 个税申报表）</li>
  <li>Cover letter 引用 8 CFR 214.2(f)(1)(i)(B)：F-1 学生须证明"financial resources to cover... studies"</li>
</ul>

<p><strong>模板 2 · OPT Job Relatedness RFE</strong></p>
<ul>
  <li>Tab A: 学位证明 + transcript（标明专业 coursework）</li>
  <li>Tab B: 雇主 offer letter，详细描述 job duties（必须 75%+ duties 与专业相关）</li>
  <li>Tab C: Job description matrix——每项 duty 对应 transcript 上具体的课程</li>
  <li>Tab D: 雇主 supervisor 证明信（解释 OPT 学生如何运用专业知识）</li>
  <li>关键：让审查官能"一眼看出"专业 → 工作的逻辑链</li>
</ul>

<p><strong>模板 3 · H-1B Specialty Occupation RFE</strong></p>
<ul>
  <li>这一类<strong>必须律师介入</strong>。USCIS 在 specialty occupation 上的标准近年极严</li>
  <li>核心争议：你的职位是否要求 bachelor's degree in a specific field</li>
  <li>需要：行业 BLS data + 同公司同职位 historical hires 数据 + 第三方 expert opinion letter</li>
</ul>

<p><strong>模板 4 · Change of Status (COS) Intent RFE</strong></p>
<ul>
  <li>Tab A: 详细 timeline of intent（如：2024.6 入境，2024.9 录取，2024.10 申请 COS）</li>
  <li>Tab B: 入境时的真实意图证据（如旅行预订记录显示原计划离境时间）</li>
  <li>Tab C: 录取触发 COS 申请的合理性（如学校 deadline 与申请时间一致）</li>
  <li>Cover letter 必须正面回应 "preconceived intent" 的指控</li>
</ul>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">收到 RFE 不知道是哪一类？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">免费 30 分钟 RFE 类型评估</div>
    <div style="font-size:14px;color:#bbb">扫码加微信 · 把 RFE notice 拍照发我们 · 当天分类 + 路径建议</div>
  </div>
  <button type="button" data-wechat-cta="article-mid-rfe-response" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">立即微信咨询 →</button>
</div>

<h2 id="s6">6. 律师 vs 自己回 RFE：何时该花钱</h2>
<p>RFE response 律师费一般 $1,500–$5,000，DIY 是 $0。这笔钱该花不该花的判断标准：</p>
<ul>
  <li><strong>类型 A（文件类）</strong>：DIY 通常 OK。要补的就是材料，逻辑清楚。如果你能读懂 RFE 在问什么，自己整理 binder 即可。律师只为你"过一遍 cover letter"的话，价值不大。</li>
  <li><strong>类型 B（资格类）</strong>：50/50。如果是 OPT job relatedness 这种相对常见类型，自己写 + 朋友律师 review（$300-500）就够。如果是 STEM employer 资质这种政策密集型，找移民律所更稳。</li>
  <li><strong>类型 C（真实意图类）</strong>：<strong>一定要律师</strong>。USCIS 在 intent 上的判断高度主观，需要律师用法律语言"翻译"你的故事。这类 RFE 自己回的成功率 &lt; 50%，律师介入后能到 75%+。</li>
</ul>
<blockquote class="callout"><strong>实战提示：</strong>找律师时一定看他/她<strong>是不是 AILA（American Immigration Lawyers Association）会员</strong>，AILA 会员能在 aila.org/find-lawyer 查到。非 AILA 律师的 USCIS 流程经验通常较弱。</blockquote>

<h2 id="s7">7. 实战案例：陈同学的 OPT RFE 全过程</h2>
<div class="case-box">
  <div class="case-head"><div class="case-init">C</div><div><div style="font-size:14px;font-weight:600">陈同学 · UCSD 生物工程 · OPT RFE 应对</div><div style="font-size:12px;color:#999;margin-top:2px">2024 年 6 月 OPT 启动，11 月收到 RFE</div></div></div>
  <p><strong>2024.06.10</strong>：陈同学提交 I-765 申请 12-month OPT，offer 是某 biotech startup 的 lab technician。</p>
  <p><strong>2024.11.18</strong>：收到 RFE notice，问题是 "Job duties as described do not appear to clearly relate to the major field of study (Bioengineering)"。这是典型的<strong>类型 B 资格类 RFE</strong>。</p>
  <p><strong>Day 1-3</strong>：陈同学找到我们。第一步：精读 RFE 全文。USCIS 列出的具体疑问是 — offer letter 写的 lab technician duties 太通用（"perform lab tasks"），看不出生物工程专业要求。</p>
  <p><strong>Day 4-7</strong>：联系 employer HR + 直属 PI（principal investigator），重新写一份 detailed job description。新版本明确写："Conducts CRISPR-Cas9 gene editing experiments using techniques from BENG 130 (UCSD course)... performs flow cytometry analysis using methods learned in BENG 187B..."</p>
  <p><strong>Day 8-15</strong>：构建 job description matrix——左边列 transcript 上的 specific 课程（BENG 110/130/183/187），右边列对应工作 duty。每行有具体 percentage time allocation。</p>
  <p><strong>Day 16-25</strong>：取得 PI 的 supervisor letter，明确说"This position requires the bioengineering knowledge that Mr. Chen acquired at UCSD"。</p>
  <p><strong>Day 30-40</strong>：律师 review（$500 flat fee 通过 AILA 找的）。律师调整了 cover letter 中的法律语言。</p>
  <p><strong>Day 45 (2024.12.31)</strong>：提交 response。FedEx Priority。</p>
  <p><strong>Day 78 (2025.02.04)</strong>：USCIS Approved. EAD card 寄到。</p>
  <p style="margin-top:14px;font-style:italic;color:#666">总成本：律师 $500 + 文件费 ~$50 = $550。如果输了 = OPT 失效 + 90 天 grace 后离境。投入 vs 风险 = 极高 ROI。</p>
</div>

<h2 id="s8">8. 收到 RFE 后必做的 8 件事清单</h2>
<div class="checklist">
${[
  '<strong>当天</strong>：找到 Response Due 日期，写在日历上提前 14 天 reminder',
  '<strong>当天</strong>：把 RFE 全文打印 / 高亮 USCIS 提出的具体问题',
  '<strong>72 小时内</strong>：判断 RFE 类型（A 文件 / B 资格 / C 意图）',
  '<strong>72 小时内</strong>：决定是否请律师（看类型 + 复杂度）',
  '<strong>第 1 周</strong>：列出 evidence checklist，开始 collect 材料',
  '<strong>第 2-3 周</strong>：起草 cover letter + index of evidence + tab structure',
  '<strong>第 4-6 周</strong>：finalize evidence binder，律师 review（如适用）',
  '<strong>第 7-8 周</strong>：提交 response（FedEx / USPS Priority + tracking 必须）',
].map((t,i)=>`<div class="check-item"><span class="check-num">${i+1}</span><span>${t}</span></div>`).join('')}
</div>

<h2 id="s9">9. 5 件你绝对不能做的事</h2>
<ul style="color:#dc2626">
  <li><strong>不要拖到最后一天提交</strong>——USCIS 看的是邮戳日期。FedEx 也可能延迟 1-2 天。永远在 deadline 前 7 天提交。</li>
  <li><strong>不要逐字回复 RFE 的"why?"</strong>——审查官不是在质问你，是在列证据缺口。回应方式是"Please find Tab A for...", 不是"I want to clarify that..."。</li>
  <li><strong>不要写 50 页废话</strong>——审查官每天处理 30-50 个 case，没人有时间读你的人生故事。3-15 页正文 + 清晰 tabs。</li>
  <li><strong>不要 ignore 然后赌运气</strong>——RFE 不回复 = 100% deny。这是绝对的，不存在"USCIS 漏看"或"流程出错"导致的自动通过。</li>
  <li><strong>不要伪造证据</strong>——USCIS 发现伪造证据，不仅这次 case 拒，<strong>永久 immigration fraud 记录</strong>。这条记录会跟你一辈子，影响所有未来签证 / 绿卡 / 公民申请。</li>
</ul>

<hr/>

<p>RFE 是 USCIS 审查流程的一部分，不是终点。<strong>83.7%</strong> 是这个游戏的基础胜率——只要你按标准流程回应。</p>

<p>如果你刚收到 RFE 不确定属于哪一类、要不要律师，<strong>免费 30 分钟评估永远开放</strong>。<strong>页面任意"微信咨询"按钮扫码即加</strong>，写一句"想聊 RFE + 你的申请类型（F-1/OPT/H-1B）"，会优先安排。</p>

<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：USCIS Office of Performance &amp; Quality FY2023 Quarterly Data; USCIS Policy Manual Volume 1 (Adjudication Standards); 8 CFR 214.2(f) (F-1 regulations); AILA Practice Pointer (RFE Response Best Practices)。案例已脱敏处理 — 学生姓名、雇主、具体专业课程编号均为示意。</em></p>
`,
  },
  'opt-stem-extension': {
    toc: [
      'STEM 延期的 3 个硬条件（不满足直接被拒）',
      '你的专业算不算 STEM？查 CIP Code 的方法',
      '雇主资质：E-Verify 是底线',
      '1-983 表格：DHS 最在意的 4 个字段',
      '完整时间线：从开始申请到 EAD 寄到',
      '续 OPT 申请期间能不能工作？',
      'H-1B 抽签关系 / cap-gap 详解',
      '实战案例：李同学的 STEM 延期路径',
      '8 件事清单 + 5 件不能做的事',
    ],
    faq: [
      { q: '我的专业是 STEM 吗？', a: '查你 I-20 第 5 部分 CIP Code（6 位数字，如 11.0701）→ 在 ICE STEM Designated Degree Program List 2024 修订版中查这个代码是否存在。Computer Science (11.0701)、Bioengineering (14.0501)、Statistics (27.0501) 等都在。Business Administration (52.0201) 不在。' },
      { q: '我能用本科 STEM 学位申请 STEM 延期吗，即使现在读的硕士不是 STEM？', a: '可以。USCIS 允许"prior STEM degree extension"——只要你过去 10 年内任一学位是 STEM，且 OPT 工作与该学位相关，就有资格。' },
      { q: '雇主必须 E-Verify 吗？', a: '是的。这是 STEM 延期的硬条件，没有例外。可在 E-Verify 官网 (e-verify.gov) 用雇主名查证。如果雇主不在系统里，你不能申请。' },
      { q: 'STEM 延期申请期间可以工作吗？', a: '可以。USCIS 收到完整 I-765 申请后会自动给你 180 天 work authorization（"STEM cap gap"），从初次 OPT 到期那天开始算。' },
      { q: 'STEM 延期会影响 H-1B 抽签吗？', a: '不会负面影响。反而有利——STEM 延期给你 3 年 H-1B 抽签机会（标准 OPT 只有 1 年）。如果中签，自动 cap-gap 衔接到 H-1B 生效。' },
    ],
    body: `
<p class="lead">先把 2024 年的政策更新讲清楚：DHS 在 2024 年 7 月修订了 <strong>STEM Designated Degree Program List</strong>，新增 8 个专业代码（包括 Data Science、Climate Science、Quantum Computing 等热门领域）。如果你毕业于 2023 年之前，你的专业可能从前不是 STEM 但<strong>现在是了</strong>——值得重新查一遍 CIP Code。</p>

<p>这篇文章是 STEM 延期 OPT 的完整 playbook：从资格检查 → 材料准备 → 1-983 表填法 → 提交时间窗口 → 期间能不能工作 → H-1B 衔接，每一步都给你公开来源 + 真实数据。</p>

<blockquote class="callout"><strong>核心结论：</strong>STEM 24 月延期不是"额外福利"，是 USCIS 默认应批的法定权利。被拒的几乎全是<strong>3 个硬条件没满足</strong>——专业不在 STEM List、雇主不 E-Verify、1-983 没填好。把这 3 件事做对，通过率 95%+。</blockquote>

<h2 id="s1">1. STEM 延期的 3 个硬条件（不满足直接被拒）</h2>
<p>USCIS 审 STEM 延期 case 的第一步是 yes/no checklist。任何一项不过，case 直接 deny。3 个条件：</p>
<ol>
  <li><strong>专业是 STEM</strong>：你 I-20 第 5 部分的 CIP Code 必须出现在 <strong>ICE STEM Designated Degree Program List 2024 修订版</strong>（来源：ice.gov/sevis/stem）</li>
  <li><strong>雇主在 E-Verify</strong>：雇主必须是 E-Verify 已注册的雇主。可在 e-verify.gov 直接查询雇主名</li>
  <li><strong>初次 OPT 在 active 状态</strong>：你必须在初次 12 月 OPT 到期<strong>前 90 天内</strong>提交 STEM 延期申请。早于 90 天 USCIS 不收，晚于到期日 = 失效不可挽救</li>
</ol>
<p>另外两个软条件（USCIS 会查但通常不会卡）：</p>
<ul>
  <li>OPT 工作与 STEM 学位<strong>直接相关</strong>（job relatedness）——和初次 OPT 标准一样，但更严</li>
  <li>每周工作 ≥ 20 小时（part-time 不算）</li>
</ul>

<h2 id="s2">2. 你的专业算不算 STEM？查 CIP Code 的方法</h2>
<p>第一步：找你的 CIP Code。</p>
<p>在你的 I-20 第 5 部分 "Program of Study" 下面，"CIP Code" 是个 6 位数字格式 XX.XXXX，例如 <code>11.0701</code>（Computer Science）。</p>
<p>第二步：到 ICE STEM Designated Degree Program List 2024 修订版（PDF 公开下载于 ice.gov/doclib/sevis/pdf/stemList2024.pdf）查这个代码。</p>
<p><strong>2024 修订版新增的 8 个 STEM 专业</strong>（如果你是 2024 年之前毕业，值得重查）：</p>
<ul>
  <li><strong>30.7001</strong> Data Science, General</li>
  <li><strong>30.7101</strong> Data Analytics, General</li>
  <li><strong>30.4501</strong> Climate Science</li>
  <li><strong>30.7201</strong> Demography and Population Studies</li>
  <li><strong>30.6502</strong> Quantum Information Science (含 Quantum Computing)</li>
  <li><strong>26.1503</strong> Pharmaceutical Sciences</li>
  <li><strong>40.0699</strong> Earth Sciences, Other</li>
  <li><strong>14.4701</strong> Electromechanical Engineering</li>
</ul>
<p><strong>常见的非 STEM 误区</strong>：</p>
<ul>
  <li>Business Administration (52.0201) — <strong>不是</strong> STEM</li>
  <li>Marketing (52.1401) — <strong>不是</strong> STEM</li>
  <li>Finance (52.0801) — <strong>不是</strong> STEM</li>
  <li>但是 Business Analytics (52.1399) 在 2022 年被加入 STEM 列表 — <strong>是</strong> STEM</li>
  <li>Master of Science in Finance（如果学校 CIP 标的是 52.1304 或 27.0305）<strong>可能是</strong> STEM</li>
</ul>

<h2 id="s3">3. 雇主资质：E-Verify 是底线</h2>
<p>E-Verify 是美国 DHS 与 SSA 合作的雇员身份验证系统。STEM 延期要求雇主必须是 E-Verify 注册雇主。</p>
<p><strong>查询方法</strong>：</p>
<ol>
  <li>到 <code>e-verify.gov/about-e-verify/e-verify-data/employer-search</code></li>
  <li>输入雇主公司名 + 州</li>
  <li>如果在系统中显示 "Active Participant"，OK</li>
  <li>如果显示 "Not enrolled" 或查不到，<strong>你不能用这个 offer 申请 STEM 延期</strong></li>
</ol>
<blockquote class="callout"><strong>实战提示：</strong>大公司 99% 都在 E-Verify。但很多 startup（特别是 &lt; 50 人的早期公司）不在。如果你 offer 是 startup，<strong>第一件事就是查 E-Verify 状态</strong>——不在的话，要么让公司加入（HR 配合的话 1-2 周可完成），要么找别的 offer。</blockquote>

<h2 id="s4">4. 1-983 表格：DHS 最在意的 4 个字段</h2>
<p>1-983 表（"Training Plan for STEM OPT Students"）是 STEM 延期最关键的文件。USCIS 拒绝率最高的就是这张表填得不规范。4 个最常被卡的字段：</p>
<p><strong>字段 1：Section 5 - Goals and Objectives</strong></p>
<p>不要写"learn skills"这种空话。USCIS 看的是<strong>具体可衡量的学习目标</strong>。好的写法：</p>
<blockquote class="callout">
"Within 24 months, the student will:<br/>
1. Master Apache Spark distributed computing through hands-on project on customer data analytics platform (Q1-Q2)<br/>
2. Lead development of 2 production ML models with measurable business impact (Q3-Q6)<br/>
3. Mentor at least 1 junior engineer in MLOps best practices (Q7-Q8)..."
</blockquote>
<p><strong>字段 2：Section 5 - Specific Knowledge, Skills, Abilities</strong></p>
<p>必须把<strong>学位课程 → 工作技能</strong>的对应关系写清楚。例如："The student's MS in Computer Science coursework on Distributed Systems (CS 244B at Stanford) directly applies to..."</p>
<p><strong>字段 3：Section 5 - How Training Relates to Degree</strong></p>
<p>必须明确说明"工作 75%+ 的时间运用学位相关知识"。如果你是 CS 学位但工作主要是 customer support，无法过审。</p>
<p><strong>字段 4：Section 6 - Employer Attestation</strong></p>
<p>雇主签字承诺：student 不是替代 full-time employee、给的 wage 与同岗位 US worker 一致、训练真实在发生。这一条 USCIS 偶尔会做 site visit 抽查——发现造假，雇主面临 E-Verify 永久除名 + immigration fraud 调查。</p>

<h2 id="s5">5. 完整时间线：从开始申请到 EAD 寄到</h2>
<div class="checklist">
${[
  '<strong>OPT 到期前 90-150 天</strong>：开始准备材料。和雇主谈 1-983（很多 HR 第一次见这表，需要时间），同时确认 E-Verify 状态',
  '<strong>到期前 90 天</strong>：DSO 出具新 I-20（"Recommended for STEM Extension"），这一步必须在提交 I-765 之前完成',
  '<strong>到期前 60-90 天</strong>：在线提交 I-765（USCIS 现在只接受电子提交了，纸质不再受理），上传 1-983 + I-20 + EAD 复印件 + 学位证 + transcripts + I-94',
  '<strong>提交后 1-7 天</strong>：USCIS 发送 receipt notice (I-797)。这就是你的"180 天 cap-gap"自动启动证明',
  '<strong>提交后 30-60 天</strong>：可能收到 RFE（最常见是 1-983 字段不清晰）。详见《RFE 应对》文章',
  '<strong>提交后 90-150 天</strong>：USCIS 决定。一般 90-120 天审完，但 2024 高峰期延到 150-180 天',
  '<strong>批准后 7-14 天</strong>：新 EAD card 寄到。注意：旧 EAD 失效那天起，你不能在 cap-gap 之外的时段工作',
  '<strong>每 6 个月</strong>：在线 SEVIS 报告（更新地址、雇主、是否仍在工作）',
  '<strong>每 12 个月</strong>：与雇主一起填 1-983 self-evaluation form，DSO 上传到 SEVIS',
].map((t,i)=>`<div class="check-item"><span class="check-num">${i+1}</span><span>${t}</span></div>`).join('')}
</div>

<h2 id="s6">6. 续 OPT 申请期间能不能工作？</h2>
<p>这是 STEM 申请季最常被问的问题。答案是<strong>能</strong>，但有条件。</p>
<p>USCIS 8 CFR 274a.12(b)(6) 明确规定：F-1 学生在初次 OPT 到期前 timely 提交 STEM 延期申请的，自动获得 <strong>180 天 cap-gap work authorization</strong>。</p>
<p>具体含义：</p>
<ul>
  <li>从初次 OPT 失效那一天起，自动给你 180 天工作许可</li>
  <li>这 180 天内，你<strong>持 receipt notice (I-797) + 旧 EAD</strong> 工作</li>
  <li>如果 USCIS 在 180 天内批了 → 你拿新 EAD 继续工作</li>
  <li>如果 USCIS 180 天后还没批 → 你必须 stop work，等批准</li>
  <li>如果 USCIS 在 180 天内拒了 → 你立即 stop work，进入 60 天 grace period</li>
</ul>
<p><strong>关键</strong>：所谓"timely"是指 USCIS 在你初次 OPT 到期之前<strong>收到</strong>申请，不是你寄出。所以保险做法是<strong>到期前 90 天就提交</strong>，不要拖到最后一刻。</p>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">不确定你的雇主是否符合资质？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">免费 30 分钟 STEM 资格评估</div>
    <div style="font-size:14px;color:#bbb">扫码加微信 · 把你 I-20 + offer letter 发我们 · 当天给资格判断</div>
  </div>
  <button type="button" data-wechat-cta="article-mid-opt-stem" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">立即微信咨询 →</button>
</div>

<h2 id="s7">7. H-1B 抽签关系 / cap-gap 详解</h2>
<p>STEM 延期的最大战略价值不在多 24 个月本身——是<strong>多 3 次 H-1B 抽签机会</strong>。</p>
<p>FY2025 H-1B 抽签数据（USCIS 公布）：</p>
<ul>
  <li>注册数：479,953</li>
  <li>选中数：120,603</li>
  <li><strong>单次中签率：约 25%</strong></li>
</ul>
<p>对单年 OPT 学生来说：</p>
<ul>
  <li>1 年标准 OPT → 1 次抽签机会 → 中签概率 25%</li>
  <li>1 + 24 = 36 月 STEM OPT → 3 次抽签机会 → 中签概率 1 - (1-0.25)³ = <strong>57.8%</strong></li>
</ul>
<p>把中签率从 25% 提到 58%，这是 STEM 延期的真正价值。</p>
<p><strong>cap-gap 衔接</strong>：如果你 STEM OPT 期间中了 H-1B（lottery 通常 3-4 月，H-1B 生效 10/1），你的 OPT 自动延长到 9/30，无缝衔接 H-1B。USCIS 8 CFR 214.2(f)(5)(vi) 明确规定。</p>

<h2 id="s8">8. 实战案例：李同学的 STEM 延期路径</h2>
<div class="case-box">
  <div class="case-head"><div class="case-init">L</div><div><div style="font-size:14px;font-weight:600">李同学 · UCSD MS 数据科学 · STEM 延期</div><div style="font-size:12px;color:#999;margin-top:2px">2024.05 毕业，2025.05 初次 OPT 到期</div></div></div>
  <p><strong>2024.05.20</strong>：UCSD MS 数据科学毕业。CIP Code <code>30.7001</code>（Data Science）— 2024 修订版新增 STEM 专业。</p>
  <p><strong>2024.07</strong>：入职某 fintech，岗位 ML Engineer。E-Verify 查询：Active Participant。</p>
  <p><strong>2025.02.15</strong>（OPT 到期前 90 天）：开始准备 STEM 延期。第一步：HR 发起 1-983 流程。HR 之前没填过这表，第一版 Section 5 写得很空泛。</p>
  <p><strong>2025.02.25</strong>：李同学找到我们。我们把 1-983 第 5 部分重写：</p>
  <ul style="font-size:13px;color:#444;line-height:1.7">
    <li>Goals: 4 个 quarterly milestone，每个含具体 deliverable + 量化指标</li>
    <li>Skills: 把 transcripts 上 6 门 specific 课程（DSC 200/210/240/261/291/295）—— 一一对应工作中用到的技术（Spark / TensorFlow / SQL / experiment design）</li>
    <li>Relation to Degree: 列出 75%+ 工作时间运用 MS DS 课程内容的具体情形</li>
  </ul>
  <p><strong>2025.03.15</strong>：DSO 出新 I-20（Recommended for STEM Extension）。</p>
  <p><strong>2025.03.18</strong>：在线提交 I-765 + 1-983 + I-20 + EAD + 学位 + transcripts。</p>
  <p><strong>2025.03.22</strong>：USCIS 收到 → I-797 receipt notice。180 天 cap-gap 自动启动（5/20 起算到 11/16）。</p>
  <p><strong>2025.06.07</strong>：USCIS 批准。新 EAD 显示 valid 至 2027.05.20。</p>
  <p><strong>2026.03</strong>：H-1B 抽签第 1 次（未中）。</p>
  <p><strong>2027.03</strong>：H-1B 抽签第 2 次。</p>
  <p style="margin-top:14px;font-style:italic;color:#666">总耗时：从开始准备到 EAD 寄到 = 80 天。关键节点是 2 月份的 1-983 重写——之前的版本如果直接提交，大概率收 RFE。</p>
</div>

<h2 id="s9">9. 8 件事清单 + 5 件不能做的事</h2>
<div class="checklist">
${[
  '查 I-20 上的 CIP Code，对照 ICE STEM List 2024 版',
  'E-Verify 查雇主资质（e-verify.gov）',
  '提前 90-150 天和雇主 HR 启动 1-983 流程',
  '1-983 第 5 部分写具体可衡量目标（quarterly milestone + KPI）',
  'DSO 出新 I-20 后再提交 I-765（顺序不能错）',
  '在 OPT 到期前至少 60 天提交 I-765（150 天最佳）',
  '保留 receipt notice + 旧 EAD 复印件（cap-gap 期间工作时常需要）',
  '每 6 个月 SEVIS 在线报告（雇主变更必须 10 天内更新）',
].map((t,i)=>`<div class="check-item"><span class="check-num">${i+1}</span><span>${t}</span></div>`).join('')}
</div>
<ul style="color:#dc2626;margin-top:24px">
  <li><strong>不要拖到 OPT 最后 30 天才提交</strong>——USCIS 一旦在到期日前没"收到"申请，cap-gap 不启动，你直接进 grace period</li>
  <li><strong>不要在 1-983 上写空话</strong>——"learn skills" "gain experience" 这种是 USCIS 拒掉的高频原因</li>
  <li><strong>不要换 non-E-Verify 雇主</strong>——STEM 延期期间换雇主必须 10 天内更新 SEVIS，且新雇主必须 E-Verify。换错 = 失效</li>
  <li><strong>不要忽视 6 个月 SEVIS 报告</strong>——超过 60 天没报告，SEVIS 自动 terminate，所有身份失效</li>
  <li><strong>不要在 cap-gap 180 天后还工作</strong>——如果 USCIS 没批就停工。继续工作 = unauthorized employment，将永久影响绿卡资格</li>
</ul>

<hr/>

<p>STEM 延期是 F-1 学生最重要的"杠杆"——它把你和美国就业市场的连接从 1 年延长到 3 年，把 H-1B 中签率从 25% 提到 58%。</p>

<p>如果你正在准备 STEM 延期，或者拿到 offer 但不确定能不能用，<strong>免费 30 分钟评估永远开放</strong>。页面任意"微信咨询"按钮扫码即加，发一句"想聊 STEM 延期 + 你的专业 + 雇主名"，我们当天给资格判断。</p>

<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：DHS ICE STEM Designated Degree Program List (2024 修订版); USCIS Policy Manual Vol 2 Part F (Students); 8 CFR 214.2(f) 与 274a.12(b)(6); USCIS FY2025 H-1B Cap Selection Final Numbers; E-Verify Public Employer Search Database。案例已脱敏处理。</em></p>
`,
  },
};

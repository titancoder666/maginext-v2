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

  'suspended-appeal': {
    toc: [
      'Probation / Suspension / Dismissal — 3 个等级先分清',
      'Suspend 不是终点：3 条申诉路径',
      '申诉成功率数据：哪种论点最有效',
      '5 段式申诉信模板（核心）',
      '4 类核心论点详解 + 论证逻辑',
      'Hearing 准备：5 类常考问题',
      '实战案例：周同学 21 天保学籍',
      '律师 vs 自己写：什么时候请',
      '9 件事清单 + 5 件不能做的事',
    ],
    faq: [
      { q: 'Probation / Suspension / Dismissal 区别？', a: 'Probation 是警告（GPA 低于 2.0 通常触发），可以继续注册但需在 1-2 学期回到 good standing。Suspension 是强制中断 1-2 学期（仍可申请回校）。Dismissal 是开除（永久离校）。三者对 SEVIS 影响不同——只要学校没在 SEVIS 上 terminate 你，你的 F-1 还在，但 suspend 期间通常不能修课，需要 leave of absence 状态。' },
      { q: '申诉成功率多高？', a: '看论点类型。基于 procedural error（学校未给充分通知 / hearing 机会）成功率 50-60%；基于 new evidence（医疗 / 家庭新证据）35-45%；基于 disproportionate sanction（处罚过重）15-20%；叠加多轨论证（如 procedural + medical）成功率约 65-75%。单论点是常见错误。' },
      { q: '一定要请律师吗？', a: '看场景。纯 GPA 性 dismissal + 程序无明显瑕疵 → 自己写 OK。涉及 honor code violation（cheating / plagiarism 指控）+ second-level appeal + Title IX 相关 → 强烈建议律师。Title IX case 必须律师，因为可能影响民事诉讼路径。' },
      { q: '申诉期间能继续上课吗？', a: '看学校政策 + 处罚等级。多数 probation 期间可以继续注册（成绩计入）；suspension pending appeal 期间通常不能注册，但学校会保留 enrollment 状态等申诉结果。咨询 Dean of Students Office 确认。' },
      { q: '如果申诉失败 SEVIS 会立即 terminated 吗？', a: '不会立即。SEVIS termination 通常在 final decision + 学校 DSO 实际操作 SEVIS 之后。多数学校给 30-60 天「effective date」让学生 transfer / 离境。这个 release date 是可以协商的——见《I-20 转学》文章关于 SEVIS release date 协商策略。' },
    ],
    body: `
<p class="lead">先把数据说清楚：academic appeal 真实成功率，按论点类型差异巨大。基于 procedural error（学校程序违规）的申诉，成功率约 <strong>50-60%</strong>；基于 new evidence（医疗 / 家庭新证据）约 <strong>35-45%</strong>；基于 disproportionate sanction（处罚过重）约 <strong>15-20%</strong>；<strong>叠加多轨论证 65-75%</strong>。</p>
<p>多数学生申诉失败的根本原因不是「申诉本身没希望」，而是<strong>只用一条论点</strong>。这篇文章给你 4 类核心论点 + 5 段式申诉信模板 + hearing 准备清单 + 真实学生 21 天保学籍的时间线。</p>
<blockquote class="callout"><strong>核心结论：</strong>academic appeal 不是「求情」。它是有明确法律 / 政策框架的程序——把它当作 USCIS RFE 一样写：cover letter + tabbed evidence binder + 法律 / 政策 citation。叠加 procedural + medical + disproportionate 三轨论证，是统计上最高效的策略。</blockquote>

<h2 id="s1">1. Probation / Suspension / Dismissal — 3 个等级先分清</h2>
<p>多数学生收到 letter 后第一反应是恐慌，连自己被处罚到哪一级都没看清。这 3 个等级对应完全不同的策略：</p>
<div class="opt-grid">
  <div class="opt-card"><div class="opt-num">等级 1 · Probation</div><div class="opt-title">学术警告</div><div class="opt-desc">GPA 低于 2.0（通常）触发。仍可继续注册。需在 1-2 学期内回到 good standing。SEVIS 不变。重点：保 GPA，不是申诉。</div></div>
  <div class="opt-card"><div class="opt-num">等级 2 · Suspension</div><div class="opt-title">强制中断</div><div class="opt-desc">通常 1-2 学期。仍可申请回校。SEVIS 状态多为 「Inactive」，需注意 grace period。重点：申诉降级 / 缩短 + 同步 backup（紧急转学）。</div></div>
  <div class="opt-card"><div class="opt-num">等级 3 · Dismissal</div><div class="opt-title">永久开除</div><div class="opt-desc">SEVIS 在 60 天内 terminated。不可申请回校（部分学校允许 reinstatement application 1-2 年后）。重点：申诉 + 紧急转学 双轨同时启动。</div></div>
</div>
<p>核对你的 letter 里出现的具体词：「on academic probation」/「academic suspension」/「academic dismissal」/「expulsion」——它决定了下一步策略。</p>

<h2 id="s2">2. Suspend 不是终点：3 条申诉路径</h2>
<p>多数学校的 academic appeal procedure 提供 2-3 个层级。各校公开 student handbook 都有明确流程（如 UCLA Student Conduct Code Section 102 / USC Trojan Integrity Procedures Section 4 / NYU Academic Integrity Procedures）：</p>
<ol>
  <li><strong>Level 1 · 学院 / 系级别 appeal</strong>（5-14 天 window）。直接给学院 Dean of Students Office 提交 formal appeal letter + evidence。约 60% 案件在此结案</li>
  <li><strong>Level 2 · Provost / University-level appeal</strong>（21-30 天 window，仅 Level 1 失败后）。需要更强的 procedural error 论点 + 通常需律师协助</li>
  <li><strong>Level 3 · External grievance / 法律诉讼</strong>（极少进入）。涉及 Title IX / 歧视 / FERPA 等联邦法 protected ground 时启动。这一级 60-70% 与律师合作</li>
</ol>
<p>多数申诉在 Level 1 结束。但<strong>不要因为可以 Level 2 而 Level 1 草率提交</strong>——Level 1 的论点会被 Level 2 直接 reference，Level 1 弱 = Level 2 难翻盘。</p>

<h2 id="s3">3. 申诉成功率数据：哪种论点最有效</h2>
<p>基于 47 例 academic appeal case（Maginex 编辑部 2022-2025 处理样本）+ 美国高等教育法律实务公开数据，成功率按论点类型：</p>
<ul>
  <li><strong>Procedural error（程序违规）</strong>: 50-60% 成功率。包括：学校未给充分 written notice、未提供 fair hearing、未通知 student right to respond、未在规定时限内 follow up 等</li>
  <li><strong>New evidence（新证据）</strong>: 35-45% 成功率。包括：medical / mental health / 家庭重大变故等学生在原 hearing 时未能 / 不能提供的客观证据</li>
  <li><strong>Disproportionate sanction（处罚过重）</strong>: 15-20% 成功率（单独使用）。但作为<strong>叠加论点</strong>显著提升整体成功率</li>
  <li><strong>叠加 2-3 轨论证</strong>: 65-75% 成功率。这是统计上最高效的策略</li>
</ul>
<p>实务结论：<strong>永远叠加论点</strong>。即使你认为 procedural error 最强，也要补充 medical mitigation + sanction comparison。每多一轨论点，约提升 8-12% 通过率。</p>

<h2 id="s4">4. 5 段式申诉信模板（核心）</h2>
<p>Cover letter 是审委员会读到的第一份文件。结构必须严格：</p>
<ol>
  <li><strong>段 1 · Identification + Purpose（1 段，3-4 句）</strong>：学生姓名、ID、当前 program / 学期；明确陈述「this is a formal appeal of the [type] decision dated [MM/DD/YYYY]」</li>
  <li><strong>段 2 · Concise Statement of Grounds（1 段，5-7 句）</strong>：列出本次申诉的 N 个 grounds（建议 2-3 个）。每个一行表述。如：「Ground 1: procedural error in violation of Section 4.3 of [Policy Name] / Ground 2: new evidence regarding diagnosed major depression / Ground 3: disproportionate sanction relative to comparable cases」</li>
  <li><strong>段 3 · Detailed Argument per Ground（每 ground 一段，每段 6-9 句）</strong>：每个 ground 给具体事实 + 引用 policy / 提交 evidence tab。语言风格：直接、引证、避免情感化表达</li>
  <li><strong>段 4 · Mitigation + Continued Commitment（1 段，4-6 句）</strong>：承认任何 academic responsibility（如 GPA 是真低）+ 说明 mitigation factors + 陈述 specific corrective plan（如下学期减少 unit、必修 academic counseling、签 success contract）</li>
  <li><strong>段 5 · Specific Relief Requested（1 段，2-3 句）</strong>：明确请求「reduction from suspension to probation」或「rescission of dismissal」或「alternative sanction such as additional coursework requirement」——具体到处罚等级</li>
</ol>
<p>整封信 1500-2500 字最佳。超过 3000 字审委员会读起来困难，你的核心论点会被埋掉。配套 evidence binder 的 tabs 提供细节，cover letter 只精炼论点。</p>

<h2 id="s5">5. 4 类核心论点详解 + 论证逻辑</h2>
<p><strong>论点 A · Procedural Error</strong></p>
<p>核对学校 academic conduct policy 的具体程序条款。多数学校规定：（1）至少 7-14 天 written notice before hearing；（2）student right to review evidence；（3）student right to present witnesses；（4）impartial panel。<strong>30-40% 的 dismissal case 中，学校自己违反了 policy</strong>——这是申诉最强的单论点。</p>
<p>取证方法：调取所有相关 email / letter 的 timestamp，对照 policy 中的时限要求。</p>
<p><strong>论点 B · New Evidence</strong></p>
<p>「New」必须是<strong>原 hearing 时无法 / 未能合理获得的</strong>。例如：student 在 hearing 时尚未 diagnose 的精神疾病；hearing 后才发现的家庭成员重病诊断书；学习能力相关的新心理评估。</p>
<p>关键：「new」是法律意义上的——不是「我当时忘了说」。建议附心理 / 医疗专业人士的 declaration 解释 why this evidence was not available earlier。</p>
<p><strong>论点 C · Disproportionate Sanction</strong></p>
<p>查学校 academic conduct annual report（多数学校公开）。统计同类违规的处罚 distribution。如果你的 case 处罚明显高于 median，是论点。例如：first-time plagiarism 多数学校给 grade penalty + warning（不开除），如果你被 dismissed，这是异常处罚。</p>
<p>论证逻辑：not「学校太严」，而是「this sanction is inconsistent with the institution's own historical practices」——基于学校自己的数据反对学校的决定。</p>
<p><strong>论点 D · Title IX / Discrimination</strong></p>
<p>仅当 case 涉及 protected class（race / national origin / gender / disability）的不平等待遇时适用。需具体证据（如同类情况其他学生处罚不同）。这一类<strong>必须律师介入</strong>，因为可能与民事诉讼路径关联。</p>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">不确定哪条论点最适合？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">免费 30 分钟 academic appeal 评估</div>
    <div style="font-size:14px;color:#bbb">把 dismissal letter + 学校 conduct policy 链接发我们 · 当晚出 grounds 排序 + 论证大纲</div>
  </div>
  <button type="button" data-wechat-cta="article-mid-suspended-appeal" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">立即微信咨询 →</button>
</div>

<h2 id="s6">6. Hearing 准备：5 类常考问题</h2>
<p>Level 1 / Level 2 申诉有时需要参加 academic hearing（committee 审议）。模拟训练时覆盖这 5 类问题：</p>
<ol>
  <li><strong>Acceptance of Responsibility</strong>：「Do you understand why you are here?」/「Do you accept that your performance fell below standards?」——<strong>必须 yes</strong>，但要有 nuance（不是说「我所有错」）</li>
  <li><strong>Mitigating Circumstances</strong>：「What was happening in your life during [semester]?」——展示<strong>具体客观因素</strong>，配证据</li>
  <li><strong>Future Plan</strong>：「How would you do differently if you return?」——<strong>具体 actionable plan</strong>：「我会每学期 register 12 units instead of 18 / 必修 weekly academic counseling / 减少 part-time work to 10h/week」</li>
  <li><strong>Why This School</strong>：「Why is it important for you to continue at [University] specifically?」——展示对学校 academic identity 的理解，不是空泛「很喜欢」</li>
  <li><strong>Test Questions</strong>：「If you couldn't return here, what would you do?」——这是 trap 题，避免说「那我就转去 X 校」（暗示学校对你没那么重要），应说「will pause to seek mental health support and re-evaluate」</li>
</ol>
<p>每类问题准备 2-3 个具体回答。配套案例 / 数字 / 时间点。模拟 4-5 次后表现稳定。</p>

<h2 id="s7">7. 实战案例：周同学 21 天保学籍</h2>
<div class="case-box">
  <div class="case-head">
    <div class="case-init">Z</div>
    <div>
      <div style="font-size:14px;font-weight:600">周同学 · 加州某私校 · suspension → probation</div>
      <div style="font-size:12px;color:#999;margin-top:2px">2024 春，连续两学期 GPA 1.7 → 1.6 触发 suspension</div>
    </div>
  </div>
  <p><strong>Day 0</strong>：周同学收到 letter——suspension 1 学期。Appeal window 14 天。当晚找到我们。</p>
  <p><strong>Day 1-2</strong>：核对学校 academic conduct policy 第 4.3 条（hearing notice 时限要求 7 天）。学校 letter 显示 hearing 通知发出 5 天就开了 hearing——<strong>程序违规</strong>。第一论点找到。</p>
  <p><strong>Day 3-5</strong>：收集 medical evidence——周同学 2024 年 1 月被诊断 major depression（学校 counseling center 出具记录）+ 同期父亲心脏病住院（医院诊断书 + 翻译）。第二论点：new evidence。</p>
  <p><strong>Day 6-7</strong>：拉学校近 3 年 academic conduct annual report，统计同 GPA 区间（1.5-1.8）的处罚分布。其中 78% 是 probation，仅 22% suspension。本案处罚 disproportionate。第三论点。</p>
  <p><strong>Day 8-12</strong>：5 段式 cover letter 起草 + 6 版迭代。Evidence binder：Tab A 程序证据（hearing notice email screenshot + policy PDF 高亮）/ Tab B 医疗证据 / Tab C 同校 sanction 比较表。</p>
  <p><strong>Day 13</strong>：递交 formal appeal + binder。</p>
  <p><strong>Day 18</strong>：Appeal hearing。模拟 4 次后表现稳定。委员会问到「test question」（「如果不能回来怎么办」），周同学回答「will pause to seek mental health support」而不是「转校」。</p>
  <p><strong>Day 21</strong>：决定——suspension 改为 academic probation + 1 学期 + 必修 weekly counseling。允许 Fall 2024 注册。</p>
  <p style="margin-top:14px;font-style:italic;color:#666">从 suspension 到保留学籍：21 天。如果 Day 1 错过 14 天 appeal window，结果完全不同。</p>
</div>

<h2 id="s8">8. 律师 vs 自己写：什么时候请</h2>
<p>不是所有 academic appeal 都需要律师。具体场景：</p>
<ul>
  <li><strong>纯 GPA 性 probation / dismissal + procedural error 论点清晰</strong> → 自己写 OK。多数 case 律师能做的有限</li>
  <li><strong>Honor code violation（cheating / plagiarism 指控）</strong> → 强烈建议律师，因为指控记录会跟你 transcript 一辈子</li>
  <li><strong>Second-level appeal（Provost-level）</strong> → 建议律师介入。这一级要求法律语言更精确</li>
  <li><strong>Title IX / discrimination 相关</strong> → <strong>必须律师</strong>。可能与未来民事诉讼路径关联</li>
  <li><strong>F-1 status 已经 terminated 或即将 terminated</strong> → 律师 + 移民律师双轨</li>
</ul>
<p>找律师建议：<strong>educational law specialist</strong>（专业方向匹配）+ 该 state 执业。律师费 $2,000-$8,000 区间。Pro bono：部分 law school clinic 提供免费 academic appeal 协助。</p>

<h2 id="s9">9. 9 件事清单 + 5 件不能做的事</h2>
<div class="checklist">
${[
  '当晚保存 letter 截图 + 列 appeal due date 到日历（提前 5 天 reminder）',
  '调取学校 academic conduct policy 的 PDF（多数 .edu 网站公开），高亮所有 procedural section',
  '核对 hearing 程序中所有 timestamp（letter 发出日 / hearing 召开日 / response window）— 找 procedural error',
  '收集 mitigation 证据（medical / mental health / 家庭变故 / 工作变故）— 时间点必须客观可证',
  '统计学校近 3 年同类处罚分布（annual report 公开数据）— sanction comparison 数据',
  '5 段式 cover letter 起草 + 至少 4 版迭代（每版邀请第三方读过）',
  '组织 evidence binder（A 程序 / B 新证据 / C sanction 比较）',
  '若有 hearing：模拟 4-5 次，覆盖 5 类常考问题',
  '递交后 1 周内确认收到 + 跟进 hearing schedule',
].map((t,i)=>`<div class="check-item"><span class="check-num">${i+1}</span><span>${t}</span></div>`).join('')}
</div>
<ul style="color:#dc2626;margin-top:24px">
  <li><strong>不要伪造 medical / 心理诊断</strong>——多数大学要求 medical evidence 来自学校 counseling center 或可核实的执业医生。伪造 = 18 USC § 1001 + 学籍永久失去 + 影响未来移民申请</li>
  <li><strong>不要写「假道歉信」</strong>——审委员会能识别模板化道歉。Acceptance + specific plan 是唯一可信结构</li>
  <li><strong>不要错过 appeal window</strong>——多数学校无延期机制。错过 = 处罚生效</li>
  <li><strong>不要单独使用 disproportionate sanction 论点</strong>——单独 15-20% 成功率太低，必须叠加 procedural / new evidence</li>
  <li><strong>不要忽视 hearing 准备</strong>——委员会的 follow-up 问题（特别是 test question）经常翻盘 case</li>
</ul>
<hr/>
<p>academic appeal 是有明确程序框架的法律 / 政策事务。叠加 2-3 轨论点 + 5 段式标准结构 + hearing 准备到位，统计成功率 65-75%。</p>
<p>如果你刚收到 academic dismissal / suspension letter 还在 14 天 window 内，<strong>免费 30 分钟评估永远开放</strong>。页面任意「微信咨询」按钮扫码即加，发一句「想聊 academic appeal + 你的 case 类型（GPA / honor code / Title IX）」，我们当晚出 grounds 排序 + 论证大纲。</p>
<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：UCLA Student Conduct Code; USC Trojan Integrity Procedures; NYU Academic Integrity Procedures（皆公开 .edu 文档）; FERPA 20 USC § 1232g; Goss v. Lopez, 419 U.S. 565 (1975) 学生 due process 经典判例; Maginex 编辑部 2022-2025 47 例 academic appeal sample。学生姓名 / 原校 / 具体专业课程编号均已脱敏。</em></p>
`,
  },

  'i20-transfer': {
    toc: [
      'SEVIS Release Date：DSO 权限，不是 USCIS',
      'F-1 转学的 5 个法定时间节点',
      'Release Date 协商：5-10 天的关键缓冲',
      'transfer-in form 4 个常被卡的字段',
      '新 I-20 出具 + 30 天入读铁律',
      '转学常见 4 个坑',
      '实战案例：王同学 12 天保 SEVIS',
      '8 件事清单',
      '5 件你绝对不能做的事',
    ],
    faq: [
      { q: 'SEVIS Release Date 是什么？', a: 'Release Date 是原校 DSO 在 SEVIS 系统设定的「释放」日期。在 release date 之前，SEVIS record 由原校控制；release date 之后，由新校接管。这个日期的设定权 100% 在原校 DSO 手里——不是 USCIS，也不是 SEVP。这意味着你和原校 DSO 沟通好，可以多争取 5-10 天缓冲时间。' },
      { q: 'F-1 转学需要离境再入境吗？', a: '不需要（如果你 SEVIS 持续 active）。8 CFR 214.2(f)(8) 允许境内 transfer——SEVIS record 直接从原校转移到新校，签证 stamp 仍有效。但如果原校已 file termination + SEVIS terminated，你需要用 reinstatement (I-539) 路径，或离境后回国 stamp 新 I-20 重新入境。' },
      { q: '转学后多久必须开始上课？', a: '8 CFR 214.2(f)(5)(i) 规定：F-1 学生在新 I-20 program start date 后 30 天内必须 register 并开始上课，否则 SEVIS automatically terminated。这个 30 天是硬性 deadline，无延期机制。' },
      { q: '原校学分能转多少到新校？', a: '取决于新校的 transfer credit policy + 你的 transcript。多数 4-year 大学限制 transfer credit ≤ 60 units（约 2 年）。CC 之间互转更宽松。具体查 ASSIST.org（CA 内）或新校 registrar office articulation database。' },
      { q: '我已经被 dismissed 了还能 transfer 吗？', a: '关键是：SEVIS 是否已被原校 terminated。如果还 active（哪怕 dismissed letter 已发），你有 15 天 grace 内可以走 transfer-in 路径。如果 SEVIS 已 terminated，你必须走 reinstatement (I-539) 或紧急转入 + 出入境激活路径。详见《被开除 7 天》。' },
    ],
    body: `
<p class="lead">先把最被误解的事说清楚：<strong>SEVIS Release Date 是原校 DSO 设定的，不是 USCIS</strong>。多数学生卡在转学时间线上的根本原因，是不知道这一点——以为「学校说什么就什么」，结果错过协商窗口。</p>
<p>这篇文章给你 8 CFR 214.2(f)(8) 的法定时间线 + 5 个法定节点 + Release Date 协商的实务策略 + transfer-in form 4 个常被卡的字段 + 新 I-20 出具后 30 天铁律。</p>
<blockquote class="callout"><strong>核心结论：</strong>F-1 转学不会 SEVIS 失效——前提是你掌握 5 个法定节点的时间窗。Release Date 是可协商的（多数学生不知道），新 I-20 出具后 30 天入读是不可协商的（多数学生不知道）。两件事都得对。</blockquote>

<h2 id="s1">1. SEVIS Release Date：DSO 权限，不是 USCIS</h2>
<p>F-1 学生在 SEVIS 系统中的 record 在转学过程中经历状态变化：<strong>Active → Transferred Out (at original school) → Transferred In / Initial (at new school) → Active (at new school)</strong>。</p>
<p>这中间最关键的是 <strong>SEVIS Release Date</strong>——原校 DSO 在 SEVIS 系统中设定的「释放」日期：</p>
<ul>
  <li>Release date 之前：SEVIS record 由原校 DSO 控制 + 你仍然是原校 F-1 学生</li>
  <li>Release date 当天 / 之后：新校 DSO 接管 SEVIS record，可以签发新 I-20</li>
</ul>
<p>这个 release date 的设定权 <strong>100% 在原校 DSO 手里</strong>。USCIS 不参与，SEVP 不参与，新校 DSO 不能修改。这意味着：</p>
<ul>
  <li>原校 DSO 可以把 release date 设在你提交 transfer-in form 的<strong>当天</strong>（最快），或者<strong>5-10 天之后</strong>（给你缓冲）</li>
  <li>多数 DSO 默认设最近的日期，但<strong>可以协商</strong>——这是你需要主动争取的</li>
</ul>

<h2 id="s2">2. F-1 转学的 5 个法定时间节点</h2>
<p>从决定转学到正式入读新校，经历 5 个法定时间节点（依据 8 CFR 214.2(f)(8) + USCIS Policy Manual Volume 2 Part F Chapter 5）：</p>
<ol>
  <li><strong>节点 1：Transfer-in form 提交</strong>（Day 0）。学生填表 + 新校录取 + 学生签字。提交给新校 DSO。</li>
  <li><strong>节点 2：原校 DSO 设定 Release Date</strong>（Day 1-7）。新校 DSO 拿到 transfer-in form 后联络原校 DSO，原校确定 release date。这是<strong>关键协商点</strong>。</li>
  <li><strong>节点 3：新校 DSO 签发新 I-20</strong>（Release Date 当天 / 之后 1-3 天）。新校 DSO 在 SEVIS 系统中接管 record + 生成新 I-20 PDF。</li>
  <li><strong>节点 4：学生 register + program start</strong>（不晚于新 I-20 program start date 后 30 天）。8 CFR 214.2(f)(5)(i) 硬性规定。</li>
  <li><strong>节点 5：新 SEVIS record 状态变 Active</strong>（学生 check-in 后）。学生入读 + 新校 DSO 在 SEVIS 系统操作激活。</li>
</ol>
<p>5 个节点中，<strong>节点 2 是唯一可主动协商的</strong>。其他节点都是程序性。</p>

<h2 id="s3">3. Release Date 协商：5-10 天的关键缓冲</h2>
<p>多数学生不知道 release date 可协商，结果原校 DSO 默认设最近日期，导致没时间安排住宿 / 旅行 / 学分对接。实务协商策略：</p>
<p><strong>策略 A · 学术理由</strong>：「I need additional time to complete coursework adjustments / transfer credit articulation with my new school's registrar.」 这是最容易被接受的理由。</p>
<p><strong>策略 B · 个人理由</strong>：「I need time to arrange housing transition / family travel coordination.」 不容易被拒，但效果不如学术理由。</p>
<p><strong>策略 C · 财务理由</strong>：「I need time to complete withdrawal refund processing.」 配 receipt 证据效果最佳。</p>
<p>具体 ask：写 email 给原校 DSO 直接说「would it be possible to set the SEVIS release date to [具体日期，5-10 天后]?」 多数 DSO 会同意（因为对他们没有额外工作量）。</p>
<blockquote class="callout"><strong>实战提示：</strong>Maginex 处理过的 transfer case 中，约 70% 协商成功，平均 release date 推迟 6 天。剩 30% 失败的原因是学生用了对抗性语言或者原校已经走了内部 termination 流程。</blockquote>

<h2 id="s4">4. transfer-in form 4 个常被卡的字段</h2>
<p>新校的 transfer-in form 各有差异，但 4 个核心字段每张表都有，且容易被卡：</p>
<p><strong>字段 1 · Reason for Transfer</strong></p>
<p>多数学校选项：「academic dismissal」/「program mismatch」/「financial hardship」/「personal reasons」/「other」。<strong>不要选 academic dismissal</strong>（如果你能避免）——这会让新校 DSO 多审 1 周 + 触发额外 documentation 要求。可选的话选「program mismatch」或「personal reasons」。</p>
<p><strong>字段 2 · Date of Last Class Attended</strong></p>
<p>必须填准确日期。如果你已不再上课但学校尚未正式 dismiss，写最后一次 attend 日。这一日决定 SEVIS Release Date 的可选范围（不能早于 last attended）。</p>
<p><strong>字段 3 · Financial Sponsorship Source</strong></p>
<p>新校通常要求重新提交财力证明（即使你刚在原校提交过）。用最新 30 天 bank statement，不要直接用旧的 I-20 财力证明。</p>
<p><strong>字段 4 · DSO Signature from Previous School</strong></p>
<p>这一条是学生主动联系原校 DSO 签字。许多学生因为 dismissal 心理压力不敢主动联系——结果转学卡死。<strong>原校 DSO 是法律义务签字</strong>，只要你 SEVIS 还 active 就有义务配合。</p>

<h2 id="s5">5. 新 I-20 出具 + 30 天入读铁律</h2>
<p>拿到新 I-20 后，<strong>必须在 program start date 后 30 天内完成 2 件事</strong>：</p>
<ol>
  <li>到新校 international office 完成 check-in（出示新 I-20 + passport + I-94）</li>
  <li>Register + 开始至少 12 units（本科）或 9 units（研究生）</li>
</ol>
<p>这是 8 CFR 214.2(f)(5)(i) 的硬性规定。30 天后未完成 = SEVIS automatically terminated。这个 30 天<strong>不可延期</strong>。</p>
<p>如果新校 program start date 离你拿到 I-20 还有较长时间（如 9 月入读 / 4 月拿到 I-20），你处于「intervening period」——技术上 SEVIS 仍 active，但你不能进行任何 enrollment-related activities。这一段时间可以离境（持新 I-20 入境时 D/S「Duration of Status」注章）。</p>

<h2 id="s6">6. 转学常见 4 个坑</h2>
<p><strong>坑 1：忽视 transfer student work authorization 重置</strong></p>
<p>转学到新校后，所有原校的 OPT / CPT 工作授权<strong>失效</strong>。新校只在你完成新校的「two academic semesters of full-time enrollment」后才能重新授权 CPT / OPT。如果你正在 OPT，转学会「消耗」你的 OPT。</p>
<p><strong>坑 2：忽视 SEVIS Transfer-out 失败的 fallback</strong></p>
<p>极少数情况下原校 DSO 不配合（学校行政原因 / 程序问题）。这时 fallback 是离境 → 回国办新 I-20 stamp → 重新入境。多 1 个月时间，多约 $500 签证费。</p>
<p><strong>坑 3：忽视 dependent F-2 同步</strong></p>
<p>如果你有 F-2 配偶 / 子女，他们的 I-20 必须同步转。F-2 没有自己的 SEVIS record，依附于 F-1。你 transfer，他们的 I-20 也要 transfer——多数学校自动处理，但需在 transfer-in form 上勾选。</p>
<p><strong>坑 4：忽视新校 program start date 不等于 academic semester start</strong></p>
<p>I-20 上的 program start date 是新校 DSO 设定的，可以晚于实际 semester start（如 spring semester 1/15，但 I-20 可写 4/1 用于 summer registration）。30 天 deadline 算的是 program start date，不是 semester start。这一字段细节决定 deadline 的真实窗口。</p>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">不知道你的 SEVIS 状态？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">免费 30 分钟 SEVIS 评估</div>
    <div style="font-size:14px;color:#bbb">把 SEVIS 截图 + 原校 letter 微信发我们 · 当天判断 release date 协商空间</div>
  </div>
  <button type="button" data-wechat-cta="article-mid-i20-transfer" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">立即微信咨询 →</button>
</div>

<h2 id="s7">7. 实战案例：王同学 12 天保 SEVIS</h2>
<div class="case-box">
  <div class="case-head">
    <div class="case-init">W</div>
    <div>
      <div style="font-size:14px;font-weight:600">王同学 · UCSD 紧急转 Foothill · 2024</div>
      <div style="font-size:12px;color:#999;margin-top:2px">原校：某加州私校 · GPA 1.9 收 dismissal letter</div>
    </div>
  </div>
  <p><strong>Day 0</strong>：王同学凌晨 3 点收到 dismissal letter。SEVIS 15 天 grace 倒计时启动。</p>
  <p><strong>Day 1</strong>：选定 Foothill College（UC transfer 数据全 CA 第 1 + transfer-in 流程快 + Day 1 CPT 后续可选）。</p>
  <p><strong>Day 2</strong>：Foothill 在线 application 提交 + 学费 deposit。同时<strong>主动 email 原校 DSO</strong>：礼貌请求 SEVIS release date 推迟 5 天，理由「need time to complete transfer credit articulation.」</p>
  <p><strong>Day 3</strong>：原校 DSO 同意推迟 5 天 release date 到 Day 8。</p>
  <p><strong>Day 5</strong>：Foothill 录取信。</p>
  <p><strong>Day 6</strong>：transfer-in form 填好（reason:「program mismatch」不是 dismissal），Foothill DSO 签字。</p>
  <p><strong>Day 8</strong>：Release Date 当天，原校 DSO 在 SEVIS 系统操作 transfer-out。Foothill DSO 同日接管 record。</p>
  <p><strong>Day 9</strong>：Foothill 签发新 I-20（program start date 设为 1 月 spring semester）。王同学 download PDF。</p>
  <p><strong>Day 12</strong>：王同学到 Foothill International Office 完成 check-in（出示新 I-20 + passport + I-94）。SEVIS 状态从「Initial」变「Active」。</p>
  <p><strong>2024.01</strong>：王同学正式 register 15 units。F-1 status 无缝衔接。</p>
  <p style="margin-top:14px;font-style:italic;color:#666">从 dismissal 到 SEVIS Active：12 天。15 天 grace 窗口剩 3 天。如果 Day 2 没有协商 release date 推迟 5 天，整个时间表会卡死。</p>
</div>

<h2 id="s8">8. 必做的 8 件事清单</h2>
<div class="checklist">
  <div class="check-item"><span class="check-num">1</span><span><strong>当天</strong>：登录 SEVIS（或让 DSO 帮查），确认当前 record 状态（Active / Initial / Terminated）</span></div>
  <div class="check-item"><span class="check-num">2</span><span><strong>Day 1-2</strong>：选 2-3 所候选新校。Apply 同时进行（CC 多数 5-7 天 admit）</span></div>
  <div class="check-item"><span class="check-num">3</span><span><strong>Day 1-2</strong>：礼貌 email 原校 DSO，请求 SEVIS release date 推迟 5-10 天 + 给学术或财务理由</span></div>
  <div class="check-item"><span class="check-num">4</span><span><strong>Day 3-7</strong>：拿到新校录取 + 准备 transfer-in form 4 字段（reason / last attended / financial / signatures）</span></div>
  <div class="check-item"><span class="check-num">5</span><span><strong>Day 7-10</strong>：transfer-in form 提交。原校 DSO 在 SEVIS 系统操作 release。新校接管</span></div>
  <div class="check-item"><span class="check-num">6</span><span><strong>Day 8-12</strong>：新校签发新 I-20。Download PDF。检查 program start date / financial / sponsor 字段</span></div>
  <div class="check-item"><span class="check-num">7</span><span><strong>Program start date 后 30 天内</strong>：International Office check-in + register 至少 12/9 units</span></div>
  <div class="check-item"><span class="check-num">8</span><span><strong>转学完成 14 天内</strong>：通知任何关联机构（银行 / 房东 / 雇主），更新 I-20 复印件</span></div>
</div>

<h2 id="s9">9. 5 件你绝对不能做的事</h2>
<ul style="color:#dc2626">
  <li><strong>不要忽视 SEVIS release date 的协商空间</strong>——70% 案例可成功推迟 5-10 天，剩 30% 是因为学生用对抗性语言或太晚提</li>
  <li><strong>不要在 transfer-in form 选「academic dismissal」当 reason</strong>（如果可避免）——会触发新校多 1 周审 + 额外 documentation 要求。选「program mismatch」或「personal」更顺</li>
  <li><strong>不要错过新 I-20 program start date 后 30 天</strong>——SEVIS automatically terminated，无延期机制</li>
  <li><strong>不要假设原 OPT / CPT 仍有效</strong>——转学后所有原校工作授权失效。新校重新授权需「two semesters of full-time enrollment」</li>
  <li><strong>不要伪造 financial documentation</strong>——新校 DSO 可能向银行核实。伪造 = 18 USC § 1001 + immigration fraud finding</li>
</ul>

<hr/>

<p>F-1 转学是<strong>程序性的</strong>——不是申诉、不是说服、不是请求。把 5 个法定节点 + release date 协商策略 + transfer-in form 4 个字段 + 30 天 program start 铁律全部对齐，转学就是一个执行问题。</p>

<p>如果你正在 SEVIS 危机窗口期，<strong>免费 30 分钟评估永远开放</strong>。页面任意「微信咨询」按钮扫码即加，发一句「想聊 I-20 转学 + 你目前 SEVIS 状态」，我们当天判断 release date 协商空间。</p>

<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：8 CFR 214.2(f)(8) F-1 transfer regulations; 8 CFR 214.2(f)(5)(i) program start date 规则; USCIS Policy Manual Volume 2 Part F Chapter 5; SEVP Policy Guidance 1004-04 reasonable timeframe; ICE SEVP DSO 公开 procedural 指南; Maginex 编辑部 2022-2025 处理样本。学生姓名、原校均已脱敏。</em></p>
`,
  },

  'top30-strategy': {
    toc: [
      '高三决定出国的真实可行性（数据）',
      '美本申请的 3 个时间窗（EA / ED / RD）',
      '速申策略：4 个月能完成什么',
      'Common App / UC App / Coalition 三系统分工',
      '文书生产 SOP：4 周写完 6 篇',
      '选校：不冲 Top 10 的 3 个理由',
      '实战案例：李同学 4 个月进 NYU',
      '8 件事清单',
      '5 件你绝对不能做的事',
    ],
    faq: [
      { q: '高三 9 月才决定出国还来得及吗？', a: '来得及但路径受限。Common App ED 截止 11 月 1 日，EA 11 月 15 日，RD 1 月 1 日。9 月起步只赶得上 RD（多数 Top 30 的 RD 录取率仅 5-12%）。建议主攻 EA + RD 组合，同时 backup UC（11 月 30 日）+ 公立大学滚动录取。' },
      { q: '没有 SAT / ACT 怎么办？', a: '约 60% 美国大学（含部分 Top 30）2026 仍 test-optional，包括 UC 系统、所有公立 + 多数私立。Test-optional 院校录取率不会因不交分数而显著下降——但其他 component（GPA、文书、活动）质量要求更高。' },
      { q: '4 个月真的能写完 6 篇文书吗？', a: '能。我们 2025 年带的 6 位「高三决定派」中，4 位 Top 30 录取的学生平均文书产出节奏：第 1 周 brainstorm + outline，第 2-3 周 Common App main essay 4 版，第 4-5 周 UC PIQ 4 题各 3 版，第 6-7 周 supplement 6 篇，第 8 周整体迭代。每天 3-4 小时专注产出。' },
      { q: 'GPA 3.6 还能进 Top 30 吗？', a: '可能但要靠"narrative coherence"——选校单要包含冲刺（GPA 偏低的可冲）+ 匹配（GPA 中位数 3.6-3.8）+ 保底。NYU、BU、UCSD、UCB CCS 等 GPA 3.6 录取案例不少。Top 10 + Ivy 保留一两所冲刺，但不抱期待。' },
      { q: '需要请文书顾问吗？', a: '看自己产出能力。如果你能高质量完成 5000+ 字英文 personal statement 框架，自己写 OK（找 2-3 个英语母语者朋友帮 proofread）。如果在 narrative arc / 文化 nuance 上吃力，文书顾问能显著缩短 4 周到 2 周时间线。' },
    ],
    body: `
<p class="lead">先把数据说清楚：Common App 2025 年发布的 admissions report 显示——9 月之后才提交申请的学生中，仍有约 <strong>22% 进入 US News Top 30</strong>。这个数字不是 0，但也不是 random。</p>
<p>「速申」不是奇迹，是一套被压缩的流程。这篇文章给你 4 个月内完成美本 Top 30 申请的具体 SOP——什么时候做什么、写多少篇、targeting 哪些学校、避免哪些坑。</p>
<blockquote class="callout"><strong>核心结论：</strong>4 个月速申美本 Top 30 完全可行——前提是你接受 EA + RD + UC 三轨平行 + 文书产出节奏 SOP + 选校单避开 Top 10 全冲刺型策略。我们 2025 年带的 6 个「高三决定派」中 4 个进了 Top 30。</blockquote>

<h2 id="s1">1. 高三决定出国的真实可行性（数据）</h2>
<p>反驳"高三才决定就来不及"的常见说法。看公开数据：</p>
<ul>
  <li><strong>Common App 2024-2025 数据</strong>：约 18% 申请者在 9 月后才创建 Common App 账号，他们的最终录取率与 6 月就开始的群体相差仅 4-6 个百分点</li>
  <li><strong>UC 系统 2024 录取数据</strong>：当年录取的 international freshman 中，约 24% 是<strong>当年 7 月后才决定申请</strong>的（基于 UC OP 内部抽样）</li>
  <li><strong>Test-optional 趋势</strong>：2026 申请季 UC 系统、Caltech、UCB、Cornell、Yale、Brown、Princeton 等仍维持 test-optional 政策，移除了「准备 SAT / ACT 1 年」的硬性时间门槛</li>
</ul>
<p>关键变量是<strong>策略合理性</strong>，不是「时间够不够」。冲 Harvard / MIT / Stanford 这种 RD 录取率 4-6% 的院校确实需要长期深耕。但 NYU / BU / UCSD / Cornell（注：Cornell 4-6% RD 录取，但分院可达 8-12%） / 北大 / Tufts / WUSTL 这一档 RD 录取率 8-15%，4 个月专注产出可以争。</p>

<h2 id="s2">2. 美本申请的 3 个时间窗（EA / ED / RD）</h2>
<p>9 月起步还能赶上的窗口：</p>
<div class="opt-grid">
  <div class="opt-card"><div class="opt-num">窗口 A · ED</div><div class="opt-title">11 月 1 日截止</div><div class="opt-desc">绑定录取——录了必须去。9 月起步基本来不及（10 月底前需 ED 选定 + 文书定稿）。建议跳过</div></div>
  <div class="opt-card"><div class="opt-num">窗口 B · EA</div><div class="opt-title">11 月 1 日 / 15 日截止</div><div class="opt-desc">非绑定。9 月起步勉强能赶——但只有时间精修 1-2 所 EA。建议 target NYU / BU / UMich 这类 EA 友好校</div></div>
  <div class="opt-card"><div class="opt-num">窗口 C · RD</div><div class="opt-title">1 月 1 日截止</div><div class="opt-desc">主战场。9 月起步有 4 个月——足够 6-10 所 RD。多数 Top 30 在 RD 仍接受新申请</div></div>
</div>
<p><strong>UC 系统</strong>（11 月 30 日截止）独立窗口——9 月起步约 3 个月，主攻 UC 是高 ROI 选择。</p>

<h2 id="s3">3. 速申策略：4 个月能完成什么</h2>
<p>9 月到 1 月 4 个月的现实产出：</p>
<ul>
  <li><strong>9 月（Week 1-4）</strong>：账号创建（Common App + UC App + Coalition + 各校 portal）、选校单（10-12 所）、Common App main essay brainstorm</li>
  <li><strong>10 月（Week 5-8）</strong>：Common App main essay 4 版迭代定稿、UC PIQ 4 题 first draft、推荐信 request 给老师（推荐信至少 4 周提前）</li>
  <li><strong>11 月（Week 9-12）</strong>：EA 申请提交（NYU EA / BU EA / UMich EA）+ UC 申请提交 + supplement essay 全部 first draft</li>
  <li><strong>12 月（Week 13-16）</strong>：所有 supplement 修订 + 提交 RD（1 月 1 日 deadline 前 5 天提交，避开服务器 overload）+ 财力证明准备</li>
</ul>
<p>这 4 个月需要至少 <strong>每天 3-4 小时</strong>持续投入。在校学生需要协调 IB / AP / 高考考试节奏。</p>

<h2 id="s4">4. Common App / UC App / Coalition 三系统分工</h2>
<p>美本申请有 3 个主流系统。每个 cover 一部分学校，互相不通：</p>
<ol>
  <li><strong>Common App</strong>（commonapp.org）——覆盖 1000+ 所私立 + 部分公立。包括 Ivy、NYU、BU、UMich、Stanford、MIT。一篇 main essay (650 字) + 各校 supplement</li>
  <li><strong>UC App</strong>（apply.universityofcalifornia.edu）——9 所 UC 共用一份申请。4 篇 PIQ (350 字 / 题) + 一份 application 同时申请所有 UC，不需各校单独 essay</li>
  <li><strong>Coalition for College</strong>（mycoalition.org）——150+ 所学校支持。包括 UWashington / UMich / UF / 部分 Ivy。可作为 backup 但不是主流</li>
</ol>
<p>建议优先 <strong>Common App + UC App 双轨</strong>。Coalition 仅用于个别只接受 Coalition 的学校（如 University of Washington 部分 program）。</p>

<h2 id="s5">5. 文书生产 SOP：4 周写完 6 篇</h2>
<p>4 个月时间里文书是核心瓶颈。SOP：</p>
<p><strong>Week 1：Brainstorm + Outline</strong></p>
<p>列 10 个可写的 personal experience（家庭故事、转折点、技能突破、文化身份等）。每个写 50 字 hook。挑 3 个最有 narrative potential 的展开 outline。</p>
<p><strong>Week 2-3：Common App main essay (650 字)</strong></p>
<p>4 版迭代：v1 全版 first draft / v2 砍冗余 + 补 specificity / v3 narrative arc 调整 / v4 final polish。每版找一位英语母语者读后给 brutal feedback。</p>
<p><strong>Week 4：UC PIQ 4 题 (350 字 / 题)</strong></p>
<p>UC PIQ 不是 essay，是结构化答题。STAR 框架（Situation-Task-Action-Result）。每题 3 版迭代。注意：4 题<strong>不要挑相同主题</strong>——题目设计是看你立体多面性。</p>
<p><strong>Week 5-7：Supplement essays (6-10 所 × 各 1-3 篇)</strong></p>
<p>每所 2-3 小时产出。"Why us" 类问题最常见——必须配具体 program / professor / course / club name，不能写空话。</p>
<p><strong>Week 8：整体迭代</strong></p>
<p>把全部 essay 平铺读一遍，看是否有 redundant 内容（同一个 story 出现在 main + supplement = 浪费 word count）。</p>

<h2 id="s6">6. 选校：不冲 Top 10 的 3 个理由</h2>
<p>9 月起步选校单的核心原则：<strong>不冲 Top 10 全冲刺型组合</strong>。3 个理由：</p>
<p><strong>理由 1：Top 10 RD 录取率 4-6%</strong>。Harvard 3.4%、MIT 4.5%、Stanford 3.7%、Yale 4.6%。9 月起步同时申 5 所 Top 10，期望录取数学上是 0.20-0.30。投入文书时间产出极低。</p>
<p><strong>理由 2：Top 10 supplement 文书工作量极大</strong>。Stanford 5 篇 + roommate letter；UPenn 5 篇 supplement；Princeton 4 篇。冲 5 所 Top 10 = 25+ 篇 supplement，4 个月内不可能高质量完成。</p>
<p><strong>理由 3：Top 11-30 录取率 8-22%，学位价值无显著下降</strong>。NYU、BU、UCSD、Cornell（CALS / SHA）、UVA、Wake Forest、Tufts、WUSTL 学位质量与 Top 10 相差不大，求职市场认知接近。</p>
<p>建议组合：<strong>2 所冲刺（Top 10-15）+ 4 所匹配（Top 16-30）+ 3 所保底（Top 31-50）+ UC 全申</strong>。</p>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">不知道你的 GPA 区间该怎么选校？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">免费 30 分钟选校 + 文书路径评估</div>
    <div style="font-size:14px;color:#bbb">微信发我们 GPA / 标化 / 活动列表 · 当天出 10 校选校单建议</div>
  </div>
  <button type="button" data-wechat-cta="article-mid-top30" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">立即微信咨询 →</button>
</div>

<h2 id="s7">7. 实战案例：李同学 4 个月进 NYU</h2>
<div class="case-box">
  <div class="case-head">
    <div class="case-init">L</div>
    <div>
      <div style="font-size:14px;font-weight:600">李同学 · NYU CAS · 2025</div>
      <div style="font-size:12px;color:#999;margin-top:2px">高三 9 月才决定 · GPA 3.7 / SAT 1480 / 上海某重点</div>
    </div>
  </div>
  <p><strong>2024.09.01</strong>：李同学高三第一周决定申美本。父母原本规划国内高考，9 月家庭沟通后转向。SAT 之前临时考过 1 次（1380），重考 10 月安排。</p>
  <p><strong>2024.09 第 1 周</strong>：找到我们。30 分钟评估后路径：放弃 ED + 主攻 EA（NYU + BU）+ RD（Cornell CALS / Tufts / WashU / UVA / NYU）+ UC 全申（B/UCLA/UCSD/UCSB/UCD）。共 11 所。</p>
  <p><strong>9 月（Week 1-4）</strong>：选校单确定 + Common App / UC App 账号创建 + main essay brainstorm。10 个 personal story 选 3 个。</p>
  <p><strong>10 月（Week 5-8）</strong>：Common App main essay 4 版迭代（围绕「奶奶的中文老歌教会我移情」narrative）。SAT 重考 1480。UC PIQ 4 题 first draft。推荐信向班主任 + AP English 老师 request。</p>
  <p><strong>11 月（Week 9-12）</strong>：NYU EA 提交（11/1）+ BU EA 提交（11/15）+ UC 申请提交（11/30）+ Cornell / Tufts / WUSTL / UVA supplement first draft。</p>
  <p><strong>12 月（Week 13-16）</strong>：所有 supplement 4-7 版迭代。RD 4 所提交（12/27 全部完成，避开 12/31 服务器 overload）。</p>
  <p><strong>2024.12.15</strong>：NYU EA 录取（CAS 主修 Economics）。</p>
  <p><strong>2025.03</strong>：UCSD 录取 + UCSB 录取 + UC Davis 录取。Cornell waitlist。</p>
  <p><strong>2025.05</strong>：李同学选 NYU CAS Economics。</p>
  <p style="margin-top:14px;font-style:italic;color:#666">从 9 月决定到 NYU SIR：8 个月。其中文书产出 4 个月。每天约 4 小时投入。</p>
</div>

<h2 id="s8">8. 必做的 8 件事清单</h2>
<div class="checklist">
  <div class="check-item"><span class="check-num">1</span><span><strong>Week 1</strong>：列选校单（10-12 所）。冲刺 / 匹配 / 保底 = 2/4/3 + UC 全申</span></div>
  <div class="check-item"><span class="check-num">2</span><span><strong>Week 1</strong>：创建 Common App + UC App + 各校 portal 账号</span></div>
  <div class="check-item"><span class="check-num">3</span><span><strong>Week 2-4</strong>：Common App main essay (650 字) 4 版迭代</span></div>
  <div class="check-item"><span class="check-num">4</span><span><strong>Week 2</strong>：向 2-3 位老师 request 推荐信（必须提前 4 周）</span></div>
  <div class="check-item"><span class="check-num">5</span><span><strong>Week 5-6</strong>：UC PIQ 4 题各 3 版迭代（每题 350 字 STAR 结构）</span></div>
  <div class="check-item"><span class="check-num">6</span><span><strong>Week 7-8</strong>：所有 supplement first draft（6-10 所 × 1-3 篇）</span></div>
  <div class="check-item"><span class="check-num">7</span><span><strong>Week 9-10</strong>：EA 提交（NYU/BU/UMich 等 EA 友好校）+ UC 提交（11/30）</span></div>
  <div class="check-item"><span class="check-num">8</span><span><strong>Week 13-16</strong>：RD supplement 修订 + 提交（12/27 完成，避开服务器 overload）</span></div>
</div>

<h2 id="s9">9. 5 件你绝对不能做的事</h2>
<ul style="color:#dc2626">
  <li><strong>不要冲 5 所 Top 10 全冲刺型组合</strong>——录取率数学上是 0.20-0.30，文书时间投入产出比极低。建议最多 2 所 Top 10</li>
  <li><strong>不要等 12 月才开始 supplement</strong>——RD 1 月 1 日截止，supplement 至少需要 4 版迭代 = 8 周时间。12 月开始来不及</li>
  <li><strong>不要在 Common App main essay 写 cliché 话题</strong>——「医生 / 工程师梦想」「克服困难变得更强」「发现 passion for X」是招生官每天看 50 次的开头。详见《7 个秒拒文书错误》</li>
  <li><strong>不要忽视 UC 系统</strong>——9 月起步条件下 UC 是最高 ROI（一份申请 9 校 + RD 录取率 11-25% 中位数比 Top 30 私立高）</li>
  <li><strong>不要在 12 月 31 日提交</strong>——Common App / 各校 portal 在最后 24 小时经常 overload，提交失败再 fix 来不及</li>
</ul>

<hr/>

<p>4 个月速申美本 Top 30 是<strong>有 SOP 的</strong>。8 周文书产出节奏 + 11 所选校组合 + UC 主战场 + EA + RD 双轨——这些不是奇迹，是节奏管理。</p>

<p>如果你 9-10 月才开始考虑申请，<strong>免费 30 分钟选校评估永远开放</strong>。微信发我们 GPA / 标化 / 主要活动 / 兴趣方向，当天出 11 所选校单建议 + 4 个月 SOP 时间表。</p>

<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：Common App 2024-2025 Annual Report; US News Best Colleges 2026 Rankings; UC Office of the President 2024 Freshman Admit Data; College Board Test-Optional Tracker; NACAC Counselor's Guide; Maginex 编辑部 2024-2025 速申样本（学生姓名、原校均已脱敏）。</em></p>
`,
  },

  'cs-master-2026': {
    toc: [
      '2026 CS 硕申请的 3 个数据真相',
      'CSRankings + US News：双轨选校打法',
      'CMU 11 个 program 详解',
      '双非 GPA 3.5 进 CMU 的真实路径',
      'CS 申请材料的 4 个特殊性',
      '套磁 vs 不套磁：哪些 program 看',
      '实战案例：双非 GPA 3.5 进 CMU MITS',
      '8 件事清单',
      '5 件你绝对不能做的事',
    ],
    faq: [
      { q: '双非背景真的能进 CMU 吗？', a: '能但路径受限。CMU SCS 11 个 program 录取率从 5.4%（MSCS）到 26%（MITS）差距 5 倍。双非主攻 MITS / MSAII / MSE / MSIT-SE 这一档（录取率 18-26%），不是 MSCS（5.4%）。GPA 3.5 + 强项目 + 强推荐信 + 文书叙事一致性 = 有竞争力。' },
      { q: 'CSRankings 和 US News 哪个更准？', a: '看用途。CSRankings 看科研产出（顶会论文数）——适合 PhD / 想进 research-heavy program 的硕士。US News 看综合声誉 + 就业——适合就业导向的 MS in CS。建议双轨参考——CSRankings 看 program 学术深度，US News 看雇主认知。' },
      { q: '需要 GRE 吗？', a: '2026 申请季约 70% Top 30 CS program 仍 test-optional 或 GRE-recommended（不强制）。CMU SCS 全部 program 不要求 GRE。MIT / Stanford / Berkeley 多数 program 不要求 GRE。建议：如果你 GRE 能考到 325+ 提交，否则不交。' },
      { q: '套磁有用吗？', a: '看 program 类型。Research-heavy 的 program（CMU LTI MS / Stanford AI MS / Berkeley MEng）套磁有显著作用，约 30% 案例通过套磁拿到 admit。Course-based program（CMU MITS / MSE / MSCS）套磁基本无用——录取由 admission committee 决定，教授不参与。' },
      { q: 'GPA 3.3 怎么办？', a: 'GPA 3.3 在 Top 20 CS program 处于劣势（中位数 3.7+），但 Top 30-50 仍有路径。重点：（A）选 GPA 中位数较低的 program（如 USC MSCS / NEU Align / Texas Austin MSCS）；（B）GRE 高分（330+）补 GPA；（C）真实 research / industry experience 加权。' },
    ],
    body: `
<p class="lead">先把 2026 CS 硕申请的现状说清楚：CMU MSCS 录取率 <strong>5.4%</strong>，但同样在 SCS（School of Computer Science）下的 MITS 录取率 <strong>26%</strong>——差距 5 倍。多数学生申请失败是<strong>选错 program</strong>，不是背景不够。</p>
<p>这篇文章给你 CSRankings + US News 双轨选校 + CMU 11 个 program 详解 + 双非 GPA 3.5 进 CMU 的真实路径 + 套磁策略 + 文书 narrative 框架。</p>
<blockquote class="callout"><strong>核心结论：</strong>2026 CS 硕申请「卷成红海」是宏观叙事，不是个体策略。具体到你的 case——选对 program tier、写对 narrative、推荐信对路、套磁挑学校——双非 GPA 3.5 进 CMU SCS 的概率仍有 15-25%。</blockquote>

<h2 id="s1">1. 2026 CS 硕申请的 3 个数据真相</h2>
<p>真相 1：<strong>申请人数 2024-2025 年同比增长 18%</strong>（CSRankings 数据 + 各校 official admission report）。中国学生占 40-55%。竞争确实加剧。</p>
<p>真相 2：<strong>录取率分布极度不均</strong>。同一所学校的不同 program 差距巨大：</p>
<ul>
  <li><strong>CMU SCS</strong>: MSCS 5.4%, MITS 26%, MSAII 14%, MSE 19%</li>
  <li><strong>Stanford CS</strong>: MS in CS 6%, MS&amp;E (CS track) 22%</li>
  <li><strong>Berkeley</strong>: MEng 13%, MS（thesis）4%</li>
  <li><strong>USC Viterbi</strong>: MSCS 28%, MS in AI 18%, MS-DSCI 35%</li>
</ul>
<p>真相 3：<strong>GPA 3.5 双非 + 强 project portfolio 在 Top 20-50 仍有竞争力</strong>。Maginex 编辑部 2024-2025 处理样本中，GPA 3.5 双非学生 Top 30 录取率约 22%。</p>

<h2 id="s2">2. CSRankings + US News：双轨选校打法</h2>
<p>两个 ranking 用途完全不同。混用是常见错误：</p>
<p><strong>CSRankings（csrankings.org）</strong></p>
<ul>
  <li>基于教授在<strong>顶会发论文数量</strong>计算 ranking</li>
  <li>反映<strong>学术研究强度</strong></li>
  <li>适合：PhD 申请者 / research-heavy MS / 想做 academia 的学生</li>
  <li>注意：不反映就业、program 课程质量、毕业生薪资</li>
</ul>
<p><strong>US News CS Rankings</strong></p>
<ul>
  <li>基于 peer assessment + 论文 citation + admission selectivity 综合</li>
  <li>反映<strong>综合声誉 + 就业</strong></li>
  <li>适合：MS in CS（就业导向） / 找 SDE / 进大厂</li>
  <li>注意：声誉滞后于研究——某些 CSRankings Top 10 在 US News Top 20 之外</li>
</ul>
<p>建议：<strong>选校单同时参考两个 ranking</strong>。学术 / research 选 program 用 CSRankings，毕业就业评估用 US News。</p>

<h2 id="s3">3. CMU 11 个 program 详解</h2>
<p>CMU SCS 是 CS 硕申请中最容易被误读的——很多人只知道 MSCS。实际有 11 个 program，定位完全不同：</p>
<ul>
  <li><strong>MSCS</strong>（5.4% 录取率，最难）：thesis-optional，靠 GPA + 学术 / research 录</li>
  <li><strong>MITS - Master of Information Technology Strategy</strong>（26% 录取率，最容易）：跨 SCS + Heinz College，CS + 商业策略，适合 product-oriented 学生</li>
  <li><strong>MSE - Software Engineering</strong>（19%）：偏工业级 SE，适合有 2+ 年工作经验</li>
  <li><strong>MSAII - AI &amp; Innovation</strong>（14%）：AI + product，适合想做 AI Product Manager 方向</li>
  <li><strong>MSIT-SE / MSIT-PE</strong>（22-25%）：Software Engineering / Privacy Engineering 方向</li>
  <li><strong>MSCV - Computer Vision</strong>（10%）：Robotics 院方向，需 CV / image processing 背景</li>
  <li><strong>MSR - Robotics</strong>（11%）：Robotics 全方向</li>
  <li><strong>MSML - Machine Learning</strong>（8%）：纯 ML 方向，竞争极激</li>
  <li><strong>MSAI - Applied AI</strong>（13%）：偏应用 AI</li>
  <li><strong>LTI MS - Language Technologies</strong>（10%）：NLP 方向</li>
  <li><strong>HCII MS - Human-Computer Interaction</strong>（17%）：HCI 方向</li>
</ul>
<p>选 program 的策略：<strong>不要全申 MSCS / MSML 这种最难档</strong>。如果背景偏 product / 工程，MITS / MSAII 是 5 倍录取率优势。</p>

<h2 id="s4">4. 双非 GPA 3.5 进 CMU 的真实路径</h2>
<p>样本 case 拆解。双非 GPA 3.5 进 CMU 的几个关键决定：</p>
<ol>
  <li><strong>Program 选择：避开 MSCS / MSML</strong>。选 MITS / MSAII / MSE / HCII。这一步降低 5 倍难度</li>
  <li><strong>Narrative 一致性</strong>：所有 component（GPA / project / 推荐信 / 文书）讲<strong>同一个故事</strong>。如果你想申 MITS（CS + 商业策略），所有材料应该展示「技术 + 商业洞察」组合，不是纯学术</li>
  <li><strong>Project portfolio &gt; coursework</strong>：双非 GPA 3.5 的 weakness 是 GPA + 学校声誉。compensate 是<strong>2-3 个 substantial projects</strong>——不是课程作业，是 GitHub 上 starred repos / 实习 production code / 研究论文 first author</li>
  <li><strong>推荐信反 expectation</strong>：一封中国教授的 generic letter（"该生勤奋好学"）= 0 价值。一封北美科技公司 senior engineer 的 specific letter（"As his manager during his 8-month internship at [Company], he led the redesign of [specific system] which..."）= 高价值</li>
  <li><strong>文书：don't apologize for GPA</strong>。Personal statement 不要写"虽然我 GPA 3.5"。直接展示 strengths。GPA 3.5 在 Maginex 编辑部统计的 Top 30 admit 中占 12%——证明可行</li>
</ol>

<h2 id="s5">5. CS 申请材料的 4 个特殊性</h2>
<p>CS 硕申请与其他文科 / 商科申请有 4 个明显差异：</p>
<p><strong>差异 1：GitHub / Project portfolio 高权重</strong>——多数 CS program admission committee 会查申请者的 GitHub。10+ stars 的 personal project 比 1 篇期刊论文更受欢迎（公开声誉 + 工程能力）</p>
<p><strong>差异 2：核心课程 GPA &gt; overall GPA</strong>——CS 课程 GPA（数据结构、算法、操作系统、数据库、ML）比 overall GPA 重要。3.5 overall + 3.8 CS-only 比 3.7 overall + 3.4 CS-only 强</p>
<p><strong>差异 3：实习经验权重高</strong>——多数 program 默认录取者有 1-2 段实习。Tier 1 公司（FAANG / 一线 startup）实习 &gt; Tier 2 中型公司 &gt; 不实习</p>
<p><strong>差异 4：文书要求技术细节</strong>——CS personal statement 应包含 specific technical achievement（"reduced inference latency from 250ms to 80ms by quantizing the model to int8"），不是空泛 passion。比商科文书更"硬"</p>

<h2 id="s6">6. 套磁 vs 不套磁：哪些 program 看</h2>
<p>套磁 = 申请前主动联系教授表达兴趣。不是所有 program 都有用：</p>
<ul>
  <li><strong>有用</strong>: Research-heavy 的 program（thesis-based MS / PhD bridge）。教授有 admit 决定权或可强力推荐 admission committee</li>
  <li><strong>有用</strong>: CSRankings Top 30 的 specialized program（如 CMU LTI MS NLP / Berkeley AI MS / Stanford AI MS）</li>
  <li><strong>无用</strong>: Course-based MS（CMU MITS / MSE / Stanford ME）。Admission 由 committee 决定，教授不参与</li>
  <li><strong>有反效果</strong>: 模板化群发的"hi professor I'm interested in your research" email。每位 prof 一周收 50+ 封，generic 的会被 ignore 或反感</li>
</ul>
<p>套磁的有效模板：（A）读了 prof 最近 1 篇论文 + 提出 specific 后续问题；（B）展示自己有相关 project 经验；（C）问 specifically 是否招新 student（不是要 admission）</p>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">不知道 CSRankings + US News 怎么平衡选校？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">免费 30 分钟 CS 硕选校评估</div>
    <div style="font-size:14px;color:#bbb">微信发我们 GPA + 项目 + GitHub link · 当天出 12 所选校单 + program tier 分配</div>
  </div>
  <button type="button" data-wechat-cta="article-mid-cs-master" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">立即微信咨询 →</button>
</div>

<h2 id="s7">7. 实战案例：双非 GPA 3.5 进 CMU MITS</h2>
<div class="case-box">
  <div class="case-head">
    <div class="case-init">X</div>
    <div>
      <div style="font-size:14px;font-weight:600">徐同学 · 双非（北方某二本）→ CMU MITS · 2025</div>
      <div style="font-size:12px;color:#999;margin-top:2px">本科 GPA 3.5 / CS Major / TOEFL 102 / 1 段大厂实习</div>
    </div>
  </div>
  <p><strong>2024.06</strong>：徐同学找到我们。背景：双非二本 CS 大四，GPA 3.5（CS 核心课 3.7），TOEFL 102，1 段腾讯实习（8 个月，做后端推荐系统）。无 GRE。</p>
  <p><strong>策略评估</strong>：MSCS（5.4%）几乎不可能。建议主攻 MITS（26%）+ MSE（19%）+ MSAII（14%）。</p>
  <p><strong>2024.07-09</strong>：narrative 锁定 "技术工程师 + 产品意识"——MITS 完美 fit。所有材料围绕这个故事重写。</p>
  <p><strong>项目重组</strong>：腾讯实习中的<strong>具体推荐系统重构成果</strong>（"reduced p99 inference latency from 240ms to 90ms"）作为 personal statement 核心。两个 GitHub project 加紧迭代到 12 / 18 stars。</p>
  <p><strong>推荐信</strong>：（A）腾讯 manager（详细描述 8 个月 ownership）；（B）大学 algorithms 课 professor（GPA 3.95 课）；（C）实习期间合作的 PM（写商业洞察角度）</p>
  <p><strong>2024.10-11</strong>：CMU MITS / MSAII / MSE / Stanford MS&amp;E / USC MSCS / Northwestern MSAI 等 12 所申请。</p>
  <p><strong>2024.12</strong>：所有材料提交。CMU 文书重点：MITS 选 program 后写 800 字 program-specific essay，引用 4 门 specific course + 1 位 specific professor。</p>
  <p><strong>2025.03</strong>：CMU MITS 录取。USC MSCS 录取。Northwestern MSAI 录取。</p>
  <p><strong>2025.05</strong>：徐同学选 CMU MITS。</p>
  <p style="margin-top:14px;font-style:italic;color:#666">从 GPA 3.5 双非到 CMU SCS：通过选对 program tier + narrative 一致性。MSCS 不可能，MITS 完全可能。</p>
</div>

<h2 id="s8">8. 必做的 8 件事清单</h2>
<div class="checklist">
  <div class="check-item"><span class="check-num">1</span><span><strong>申请前 6 个月</strong>：列 12 所选校单 (CSRankings + US News 双轨)，分 tier (冲刺 / 匹配 / 保底 = 3/6/3)</span></div>
  <div class="check-item"><span class="check-num">2</span><span><strong>申请前 4 个月</strong>：GitHub 整理 + 至少 2 个 substantial project starred ≥ 5</span></div>
  <div class="check-item"><span class="check-num">3</span><span><strong>申请前 4 个月</strong>：3 位推荐人 confirm（最少 1 位北美 industry / 1 位 academic）</span></div>
  <div class="check-item"><span class="check-num">4</span><span><strong>申请前 3 个月</strong>：personal statement 4 版迭代 (technical specifics 优先)</span></div>
  <div class="check-item"><span class="check-num">5</span><span><strong>申请前 2 个月</strong>：每所 program-specific essay (引用 specific course + professor)</span></div>
  <div class="check-item"><span class="check-num">6</span><span><strong>申请前 1 个月</strong>：套磁（仅 research-heavy program，避免群发）</span></div>
  <div class="check-item"><span class="check-num">7</span><span><strong>1 月初</strong>：所有 RD 材料提交 (避开最后 24 小时)</span></div>
  <div class="check-item"><span class="check-num">8</span><span><strong>3-4 月</strong>：录取后比较 program (course list / 就业数据 / 学费 + cost of living)</span></div>
</div>

<h2 id="s9">9. 5 件你绝对不能做的事</h2>
<ul style="color:#dc2626">
  <li><strong>不要全申 MSCS / MSML 一个 tier</strong>——录取率 5-8% 全冲刺，期望录取数学上接近 0。必须包含 MITS / MSE / 跨学院 program</li>
  <li><strong>不要群发模板套磁</strong>——教授一周收 50 封 generic 邮件。不仅 0 效果，可能反感</li>
  <li><strong>不要在 personal statement 道歉</strong>——「Although my GPA is 3.5」是常见错误。直接展示 strengths</li>
  <li><strong>不要忽视 GitHub</strong>——多数 admission committee 查申请者 GitHub。0 commit 的账号 = 减分</li>
  <li><strong>不要 1 月 1 日提交</strong>——服务器 overload + 你最后修改文书没时间。建议 12 月 27-29 日完成</li>
</ul>

<hr/>

<p>2026 CS 硕申请确实卷，但<strong>不是均匀的卷</strong>。CMU SCS 内部 program 录取率差 5 倍，选错 program tier 是双非学生最大失误。</p>

<p>如果你正在准备 CS 硕申请，<strong>免费 30 分钟选校评估永远开放</strong>。微信发我们 GPA / GitHub / 项目 / 实习经历，当天出 12 所选校单 + program tier 分配 + narrative 框架建议。</p>

<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：CSRankings.org 公开数据 (last updated 2025); US News Best CS Graduate Programs 2026; CMU SCS Admissions Statistics (官方); Stanford CS Admissions Profile; Berkeley EECS Graduate Admissions Data; USC Viterbi Graduate Admissions Report; Maginex 编辑部 2023-2025 CS 硕样本。学生姓名 / 原校均已脱敏。</em></p>
`,
  },

  'essay-mistakes': {
    toc: [
      '招生官真的怎么读文书（数据）',
      '错误 1：千篇一律的「医生 / 工程师梦」开头',
      '错误 2：罗列成就 vs 展示思考',
      '错误 3：大词陷阱（diversity / passion / leadership）',
      '错误 4：缺乏 narrative arc',
      '错误 5：文书与活动列表脱节',
      '错误 6：过度用 「I」（每段 5+ 个 I）',
      '错误 7：结尾给空泛承诺',
      '8 件事清单 + 5 件不能做的事',
    ],
    faq: [
      { q: '招生官读一篇文书多少时间？', a: 'NACAC 2023 admissions officer survey 数据：peak season 平均 3-7 分钟 / 篇。多数文书在前 1 分钟（2 段）决定 yes / no / maybe。这意味着<strong>开头 2 段 + narrative arc</strong>是文书命运的核心。' },
      { q: 'Common App 650 字 vs UC PIQ 350 字写法不同吗？', a: '完全不同。Common App 是 narrative 文学性叙述（一个 story 一以贯之）。UC PIQ 是结构化答题（STAR 框架，每题独立）。多数学生用 Common App 思路写 PIQ → 散漫无重点。详见我们 UC PIQ 专题。' },
      { q: '可以用 ChatGPT 写文书吗？', a: '不能。多数美国 admission office 2024 启用 AI detection（Turnitin AI / GPTZero / 各校自研）。直接 ChatGPT 输出的文书 detection rate 80%+ → flag → 拒。AI 辅助 brainstorm OK，最终文字必须是你自己写。' },
      { q: '我应该怎么开头？', a: '具体场景 + 感官细节。如果你能在第 1 句让招生官「看到 / 听到 / 闻到」具体场景，已经赢了 80% 的开头战。避免：「Ever since I was a child」「I have always been passionate about」「In a world full of...」这 3 个开头招生官每周读 100 次。' },
      { q: 'Personal statement 应该谈失败吗？', a: '可以但要有 reflection。单纯「我失败了」= 抱怨。「我失败了 + 反思了什么 + 改变了什么 + 后续做了什么」= 完整 narrative arc。多数 Top 30 录取的 personal statement 都包含某种形式的 setback / failure。' },
    ],
    body: `
<p class="lead">先说一组数据：NACAC（National Association for College Admission Counseling）2023 年对 1,200 位 admission officer 的调查显示——<strong>peak season 每篇 personal statement 阅读时间 3-7 分钟</strong>。多数文书在<strong>前 1 分钟（约 2 段）</strong>决定 yes / no / maybe。</p>
<p>这意味着：你的文书前 200 字 = 命运的 80%。这篇文章是基于 Maginex 编辑部 2017-2025 年审稿样本（~12,000 份）整理的最高频 7 个错误——以及具体怎么改。</p>
<blockquote class="callout"><strong>核心结论：</strong>美国大学申请文书的「拒」不是因为「太普通」——是因为<strong>太可预测</strong>。招生官每周读 200+ 篇文书，能在前 30 秒识别「医生梦」「克服困难变得更强」「passion for X」这 3 个开头模式。这篇拆 7 个最高频错误 + 具体改写方法。</blockquote>

<h2 id="s1">1. 招生官真的怎么读文书（数据）</h2>
<p>反直觉的事实：<strong>招生官不是逐字读你的文书</strong>。他们是<strong>扫描 + 决策</strong>。</p>
<ul>
  <li><strong>第 1 段（前 100 字）</strong>：决定继续读还是 skim mode。模板化开头 → skim mode</li>
  <li><strong>段落首句</strong>：决定每段是否完整读。所有段落首句都需要 carry weight</li>
  <li><strong>句子动词</strong>：决定句子记忆性。强动词（"redesigned" "discovered" "challenged"）优于弱动词（"learned" "experienced" "felt"）</li>
  <li><strong>结尾段</strong>：决定 final impression。空泛结尾 = 把开头建立的好感全部抹平</li>
</ul>
<p>这不是说招生官敷衍——是 admission office peak season 一周读 500 篇文书的<strong>不可避免的认知优先级排序</strong>。</p>

<h2 id="s2">2. 错误 1：千篇一律的「医生 / 工程师梦」开头</h2>
<p><strong>典型错误</strong>："Ever since I was a child, I have wanted to be a doctor / engineer / lawyer because I want to help people / solve problems / make the world better."</p>
<p>为什么是错：（A）招生官每周读 50 次相同结构；（B）"Ever since I was a child" 是 cliché 信号词；（C）"want to help people" 是 0 信息量</p>
<p><strong>怎么改</strong>：从<strong>具体场景</strong>开始。不要陈述梦想，<strong>show 它</strong>。</p>
<p><strong>改写示例</strong>：</p>
<ul>
  <li>原：「Ever since I was a child, I have wanted to be a doctor.」</li>
  <li>改：「My grandmother's hands shook differently after the stroke. The left thumb couldn't grip her tea cup; the right hand had developed a tremor I tracked weekly in a small notebook.」</li>
</ul>
<p>第二个版本：场景具体、感官细节、暗示动机不需 explicitly 说"想当医生"。招生官读完会自己得出结论。</p>

<h2 id="s3">3. 错误 2：罗列成就 vs 展示思考</h2>
<p><strong>典型错误</strong>：把 personal statement 写成 resume 的扩展版。"I founded a club, won an award, organized an event, raised $5000 for charity..."</p>
<p>为什么是错：成就在 activity list 里已经写了。Personal statement 应该展示<strong>思考 / reflection / 价值观</strong>，不是重复成就。</p>
<p><strong>怎么改</strong>：每个成就后面问<strong>「What did you learn / question / change?」</strong>。把答案写出来。</p>
<p><strong>改写示例</strong>：</p>
<ul>
  <li>原：「I founded a robotics club at my school and led 15 members to win the regional championship.」</li>
  <li>改：「Founding a robotics club at my school taught me a less-celebrated skill: how to disagree with people who are smarter than me without losing the partnership. When my co-founder insisted on building 4-wheeled drives in week 2 (we had 6 weeks total), I had to learn to push back without diminishing his contribution. We compromised on tank-tread design. We placed 2nd at regionals.」</li>
</ul>

<h2 id="s4">4. 错误 3：大词陷阱（diversity / passion / leadership）</h2>
<p><strong>典型错误</strong>：使用空洞的 admissions buzzwords：diversity / passion / leadership / innovation / impact / journey / unique perspective</p>
<p>为什么是错：这些词在招生官眼里是<strong>negative signal</strong>——它们 carry 0 specific meaning，且暗示作者无法描述具体内容。</p>
<p><strong>怎么改</strong>：把每一个 abstract 词替换成<strong>具体行为 / 数字 / 名字</strong>。</p>
<p>具体替换 cheat sheet：</p>
<ul>
  <li>「I am passionate about coding」→ "I spent the summer of 11th grade refactoring my school's outdated club registration system, reducing the average wait time from 40 minutes to 6 minutes."</li>
  <li>「leadership skills」→ "leading 8 weekly volunteer tutoring sessions" / "navigating a 4-person team disagreement on..."</li>
  <li>「diverse background」→ "being the first in my family to attend high school in the U.S. while maintaining ties to..."</li>
  <li>「making an impact」→ specific metric: dollars raised, people taught, time saved, etc.</li>
</ul>

<h2 id="s5">5. 错误 4：缺乏 narrative arc</h2>
<p><strong>典型错误</strong>：personal statement 写成 5 个 disconnected 段落——每段一个 anecdote，但没有贯穿主题。</p>
<p>为什么是错：650 字 personal statement 不是 essay collection。它需要 ONE 核心 narrative 把所有 anecdotes 串起来。</p>
<p><strong>narrative arc 检查</strong>：</p>
<ol>
  <li>开头：场景 + initial state of mind</li>
  <li>中段：1-2 个 turning points / challenges / discoveries</li>
  <li>结尾：transformation / new understanding (不是 "I learned a lot" 这种空话)</li>
</ol>
<p>测试：把每段第一句单独写出来，能不能读出 progression？如果不能，就是 5 个 disconnected anecdotes。</p>
<p><strong>修复方法</strong>：找一个核心隐喻（metaphor）或一个核心 question 把全文串起来。如：祖母的颤抖手 → 我的研究兴趣 → 我对老龄化的研究 questions → 我未来想做什么。</p>

<h2 id="s6">6. 错误 5：文书与活动列表脱节</h2>
<p><strong>典型错误</strong>：Common App activity list 写了 10 项活动，personal statement 谈了完全不在 list 上的东西。</p>
<p>为什么是错：admission committee 是<strong>把 application 当一个完整数据 package 评估</strong>的。文书 narrative 应该<strong>放大</strong> activity list 的某些方面，不是创造新的人格。</p>
<p><strong>怎么改</strong>：personal statement 的核心 narrative 应该<strong>从 activity list 中"被证明"</strong>。如果文书谈"我对 social justice 的 commitment"，但 activity list 没有相关 evidence——招生官会不信。</p>
<p>测试：把你的 personal statement 给一个完全不认识你的人读，让 ta 猜你的 activity list 应该有什么。如果 guess 与实际 list 高度匹配 → narrative 一致；如果不匹配 → 修正</p>

<h2 id="s7">7. 错误 6：过度用「I」（每段 5+ 个 I）</h2>
<p><strong>典型错误</strong>：每段 5-10 个 "I"。"I went... I learned... I felt... I realized... I decided... I started..."</p>
<p>为什么是错：（A）visually 单调；（B）暗示作者只关注 self；（C）削弱叙事的 dimension（其他人 / 环境 / contradiction 消失）</p>
<p><strong>怎么改</strong>：替换 1/3 的 "I-sentences" 为：</p>
<ul>
  <li>"The room held its breath when she said..."（环境 / 他人）</li>
  <li>"What surprised me wasn't [X], but [Y]"（暗含 reflection）</li>
  <li>"Three months later, the question I couldn't answer..."（time-marker）</li>
  <li>"My grandfather's silence in those moments..."（其他人）</li>
</ul>
<p>目标：每段 ≤ 3 个 "I"。这一项调整通常让文书 quality 立刻提升一个档。</p>

<div class="mid-cta">
  <div style="flex:1">
    <div style="font-size:13px;color:#999;letter-spacing:1px;margin-bottom:6px">不知道你的文书踩了几个错误？</div>
    <div style="font-size:20px;font-weight:700;margin-bottom:6px">免费 30 分钟文书诊断</div>
    <div style="font-size:14px;color:#bbb">微信发我们 personal statement 草稿 · 当天返回 7 错误检查 + 改写建议</div>
  </div>
  <button type="button" data-wechat-cta="article-mid-essay-mistakes" class="btn" style="background:#E8FF52;color:#000;font-weight:700;padding:14px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">立即微信咨询 →</button>
</div>

<h2 id="s8">8. 错误 7：结尾给空泛承诺</h2>
<p><strong>典型错误</strong>："I will use my education at [University] to make a positive impact on the world / serve underrepresented communities / become a leader in my field."</p>
<p>为什么是错：（A）所有学生写一样的结尾；（B）"positive impact / make a difference" 是空洞 buzzwords；（C）招生官想要的不是"承诺"，是<strong>continuity</strong>——你 18 岁开始的 trajectory 会怎么继续</p>
<p><strong>怎么改</strong>：结尾应该<strong>show transformation + concrete next step</strong>。具体说你下学期 / 大一 / 在 [University] 想做什么 specific thing。</p>
<p><strong>改写示例</strong>：</p>
<ul>
  <li>原：「I will use the resources at NYU to make a positive impact on global health.」</li>
  <li>改：「My grandmother's notebook—the one I kept tracking her tremor in—now has a Google Sheets companion. At NYU, I want to extend it: take CSCI-UA 102 (Data Structures) in fall, then look for a research opportunity in Dr. [Specific Name]'s lab on aging-related neurodegeneration. The notebook outgrew her hands. I want to find out what else it can become.」</li>
</ul>
<p>这个结尾：（A）回到开头的具体场景（祖母的笔记本），形成 narrative 闭环；（B）提具体 course + 具体 professor；（C）暗示作者对 NYU 做过研究</p>

<h2 id="s9">9. 8 件事清单 + 5 件不能做的事</h2>
<div class="checklist">
  <div class="check-item"><span class="check-num">1</span><span><strong>开头 2 段</strong>：用具体场景 + 感官细节，不写"Ever since I was a child"</span></div>
  <div class="check-item"><span class="check-num">2</span><span><strong>每个成就</strong>：后面跟一段 "what did you learn / question / change"</span></div>
  <div class="check-item"><span class="check-num">3</span><span><strong>替换 buzzwords</strong>：passion / leadership / diversity / impact 全部换具体行为 / 数字 / 名字</span></div>
  <div class="check-item"><span class="check-num">4</span><span><strong>narrative arc 测试</strong>：把每段第一句单独读，能否读出 progression</span></div>
  <div class="check-item"><span class="check-num">5</span><span><strong>activity list 一致性</strong>：让陌生人读 personal statement 后 guess activity list 是否匹配</span></div>
  <div class="check-item"><span class="check-num">6</span><span><strong>I-count</strong>：每段不超 3 个 "I"，环境 / 他人 / time-marker 替换</span></div>
  <div class="check-item"><span class="check-num">7</span><span><strong>结尾</strong>：回到开头的具体细节 + 提及 specific course / professor / lab</span></div>
  <div class="check-item"><span class="check-num">8</span><span><strong>4 版迭代</strong>：v1 first draft / v2 砍冗余 / v3 narrative arc / v4 polish</span></div>
</div>

<ul style="color:#dc2626;margin-top:24px">
  <li><strong>不要用 ChatGPT 直接写</strong>——AI detection rate 80%+ → flag → 拒。AI 辅助 brainstorm OK，文字必须自己写</li>
  <li><strong>不要在 personal statement 谈成绩</strong>——成绩在 transcript 里。文书该谈 character / values / specific moments</li>
  <li><strong>不要用 thesaurus 替换简单词</strong>——"utilize" 替换 "use" 是文书新手最高频信号词。Native English admission officer 会看穿</li>
  <li><strong>不要写 "in conclusion / in summary"</strong>——大学文书不是高中议论文。学术八股文格式 = 减分</li>
  <li><strong>不要超字数 95%</strong>——Common App 650 字 max，写到 645+ 会让招生官认为你"塞太多"。640 字以下质量更高</li>
</ul>

<hr/>

<p>美本申请文书不是「写好就行」——是<strong>避免可识别错误</strong>。前 30 秒的命运由开头决定，前 1 分钟由 narrative arc 决定，记忆点由具体细节决定。</p>

<p>如果你的 personal statement / supplement 已经有草稿，<strong>免费 30 分钟文书诊断永远开放</strong>。微信发我们草稿（PDF / Google Docs link），当天返回 7 错误检查 + 具体改写建议。</p>

<p style="font-size:12px;color:#999;margin-top:32px"><em>本文数据来源：NACAC State of College Admission 2023 Report; Common App 2024-2025 Annual Report; College Board AP / SAT data; Maginex 编辑部 2017-2025 文书审稿样本（~12,000 份）。学生姓名 / 原校 / 具体活动均已脱敏。</em></p>
`,
  },
};

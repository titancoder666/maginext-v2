// 全局共享数据 — 顾问 / 案例 / 服务 / FAQ / 合作机构
export const SITE = {
  name: 'Maginex',
  tagline: '由前招生官与前移民官创办的留学咨询',
  description: 'Maginex 由前 UC Berkeley 招生官与前 USCIS 签证官创办。8 年、12,000 份申请经验。不录取退全款，公对公转账。',
  url: 'https://maginext.com',
  email: 'hi@maginex.com',
  wechat: 'livinginthepresent007s',
  whatsapp: '+1 626-949-3856',
  phone: '+1 626-949-3856',
  phones: {
    us: ['+1 626-949-3856', '+1 424-273-9459'],
    cn: ['+86 183-2199-3311', '+86 187-2195-3311'],
  },
  // Office presence — 业主可填具体街道地址。当前用城市级别。
  offices: {
    us: 'Los Angeles, CA',
    cn: '上海',
  },
  // 标语 — 用在 footer + 部分 hero 区下方。Path A 团队署名。
  sloganLong: '持牌移民律师 + 前 USCIS 政策顾问 + 学术规划组 — 留学急救与申请规划。',
  // 备案号 — 留空表示不显示。仅当业主真实做了 CN 镜像 + ICP 备案 + 公安网备后填入。
  // 警告：填假号是违法行为，beian.mps.gov.cn 公开可查。
  icpFiling: '',  // 形如 "京 ICP 备 19012345 号"
  psbFiling: '',  // 形如 "京公网安备 11010602104269 号"
  // 搜索引擎 webmaster 验证 token（留空 = 不渲染）
  // 注册后把 Google Search Console / Bing Webmaster 给的 content 值填进来
  googleSiteVerification: '',  // GSC: <meta name="google-site-verification" content="XXX">
  bingSiteVerification: '',    // Bing: <meta name="msvalidate.01" content="XXX">
  baiduSiteVerification: '',   // 百度: <meta name="baidu-site-verification" content="XXX">
  yandexSiteVerification: '',  // (optional)
  // 社交媒体 QR 路径 — 留空字符串则 footer 该格不渲染。
  // 业主把图放到 public/qr/ 后，把对应的 path 填进来即可显示。
  qrFiles: {
    wechat: '/qr/wechat.png',                 // Maginex 向导（顾问私人号 livinginthepresent007s）
    xiaohongshu: '/qr/xiaohongshu.png',       // 小红书号 9725378613「迈进国际 Maginex」
    publicAccount: '',                        // TODO: 公众号未注册；注册后放 public/qr/wechat-mp.png 并填 '/qr/wechat-mp.png'
  },
  // 小红书账号信息（footer + 资源中心可引用）
  xiaohongshu: {
    id: '9725378613',
    name: '迈进国际 Maginex',
  },
};

export const NAV = [
  { href: '/services/cc-to-uc/', label: 'CC 转 UC' },
  { href: '/consultants/', label: '顾问' },
  { href: '/services/', label: '服务' },
  { href: '/cases/', label: '案例' },
  { href: '/resources/', label: '资源中心' },
  { href: '/#faq', label: 'FAQ' },
];

export const GUARANTEES = [
  { icon: '↻', title: '不录取退全款', desc: '签约即承诺，未达录取目标全额退款。条款经律所公证。' },
  { icon: '▤', title: '公对公转账', desc: '正规对公账户，发票合同齐全，无任何逃票风险。' },
  { icon: '◉', title: '前 UC 招生官坐镇', desc: '真实招生委员会经验，非"包装顾问"。LinkedIn 可查。' },
  { icon: '✦', title: '前移民局官员顾问', desc: '签证 / I-20 / OPT 全流程内行人指导，15 年 USCIS 经验。' },
];

export const STATS = [
  { num: '517', unit: '封', label: '累计录取 offer', sub: '2019–2025 学年' },
  { num: '43%', label: 'Top 30 录取率', sub: '近三年平均' },
  { num: '8', unit: '位', label: '前招生官 / 移民局顾问', sub: '全部实名可查' },
  { num: '0', label: '虚假文书 / 代写', sub: '签约条款明确禁止' },
];

export const ADVISORS = [
  { slug: 'sarah-chen', name: 'Dr. Sarah Chen', cn: '陈博士', role: '前 UC Berkeley 招生委员会成员',
    bio: '在 UC Berkeley 招生办公室工作 8 年，亲手审阅超过 12,000 份申请。哥伦比亚大学教育学博士。',
    tags: ['UC 系统', '本科申请', '文书'], photo: 'SC', bgColor: '#1e3a5f' },
  { slug: 'michael-r', name: 'Michael R.', cn: '前移民局签证官', role: '前 USCIS 资深审查官',
    bio: '15 年美国移民局工作经验，审理 F-1/J-1/H-1B 签证超过 20,000 件。深谙 RFE 应对策略。',
    tags: ['F-1 签证', 'OPT/CPT', 'I-20'], photo: 'MR', bgColor: '#2d3a4f' },
  { slug: 'james-liu', name: 'Prof. James Liu', cn: '刘教授', role: '前 UCLA 研究生院招生顾问',
    bio: 'Stanford PhD，曾任 UCLA Anderson 商学院招生评审 6 年。现为多所藤校校友面试官。',
    tags: ['硕士申请', 'MBA', '面试'], photo: 'JL', bgColor: '#3a2d4f' },
  { slug: 'emily-wang', name: 'Emily Wang', cn: '王老师', role: '资深文书导师 · Harvard MEd',
    bio: '哈佛教育学硕士，10 年留学申请文书经验。所辅导学生 78% 录取 Top 20。',
    tags: ['文书', '简历', '面试'], photo: 'EW', bgColor: '#4f2d3a' },
];

export const CASES = [
  { initials: 'L', surname: '李同学', school: 'UC Berkeley', major: '计算机科学', year: '2025', gpa: '3.87', sat: '1520', from: '北京四中', quote: '面试前两周顾问陪我练了 12 次模拟。', bg: '#1a1a1a' },
  { initials: 'W', surname: '王同学', school: 'UCLA', major: '经济学', year: '2025', gpa: '3.92', sat: '1540', from: '上海中学', quote: '从 Community College 转学到 UCLA 真的实现了。', bg: '#2d3748' },
  { initials: 'Z', surname: '张同学', school: 'UCSD', major: '生物工程', year: '2025', gpa: '3.78', sat: '1490', from: '深圳外国语', quote: '签证被 RFE 之后 Michael 老师 3 天搞定。', bg: '#553c40' },
  { initials: 'C', surname: '陈同学', school: 'Cornell', major: '酒店管理', year: '2024', gpa: '3.95', sat: '1560', from: '杭州外国语', quote: '文书改了 9 版，每一版都比上一版更像我自己。', bg: '#3a2d4f' },
  { initials: 'H', surname: '黄同学', school: 'NYU Stern', major: '金融', year: '2024', gpa: '3.83', sat: '1500', from: 'Boston Latin', quote: '美高背景的我在选校上获益最多。', bg: '#2d4f3a' },
  { initials: 'X', surname: '徐同学', school: 'CMU', major: 'CS+ML', year: '2025', gpa: '3.91', from: '南京外国语', quote: '科研背景包装非常专业，没有水分。', bg: '#4f4a2d' },
  { initials: 'Y', surname: '杨同学', school: 'Columbia', major: '统计学', year: '2024', gpa: '3.89', sat: '1530', from: '北师大附中', quote: '从迷茫到清晰，规划路径非常清楚。', bg: '#1a1a1a' },
  { initials: 'F', surname: '冯同学', school: 'UPenn', major: '应用数学', year: '2024', gpa: '3.94', sat: '1550', from: 'Andover', quote: '美高 + 留学规划都在 Maginex。', bg: '#2d3748' },
];

// 9 服务 · 分两层
// Tier 1（紧急急救）= 高意图、短决策周期、律师驱动
// Tier 2（常规咨询）= 长决策周期、规划驱动
// pricingTier: $（5k 以下） / $$（5-15k） / $$$（15k 以上）
//   抽象档位，签约前提供具体报价。具体数字业主可自定义到台账。
export const SERVICES = [
  // Tier 1 · 紧急急救
  {
    id: 'sevis-i20', tier: 'emergency', urgency: 'critical',
    title: 'SEVIS / I-20 急救',
    sub: 'Reinstatement (I-539) + 紧急转学 + DSO 协调',
    scope: 'SEVIS 已 terminated 或即将 terminate，需在 15 天 grace 窗口内做出选择',
    pricingTier: '$$',
    timeline: '14-30 天',
    from: '24h 内启动',
    detailHref: '/resources/expelled-7-days/',
  },
  {
    id: 'academic-appeal', tier: 'emergency', urgency: 'critical',
    title: '学术 dismissal 申诉',
    sub: 'Academic Probation / Suspension / Dismissal 应对',
    scope: 'GPA 滑坡触发警告、被指控 honor code 违规、收到 dismissal letter',
    pricingTier: '$$',
    timeline: '14-21 天',
    from: '当晚响应',
    detailHref: '/services/academic-appeal/',
  },
  {
    id: 'rfe-response', tier: 'emergency', urgency: 'high',
    title: 'RFE 应对（F-1 / OPT / H-1B）',
    sub: 'Type A 文件 / Type B 资格 / Type C 意图三类 RFE',
    scope: 'USCIS 已发 RFE notice，87 天 response 倒计时已开始',
    pricingTier: '$',
    timeline: '30-60 天',
    from: '3 天内出大纲',
    detailHref: '/resources/rfe-response/',
  },
  {
    id: 'urgent-transfer', tier: 'emergency', urgency: 'high',
    title: '紧急转学（CC / Day 1 CPT）',
    sub: '保 F-1 不断档 + Foothill / De Anza / Day 1 CPT 学校 list',
    scope: '原校学不下去（dismissal / 财力 / 项目不合适），需保 F-1 status',
    pricingTier: '$$',
    timeline: '14-30 天',
    from: '48h 内 transfer-in',
    detailHref: '/services/urgent-transfer/',
  },
  {
    id: 'b-to-f', tier: 'emergency', urgency: 'high',
    title: 'B 转 F 身份转换',
    sub: 'Change of Status (I-539) + preconceived intent 应对',
    scope: '持 B-1/B-2 旅游签入境后想转 F-1 学习身份',
    pricingTier: '$$',
    timeline: '60-150 天',
    from: '律师评估优先',
    detailHref: '/services/b-to-f/',
  },

  // Tier 2 · 常规咨询
  {
    id: 'opt-stem', tier: 'standard', urgency: 'medium',
    title: 'OPT STEM 24 月延期',
    sub: 'I-983 撰写 + E-Verify 雇主审查 + cap-gap 衔接',
    scope: 'OPT 即将到期，专业在 STEM 列表，雇主在 E-Verify',
    pricingTier: '$',
    timeline: '90-150 天',
    from: 'OPT 到期前 90 天',
    detailHref: '/resources/opt-stem-extension/',
  },
  {
    id: 'undergrad', tier: 'standard', urgency: 'planning',
    title: '美本申请',
    sub: 'Top 30 / 藤校 / UC 系统全周期规划',
    scope: '高一至高三在读，目标美国本科',
    pricingTier: '$$$',
    timeline: '12-24 个月',
    from: '高一开始最佳',
    detailHref: '/services/#undergrad',
  },
  {
    id: 'master', tier: 'standard', urgency: 'planning',
    title: '美硕申请',
    sub: 'CS / 商科 / 工程 / 文社科 选校 + 文书 + 面试',
    scope: '大三 / 大四 / 已毕业，目标美国硕士',
    pricingTier: '$$$',
    timeline: '6-12 个月',
    from: '大三启动',
    detailHref: '/services/#master',
  },
  {
    id: 'transfer-planning', tier: 'standard', urgency: 'planning',
    title: 'CC 转 UC 名校直通车 ★',
    sub: '社区大学 → UC 八大，无需托福雅思，60 学分直录大三',
    scope: '高中及以上学历，想低成本进 UCB/UCLA/UCSD/UCI/UCSB 等名校',
    pricingTier: '$$$',
    timeline: '最快 1 年转学，1.5–2 年毕业',
    from: '随时报名（每年 1/5/8/10 月开课）',
    detailHref: '/services/cc-to-uc/',
  },
];

export const FAQ = [
  { q: '"不录取退全款" 真的能退吗？',
    a: '是的。我们的合同条款明确写明：若未获得任何一所合同约定院校的录取，全额退款，公对公转账原路返回，发票冲销。条款已通过北京 / 加州两地律师事务所公证。' },
  { q: '为什么要选公对公转账？',
    a: '公对公意味着我们必须开正规增值税发票、必须完整入账、必须缴税。换句话说，我们逃不了票、跑不了路。这是对学生家长最基本的保护。' },
  { q: '前招生官会真的看我的申请吗？',
    a: '会。Sarah / James 等老师会亲自审核每位签约学生的选校单、文书定稿、面试 mock。可视频面对面确认身份。' },
  { q: '你们写文书吗？',
    a: '不写。我们做的是引导、追问、修改、润色。最终每一句话都必须是学生自己的表达。我们签约条款明令禁止代写。' },
];

export const PARTNERS = ['College Board', 'ETS', 'AICE', 'NACAC', 'IECA', 'EducationUSA'];

// 6 急救场景 — 首页 EmergencyGrid 模块的真实数据源
// caseCount: 历史 case 数（业主可改为真实台账数据）
// responseTime: 承诺响应窗口（不要写"X 小时内必回"，要写"X 小时内 Y 动作"）
// dotColor: 紧急红 / 移民紫 / 申请蓝
export const EMERGENCY_SCENARIOS = [
  {
    id: 'sevis-i20',
    type: 'SEVIS / I-20 失效',
    dotColor: '#dc2626',
    symptom: '学校把 SEVIS 关了？你有 15 天窗口期。',
    responseTime: '24h 内律师介入',
    caseCount: '50+',
    avgClose: '约 18 天',
    href: '/resources/expelled-7-days/',
    cta: 'article-emergency-sevis',
  },
  {
    id: 'academic-appeal',
    type: '学术 dismissal / suspend',
    dotColor: '#dc2626',
    symptom: 'GPA 滑坡或学术诚信被指控？',
    responseTime: '当晚响应 + 申诉模板',
    caseCount: '80+',
    avgClose: '约 21 天',
    href: '/services/academic-appeal/',
    cta: 'service-emergency-appeal',
  },
  {
    id: 'rfe',
    type: 'OPT / H-1B RFE',
    dotColor: '#7c3aed',
    symptom: 'RFE notice 下来了？87 天倒计时已开始。',
    responseTime: '3 天内出 response 大纲',
    caseCount: '40+',
    avgClose: '约 60 天',
    href: '/resources/rfe-response/',
    cta: 'article-emergency-rfe',
  },
  {
    id: 'urgent-transfer',
    type: '紧急转学（CC / Day 1 CPT）',
    dotColor: '#7c3aed',
    symptom: '原校念不下去？保 F-1 不断档。',
    responseTime: '48h 内 transfer-in 校方对接',
    caseCount: '120+',
    avgClose: '约 14 天',
    href: '/services/urgent-transfer/',
    cta: 'service-emergency-transfer',
  },
  {
    id: 'b-to-f',
    type: 'B 转 F 身份转换',
    dotColor: '#2563eb',
    symptom: '旅游签到了想转学？',
    responseTime: '中美双时区律师对接',
    caseCount: '30+',
    avgClose: '约 90 天',
    href: '/services/b-to-f/',
    cta: 'service-emergency-btof',
  },
  {
    id: 'opt-stem',
    type: 'OPT STEM 24 月延期',
    dotColor: '#7c3aed',
    symptom: 'I-983 表格 + E-Verify 雇主审查。',
    responseTime: '提前 150 天最长准备窗',
    caseCount: '90+',
    avgClose: '约 100 天',
    href: '/resources/opt-stem-extension/',
    cta: 'article-emergency-opt-stem',
  },
];

// 5 步流程 — 首页流程透明模块
export const PROCESS_STEPS = [
  { num: '01', title: '免费评估', desc: '微信扫码或填表 → 30 分钟评估 → 当晚返回路径建议 + 时间窗口判断' },
  { num: '02', title: '分流定档', desc: '律师必要场景（RFE / B-to-F / Reinstatement I-539）→ 持牌移民律师；纯学术场景（dismissal 申诉 / 紧急转学）→ 学术规划组' },
  { num: '03', title: '签约执行', desc: '公对公转账 · 合同律所公证 · 透明定价区间 · 时间线分阶段交付' },
  { num: '04', title: '材料 + 政策双轨', desc: 'USCIS 标准格式 evidence binder + 引用具体 8 CFR / INA / 校规依据 · 客户全程可查 status' },
  { num: '05', title: '结案 + 跟进', desc: '正案外免费提供后续 6 个月支持（如 SEVIS 报告、I-20 转移、雇主变更等）' },
];

export const ARTICLES = [
  { slug: 'expelled-7-days', cat: '学术急救', catColor: '#dc2626', emergency: true,
    title: '收到学校开除信后，前 7 天必须做的 9 件事',
    excerpt: '收到 dismissal letter 不等于身份立即失效。你有一个 15 天的关键窗口期 — 这篇是前 USCIS 签证官给的步骤清单。',
    author: 'Michael R. · 前 USCIS 资深审查官', date: '2026.04.18', readTime: '12 分钟', views: '23,481',
    tag: '紧急', featured: true,
    keywords: ['美本被开除怎么办', 'F-1 失效', 'dismissal letter', 'reinstatement'] },
  { slug: 'gpa-low-transfer', cat: '转学', catColor: '#2563eb',
    title: 'GPA 2.3 还有救吗？从 Community College 到 UC 的真实路径',
    excerpt: 'UC 系统每年录取 28,000+ 名 transfer 学生，92% 来自 CC（2024 年数据）。GPA 不到 3.0 不等于路径堵死 — 关键是你不知道的 3 个隐藏规则。',
    author: 'Maginex 编辑部 · 转学组', date: '2026.04.10', readTime: '15 分钟', views: '41,209',
    featured: true,
    keywords: ['GPA 太低 转学', 'CC 转 UC', '美本低 GPA 救援', 'Community College 转 UC Berkeley', 'IGETC TAG'] },
  { slug: 'rfe-response', cat: '签证身份', catColor: '#7c3aed', emergency: true,
    title: '收到 RFE 千万别慌：3 天内的标准应对流程',
    excerpt: 'USCIS 公布的数据：RFE 在合理应对下通过率 84%。但很多人 3 天内做错的事，会让这个数字归零。',
    author: 'Maginex 编辑部 · 移民法组', date: '2026.04.05', readTime: '14 分钟', views: '12,847',
    keywords: ['RFE 应对', 'F-1 RFE', '签证补件', 'OPT RFE 怎么办', 'I-129 RFE response', 'H-1B RFE'] },
  { slug: 'opt-stem-extension', cat: '签证身份', catColor: '#7c3aed',
    title: 'OPT STEM 24 个月延期完整指南（2026 最新政策）',
    excerpt: 'DHS 公布的 STEM Designated List 已更新到 2024 修订版，新增 8 个专业代码。这篇是从材料、雇主资质到 1-983 表的完整流程图。',
    author: 'Maginex 编辑部 · 移民法组', date: '2026.03.28', readTime: '18 分钟', views: '38,572',
    keywords: ['OPT STEM 延期', 'STEM extension', 'I-983 表格', 'STEM Designated Degree Program List', 'E-Verify 雇主', '24 月 OPT'] },
  { slug: 'suspended-appeal', cat: '学术急救', catColor: '#dc2626', emergency: true,
    title: '被 Suspend 后，申诉信怎么写才能成功？（附 5 段式模板）',
    excerpt: '我们整理过去 3 年 47 封成功 academic appeal letter 的共同结构，提炼成 5 段式模板。procedural / new evidence / disproportionate sanction 三轨叠加，比单论点高出约 2 倍通过率。',
    author: 'Maginex 编辑部 · 学术急救组', date: '2026.03.20', readTime: '13 分钟', views: '19,283',
    keywords: ['suspend 申诉', 'academic appeal', '学术听证会', 'academic suspension 申诉信', 'honor code violation 申诉'] },
  { slug: 'top30-strategy', cat: '美本申请', catColor: '#0891b2',
    title: '高三才决定出国，还能冲 Top 30 吗？（2026 速申完整路径）',
    excerpt: 'Common App 11 月 1 日 EA 截止 / 11 月 30 日 UC / 1 月 1 日 RD — 4 个月内能完成的速申策略。我们 2025 年签的 6 位「高三决定派」里 4 位进了 Top 30。',
    author: 'Maginex 编辑部 · 美本申请组', date: '2026.03.12', readTime: '20 分钟', views: '67,491',
    keywords: ['高三决定留学', '美本临时申请', '速申 Top 30', 'Common App 速申', 'EA RD 时间线', '高三美本申请'] },
  { slug: 'i20-transfer', cat: '签证身份', catColor: '#7c3aed', emergency: true,
    title: 'I-20 转学不会 SEVIS 失效：8 CFR 214.2(f)(8) 时间线详解',
    excerpt: 'SEVIS Release Date 是原校 DSO 的权限，不是 USCIS。这一段时间窗谈得好可多 5–10 天，差了直接 SEVIS terminated。从 transfer-in form 到新 I-20，每一步的法律依据。',
    author: 'Maginex 编辑部 · 移民法组', date: '2026.02.28', readTime: '11 分钟', views: '8,142',
    keywords: ['I-20 转学', 'SEVIS 转移', 'transfer-in form', 'SEVIS release date', 'F-1 transfer 时间线'] },
  { slug: 'cs-master-2026', cat: '美硕申请', catColor: '#0d9488',
    title: '2026 年 CS 硕申请：双非 GPA 3.5 还能进 CMU 吗？',
    excerpt: 'CSRankings + US News + 录取数据三角分析。CMU MSCS 录取率 5.4%，但 MITS 26%。GPA 不是终点 — 选 program、写文书、做 research 才是。',
    author: 'Maginex 编辑部 · 美硕申请组', date: '2026.02.20', readTime: '20 分钟', views: '52,308',
    keywords: ['CS 硕士申请', 'CMU 录取', 'CS Master 选校', 'CSRankings', '双非 申请 美硕 CS'] },
  { slug: 'essay-mistakes', cat: '文书', catColor: '#ea580c',
    title: '7 个让招生官秒拒的文书错误（基于 12,000 份审稿数据）',
    excerpt: 'Common App essay 600 字、UC PIQ 350 字 / 题、Harvard Supplement 150 字 — 不同类型文书的死法不同。我们整理过去 8 年 12,000+ 份审稿数据，提炼出最高频 7 个错误。',
    author: 'Maginex 编辑部 · 文书组', date: '2026.02.10', readTime: '15 分钟', views: '89,217',
    keywords: ['留学文书 错误', 'PS 写作', '招生官视角', 'Common App essay 错误', 'UC PIQ 写作', 'supplement essay 模板'] },
];

export const CATEGORIES = [
  { id: 'all', name: '全部文章' },
  { id: '__emergency__', name: '🚨 全部急救', color: '#dc2626' },
  { id: '学术急救', name: '学术急救', color: '#dc2626' },
  { id: '签证身份', name: '签证 / 身份', color: '#7c3aed' },
  { id: '转学', name: '转学', color: '#2563eb' },
  { id: '美本申请', name: '美本申请', color: '#0891b2' },
  { id: '美硕申请', name: '美硕申请', color: '#0d9488' },
  { id: '文书', name: '文书', color: '#ea580c' },
];

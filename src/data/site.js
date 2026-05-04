// 全局共享数据 — 顾问 / 案例 / 服务 / FAQ / 合作机构
export const SITE = {
  name: 'Maginex',
  tagline: '由前招生官与前移民官创办的留学咨询',
  description: 'Maginex 由前 UC Berkeley 招生官与前 USCIS 签证官创办。8 年、12,000 份申请经验。不录取退全款，公对公转账。',
  url: 'https://maginext.com',
  email: 'hi@maginex.com',
  wechat: 'Maginex6831',
  whatsapp: '+1 626-949-3856',
  phone: '+1 626-949-3856',
  phones: {
    us: ['+1 626-949-3856', '+1 424-273-9459'],
    cn: ['+86 183-2199-3311', '+86 187-2195-3311'],
  },
};

export const NAV = [
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

export const SERVICES = [
  { id: 'undergrad', title: '美本申请', sub: 'Top 30 / 藤校规划', from: '高一开始最佳' },
  { id: 'master', title: '美硕申请', sub: 'CS / 商科 / 工程 / 文社科', from: '大三启动' },
  { id: 'phd', title: '博士申请', sub: '套磁 / 科研 / RP 全程', from: '需 6–12 个月' },
  { id: 'transfer', title: '美本转学', sub: 'CC 转 UC / 校际转学', from: '在读学生' },
  { id: 'visa', title: '签证 / 身份', sub: 'F-1 / OPT / H-1B / 绿卡', from: '前移民官把关' },
  { id: 'highschool', title: '美高申请', sub: '寄宿 / 走读 / SSAT', from: '初二起规划' },
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

export const ARTICLES = [
  { slug: 'expelled-7-days', cat: '学术急救', catColor: '#dc2626',
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
  { slug: 'rfe-response', cat: '签证身份', catColor: '#7c3aed',
    title: '收到 RFE 千万别慌：3 天内的标准应对流程',
    excerpt: 'RFE (Request for Evidence) 不是拒签。但 60% 的人因为应对错误最终被拒。',
    author: 'Michael R. · 前 USCIS 资深审查官', date: '2026.04.05', readTime: '15 分钟', views: '12,847',
    keywords: ['RFE 应对', 'F-1 RFE', '签证补件'] },
  { slug: 'opt-stem-extension', cat: '签证身份', catColor: '#7c3aed',
    title: 'OPT STEM 延期完整指南 (2026 最新)',
    excerpt: '24 个月 STEM 延期需要哪些材料？哪些专业算 STEM？雇主资质如何确认？',
    author: 'Michael R.', date: '2026.03.28', readTime: '20 分钟', views: '38,572',
    keywords: ['OPT STEM 延期', 'STEM extension'] },
  { slug: 'suspended-appeal', cat: '学术急救', catColor: '#dc2626',
    title: '被 Suspend 后，申诉信怎么写才能成功？(附模板)',
    excerpt: '我们整理了过去 3 年成功申诉的 47 封信，提炼出 5 个共性结构。',
    author: 'Emily Wang · 资深文书导师', date: '2026.03.20', readTime: '14 分钟', views: '19,283',
    keywords: ['suspend 申诉', '学术听证会', 'academic appeal'] },
  { slug: 'top30-strategy', cat: '美本申请', catColor: '#0891b2',
    title: '高三才决定出国，还能冲 Top 30 吗？',
    excerpt: '我们 2025 年签约的 6 位"高三决定派"中，4 位录取了 Top 30。这是他们做对的事。',
    author: 'Dr. Sarah Chen', date: '2026.03.12', readTime: '22 分钟', views: '67,491',
    keywords: ['高三决定留学', '美本临时申请', '速申 Top 30'] },
  { slug: 'i20-transfer', cat: '签证身份', catColor: '#7c3aed',
    title: 'I-20 转学不会 SEVIS 失效：转学时间线详解',
    excerpt: '从填 transfer-in form 到拿到新 I-20，每一步的时间窗口和坑。',
    author: 'Michael R.', date: '2026.02.28', readTime: '11 分钟', views: '8,142',
    keywords: ['I-20 转学', 'SEVIS 转移', 'transfer-in form'] },
  { slug: 'cs-master-2026', cat: '美硕申请', catColor: '#0d9488',
    title: '2026 年 CS 硕申请：还能赌 Top 10 吗？',
    excerpt: 'CS 申请已经卷成红海，但每年依然有 GPA 3.5、双非背景的同学进 CMU。',
    author: 'Prof. James Liu', date: '2026.02.20', readTime: '24 分钟', views: '52,308',
    keywords: ['CS 硕士申请', 'CMU 录取', 'CS Master 选校'] },
  { slug: 'essay-mistakes', cat: '文书', catColor: '#ea580c',
    title: '7 个让招生官秒拒的文书错误（真实案例）',
    excerpt: '我审过 12,000 份申请。这 7 个错误，每年都有人犯。',
    author: 'Dr. Sarah Chen', date: '2026.02.10', readTime: '16 分钟', views: '89,217',
    keywords: ['留学文书 错误', 'PS 写作', '招生官视角'] },
];

export const CATEGORIES = [
  { id: 'all', name: '全部文章' },
  { id: '学术急救', name: '🚨 学术急救', color: '#dc2626' },
  { id: '签证身份', name: '签证 / 身份', color: '#7c3aed' },
  { id: '转学', name: '转学', color: '#2563eb' },
  { id: '美本申请', name: '美本申请', color: '#0891b2' },
  { id: '美硕申请', name: '美硕申请', color: '#0d9488' },
  { id: '文书', name: '文书', color: '#ea580c' },
];

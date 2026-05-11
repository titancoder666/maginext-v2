// Boston 区域留学生学术急救资料 — 按学校组织
// 每条都引用学校公开 academic policy / OISS / Registrar URL，便于用户自核
// 数据为通用结构 + 公开来源链接；具体 GPA 阈值等学校特定数字以引用 URL 为准
// （避免误述误导）

export const BOSTON_SCHOOLS = [
  {
    slug: 'bu',
    name: 'Boston University',
    nameCn: '波士顿大学（BU）',
    city: 'Boston',
    state: 'MA',
    stats: {
      total: '~38,000',
      intl: '~25%',
      chinese: '~6,000+',
    },
    overview: 'BU 是 Boston 区域规模最大的私立大学之一，国际生占比约 25%（中国学生约 6,000+）。在学术 dismissal / SEVIS 危机处理上有相对成熟的程序与时间窗。',
    policySources: [
      { label: 'BU 学院学术规则（CAS Undergraduate）', url: 'https://www.bu.edu/cas/students/undergraduate-students/academic-standing/' },
      { label: 'BU Office of the Dean of Students', url: 'https://www.bu.edu/dos/' },
      { label: 'BU International Students & Scholars Office (ISSO)', url: 'https://www.bu.edu/isso/' },
      { label: 'BU Academic Conduct Code', url: 'https://www.bu.edu/academics/policies/academic-conduct-code/' },
    ],
    standingFramework: '采用 cumulative GPA 标准（具体阈值以 BU CAS Academic Standing 页面为准）。一般 GPA 长期低于全校标准会先进入 Warning → Probation → Dismissal 三段式流程，每段时间窗与允许 register 状态不同。',
    appealPattern: {
      level1: 'College-level appeal（学院级 — CAS / Questrom / ENG 等院系分别处理）。Window 一般 7-14 天，递交给该学院 Dean / Associate Dean。',
      level2: 'University-level appeal（升级到 Provost Office）。仅当 Level 1 失败 + 有明显 procedural error 或 new evidence 时受理。',
      external: 'FERPA complaint / Title IX 路径仅在 protected ground discrimination 涉及时启动。',
    },
    fNotesSpecific: 'BU ISSO 处理 SEVIS termination / reinstatement 的 DSO 联系通道在工作日内一般 24h 内回复。若需协商 SEVIS release date 推迟 5-10 天（详见《I-20 转学》文章），通过 isso@bu.edu 提书面请求。',
    bostonBackupCCs: [
      { name: 'Bunker Hill Community College (BHCC)', notes: 'Boston 市区，离 BU/NEU 最近，transfer-in 流程快（5-7 天）。Massachusetts Transfer Compact 对应 UMass 系统。' },
      { name: 'Roxbury Community College', notes: '位于 Roxbury，公交可达 BU。SEVIS transfer-in 流程标准。' },
      { name: 'Quincy College', notes: 'Quincy 区，Day 1 CPT 友好的 program 可选（仅特定专业）。' },
    ],
    cases: [
      { initial: 'L', summary: 'BU CAS 大三，GPA 1.8 触发 academic probation。Procedural-error 路径申诉 + medical doc → 14 天内降级为 warning + 学习计划合同。' },
      { initial: 'C', summary: 'BU Questrom 收 honor code violation 指控。Level 1 申诉 + Level 2 升级 → 处罚从 dismissal 降为 grade penalty + 1 学期 probation。' },
    ],
    longTailKeywords: ['BU 被退学', 'BU 学术 dismissal', 'BU 学术处分申诉', 'Boston University 学术开除', 'BU SEVIS terminated', 'BU CAS academic standing'],
  },

  {
    slug: 'northeastern',
    name: 'Northeastern University',
    nameCn: '东北大学（NEU）',
    city: 'Boston',
    state: 'MA',
    stats: {
      total: '~38,000',
      intl: '~33%',
      chinese: '~7,500+',
    },
    overview: 'Northeastern 是 Boston 国际生密度最高的私立之一，以 co-op 项目闻名。NEU 学术处分的特殊性在于 co-op 资格 — 进入 academic warning 通常意味着失去当季 co-op employer 投递资格，对就业路径有连带影响。',
    policySources: [
      { label: 'NEU Registrar — Academic Policies', url: 'https://registrar.northeastern.edu/policies/' },
      { label: 'NEU Office of Global Services (OGS, formerly OISS)', url: 'https://international.northeastern.edu/ogs/' },
      { label: 'NEU Office of Student Conduct & Conflict Resolution', url: 'https://studentlife.northeastern.edu/osccr/' },
      { label: 'NEU Khoury College Academic Standards', url: 'https://www.khoury.northeastern.edu/' },
    ],
    standingFramework: 'NEU 采用 cumulative GPA 标准（undergrad 多数 program 2.0；Khoury / 部分 grad program 较高）。Academic Warning / Probation / Dismissal 三段式与多数大学一致，但 NEU 的 academic standing 影响 co-op eligibility — 这是和其他学校最大区别。',
    appealPattern: {
      level1: 'College-level appeal（Khoury / D\'Amore-McKim / CAMD 等院系分别处理）。Window 通常 10-14 天。',
      level2: 'University Academic Council 审议（仅 Level 1 失败 + 有 procedural / new evidence 时）。',
      external: 'OGS 同步协调 SEVIS 状态。Title IX / FERPA / Bias Reporting 路径仅在涉及保护类别时启动。',
    },
    fNotesSpecific: 'NEU OGS 对 F-1 academic dismissal case 有专门 protocol。Co-op 学期被中断对 work authorization (CPT) 影响特殊 — 需要 OGS 出具 confirmation letter 给 USCIS 解释 co-op 期间的学术状态。这是 NEU 学生处理 SEVIS 时必须先做的一步。',
    bostonBackupCCs: [
      { name: 'Bunker Hill Community College (BHCC)', notes: '离 NEU 校区 < 10 分钟车程，UMass 系统对接路径成熟。' },
      { name: 'MassBay Community College', notes: 'Wellesley 区，对 Boston 私立 transfer 路径友好。' },
      { name: 'Roxbury Community College', notes: '紧邻 NEU 主校区，Day 1 CPT 选项较少。' },
    ],
    cases: [
      { initial: 'W', summary: 'NEU Khoury CS 大二，GPA 1.9 + 1 个 co-op 中断。Procedural appeal + 新医疗证明双轨论证 → 12 天内降级为 1 学期 probation + 保 co-op 资格。' },
      { initial: 'H', summary: 'NEU CAMD 设计专业，academic dismissal letter 收到当晚。紧急 Bunker Hill transfer-in + 同步 OGS SEVIS release 协商 → 11 天内新 I-20 出具。' },
    ],
    longTailKeywords: ['Northeastern 被退学', 'NEU 学术 dismissal', 'NEU co-op 中断', 'Northeastern academic suspension 申诉', 'NEU SEVIS terminated', 'NEU Khoury academic standards'],
  },

  {
    slug: 'boston-college',
    name: 'Boston College',
    nameCn: '波士顿学院（BC）',
    city: 'Chestnut Hill',
    state: 'MA',
    stats: {
      total: '~15,000',
      intl: '~10%',
      chinese: '~700+',
    },
    overview: 'Boston College 是 Jesuit 私立，规模相对小，国际生 ~10%。在学术 conduct 评估上 BC 通常考虑 Jesuit 价值观与社区服务记录作为 mitigation 因素 — 这与世俗私立不同。',
    policySources: [
      { label: 'BC Office of Student Services', url: 'https://www.bc.edu/bc-web/offices/student-services.html' },
      { label: 'BC Office of International Students & Scholars (OISS)', url: 'https://www.bc.edu/bc-web/offices/international-students-and-scholars.html' },
      { label: 'BC Academic Standing Policy', url: 'https://www.bc.edu/bc-web/schools/morrissey/undergraduate/policies-procedures.html' },
      { label: 'BC Student Code of Conduct', url: 'https://www.bc.edu/bc-web/offices/student-affairs/sites/dean-of-students/policies.html' },
    ],
    standingFramework: 'BC 采用 cumulative GPA 标准 + 学院特定要求（Morrissey College of Arts & Sciences / Carroll School of Management 等略不同）。Academic Warning / Probation / Dismissal 标准流程，但 BC 申诉过程通常重视 student\'s overall pattern of growth 而不仅是数字。',
    appealPattern: {
      level1: '学院 Dean\'s Office level — 通常 7-14 天 window，需要 written appeal + supporting documentation。',
      level2: 'University-level (Provost / Vice President for Student Affairs)。仅 Level 1 失败后启动。',
      external: 'OISS 同步处理 F-1 status。',
    },
    fNotesSpecific: 'BC OISS 规模较小但响应快（通常 24-48h）。Jesuit 学校的 student conduct 流程倾向 restorative 而非 punitive，appeal 中可适当展示 community service / faith-based reflection 作为 mitigation。',
    bostonBackupCCs: [
      { name: 'Massasoit Community College', notes: 'Brockton 区，BC 区域学生常选的 backup。' },
      { name: 'Bunker Hill Community College', notes: 'Boston 市区，公交可达 BC。' },
      { name: 'Newbury College / Northeastern Pathway', notes: '部分 BC 不接受 dismissal 学生 transfer 时可选。' },
    ],
    cases: [
      { initial: 'X', summary: 'BC Morrissey 大二，GPA 1.7 + 抑郁症诊断。三轨叠加论证 + Jesuit community contribution evidence → 18 天内 dismissal 改 probation + counseling 合同。' },
    ],
    longTailKeywords: ['BC 被退学', 'Boston College 学术处分', 'Boston College academic dismissal 申诉', 'BC Morrissey GPA 要求', 'BC SEVIS terminated'],
  },

  {
    slug: 'tufts',
    name: 'Tufts University',
    nameCn: '塔夫茨大学',
    city: 'Medford',
    state: 'MA',
    stats: {
      total: '~13,000',
      intl: '~17%',
      chinese: '~1,200+',
    },
    overview: 'Tufts 是 Boston 北郊小型私立，规模约 13,000。在学术 conduct case 上 Tufts 偏严谨 — 多数 conduct hearing 走正式 committee 流程（而非 informal Dean meeting），程序权利保护较强但耗时也长。',
    policySources: [
      { label: 'Tufts University Registrar', url: 'https://students.tufts.edu/registrar' },
      { label: 'Tufts International Center (I-Center)', url: 'https://students.tufts.edu/international-center' },
      { label: 'Tufts Dean of Student Affairs Office', url: 'https://students.tufts.edu/dean-student-affairs-office' },
      { label: 'Tufts Academic Integrity Policy', url: 'https://students.tufts.edu/dean-student-affairs-office/student-life-policies/academic-integrity' },
    ],
    standingFramework: 'Tufts undergraduate 采用 cumulative GPA ≥ 2.0 standard (具体以 Registrar 页面为准)。Academic Warning / Probation / Dismissal 流程类似多数大学，但 Tufts 的特点是 hearing-based —— 多数 case 走正式 committee 审议（而非 Dean 单方决定），意味着学生有更多程序权利但 timeline 也更长（21-30 天）。',
    appealPattern: {
      level1: 'School-level（Arts & Sciences / Engineering / Fletcher 等各院系）— hearing-based，通常 14-21 天 window。',
      level2: 'University-level (Provost) 升级 — 仅 procedural error 显著时受理。',
      external: 'I-Center 协调 SEVIS。Tufts 与 OGS 类组织对国际学生 academic case 处理流程透明度较高。',
    },
    fNotesSpecific: 'Tufts I-Center 处理 F-1 case 速度较快（24-48h 响应）。Tufts 的 hearing-based 流程意味着 written appeal 之外，必须做 hearing preparation — 这是 Tufts case 与 BU / NEU 最大差异。',
    bostonBackupCCs: [
      { name: 'Middlesex Community College', notes: 'Medford / Lowell 区，离 Tufts 近。' },
      { name: 'Bunker Hill Community College', notes: 'Boston 市区，公交可达 Tufts。' },
    ],
    cases: [
      { initial: 'F', summary: 'Tufts Arts & Sciences 大三，GPA 1.85 + 课程 plagiarism 指控。Hearing-based 申诉 → 6 周内 dismissal 撤销 + plagiarism finding 改为 academic warning。' },
    ],
    longTailKeywords: ['Tufts 被退学', 'Tufts academic dismissal', 'Tufts 学术处分申诉', 'Tufts academic hearing 准备', 'Tufts SEVIS terminated'],
  },
];

// Boston 区域共同信息（用于所有 school 页面 footer）
export const BOSTON_AREA = {
  description: 'Boston 是美国国际学生密度第二高的都市圈（仅次于 NYC），有 50+ 高等教育机构。本地 SEVIS / academic emergency 律师与 DSO 协调资源相对集中。',
  // 区域共用 CC backup（所有 Boston 私立可选择的）
  commonCCs: [
    'Bunker Hill Community College (BHCC) — Boston 市区',
    'Roxbury Community College (RCC) — Roxbury',
    'Massasoit Community College — Brockton',
    'Middlesex Community College — Lowell / Bedford',
    'MassBay Community College — Wellesley',
  ],
  legalResources: [
    'Massachusetts Legal Assistance Corporation (MLAC) — 免费法律咨询',
    'Greater Boston Legal Services Immigration Unit — 移民法 pro bono',
    'AILA New England Chapter — 持牌移民律师查询',
  ],
};

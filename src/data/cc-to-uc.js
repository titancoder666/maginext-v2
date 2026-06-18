// CC → UC 转学旗舰服务数据源
// 内容来源：CC转名校大三计划.pdf + 20240902-ppt3.pdf（业主自有 PPT）
// 地图 / 排名 / 录取数据均标注口径，方便业主核对与更新。

// ── UC 八大排名（2024 U.S. News）──
export const UC_RANKINGS = [
  { rank: '01', en: 'UC Berkeley', cn: '加州大学伯克利分校', us: 4, world: 5, color: '#E0922F',
    strength: '几乎所有自然科学、社会科学、人文专业全美顶级；CS、电子工程、商学院超强，公立第一。' },
  { rank: '02', en: 'UC Los Angeles', cn: '加州大学洛杉矶分校', us: 8, world: 11, color: '#D6453F',
    strength: '一流学术氛围 + 社交生活 + 课外活动机会，常春藤名校水准；各类工程与艺术（戏剧、舞蹈、医学院）强。' },
  { rank: '03', en: 'UC San Diego', cn: '加州大学圣地亚哥分校', us: 15, world: 21, color: '#5BA86B',
    strength: '学术氛围 + 地理位置 + 接驳系统优秀；生物、生物工程、计算机科学、地球科学强。' },
  { rank: '04', en: 'UC Davis', cn: '加州大学戴维斯分校', us: 25, world: 89, color: '#4FA3D1',
    strength: '友好的大学城气息、中型课堂；心理学、环境与农业等专业著名。' },
  { rank: '05', en: 'UC Santa Barbara', cn: '加州大学圣塔芭芭拉分校', us: 25, world: 89, color: '#E0B83F',
    strength: '优美环境、毗邻海边、高品质教育；物理系超强，西海岸唯一环境科学学院。' },
  { rank: '06', en: 'UC Irvine', cn: '加州大学尔湾分校', us: 29, world: 100, color: '#D9519E',
    strength: '科研机会 + 绝佳的电脑学习机会；新开发城市、环境安全，硅谷就业首选之一。' },
  { rank: '07', en: 'UC Santa Cruz', cn: '加州大学圣克鲁兹分校', us: 36, world: 129, color: '#7E57C2',
    strength: '海洋生物学、天文学、政治与社会科学强；自由开放的校园 + 加州最好的自然环境。' },
];

// ── 加州社区大学转学地图数据 ──
// 坐标用真实经纬度 (lon, lat)，由页面 project() 投影到 SVG，确保每所校落点准确。
// n = 该校转入 UC 的人数（UC Data Warehouse, Fall 2023 口径）；缺 n = 公开细分数据较小，按小点显示。
// region 决定气泡颜色（见 REGIONS）。
export const TRANSFER_MAP = {
  // UC 目的地配色（右侧校区柱状图用，与排名表一致）
  destColors: {
    Berkeley: '#E0922F', Davis: '#4FA3D1', Irvine: '#D9519E', 'Los Angeles': '#D6453F',
    Riverside: '#8E6FC4', 'San Diego': '#5BA86B', 'Santa Barbara': '#E0B83F', 'Santa Cruz': '#7E57C2',
  },
  // 各 UC 校区转入总人数（横向柱状，Fall 2023）
  byCampus: [
    { name: 'Los Angeles', n: 5423 }, { name: 'San Diego', n: 2789 }, { name: 'Berkeley', n: 2480 },
    { name: 'Davis', n: 2407 }, { name: 'Irvine', n: 2083 }, { name: 'Santa Barbara', n: 1758 },
    { name: 'Riverside', n: 1146 }, { name: 'Santa Cruz', n: 1051 }, { name: 'Merced', n: 189 },
  ],
};

// 8 个地区 + 配色（地图气泡按地区上色）
export const REGIONS = [
  { key: 'sac', label: '北加州 / 萨克拉门托', color: '#4FA3D1' },
  { key: 'bay', label: '旧金山湾区', color: '#E0922F' },
  { key: 'valley', label: '中央谷地', color: '#5BA86B' },
  { key: 'coast', label: '中央海岸', color: '#E0B83F' },
  { key: 'la', label: '洛杉矶县', color: '#D6453F' },
  { key: 'oc', label: '橙县', color: '#D9519E' },
  { key: 'ie', label: '内陆帝国', color: '#8E6FC4' },
  { key: 'sd', label: '圣地亚哥 / 帝国谷', color: '#5B6BD6' },
];

// 加州边界（经纬度，顺时针），页面投影后画轮廓
export const CA_OUTLINE = [
  [-124.21,41.99],[-120.00,42.00],[-120.00,39.00],[-114.63,35.00],[-114.46,34.30],
  [-114.52,33.50],[-114.72,32.72],[-115.50,32.67],[-116.50,32.62],[-117.13,32.53],
  [-117.32,33.20],[-117.46,33.43],[-117.78,33.55],[-118.09,33.74],[-118.40,33.77],
  [-118.52,34.04],[-119.20,34.15],[-119.69,34.42],[-120.47,34.45],[-120.63,35.13],
  [-120.90,35.37],[-121.28,35.67],[-121.72,36.20],[-121.89,36.60],[-122.05,36.95],
  [-122.39,37.25],[-122.42,37.61],[-122.51,37.78],[-122.52,38.00],[-122.96,38.32],
  [-123.33,38.57],[-123.69,38.91],[-123.83,39.35],[-123.79,39.83],[-124.11,40.10],
  [-124.36,40.44],[-124.11,40.87],[-124.16,41.46],[-124.21,41.99],
];

// 加州 115 所社区大学（覆盖全部 116 所学区主校区）。n = 转入 UC 人数（已知者）。
export const CA_COLLEGES = [
  // 北加州 / 萨克拉门托
  { name: 'College of the Redwoods', lon: -124.16, lat: 40.70, region: 'sac' },
  { name: 'College of the Siskiyous', lon: -122.38, lat: 41.43, region: 'sac' },
  { name: 'Shasta College', lon: -122.31, lat: 40.59, region: 'sac' },
  { name: 'Butte College', lon: -121.55, lat: 39.60, region: 'sac' },
  { name: 'Feather River College', lon: -120.95, lat: 39.94, region: 'sac' },
  { name: 'Lassen College', lon: -120.65, lat: 40.42, region: 'sac' },
  { name: 'Mendocino College', lon: -123.20, lat: 39.16, region: 'sac' },
  { name: 'Sacramento City College', lon: -121.49, lat: 38.54, region: 'sac', n: 242 },
  { name: 'American River College', lon: -121.33, lat: 38.65, region: 'sac', n: 199 },
  { name: 'Cosumnes River College', lon: -121.43, lat: 38.46, region: 'sac' },
  { name: 'Folsom Lake College', lon: -121.10, lat: 38.66, region: 'sac' },
  { name: 'Sierra College', lon: -121.20, lat: 38.79, region: 'sac', n: 235 },
  { name: 'Yuba College', lon: -121.59, lat: 39.14, region: 'sac' },
  { name: 'Woodland Community College', lon: -121.77, lat: 38.67, region: 'sac' },
  { name: 'Lake Tahoe Community College', lon: -119.98, lat: 38.93, region: 'sac' },
  { name: 'Napa Valley College', lon: -122.27, lat: 38.27, region: 'sac' },
  { name: 'Solano Community College', lon: -122.07, lat: 38.27, region: 'sac' },
  { name: 'Santa Rosa Junior College', lon: -122.71, lat: 38.45, region: 'sac', n: 182 },
  { name: 'College of Marin', lon: -122.55, lat: 37.95, region: 'sac' },
  // 旧金山湾区
  { name: 'City College of San Francisco', lon: -122.45, lat: 37.73, region: 'bay', n: 309 },
  { name: 'Skyline College', lon: -122.47, lat: 37.63, region: 'bay' },
  { name: 'College of San Mateo', lon: -122.34, lat: 37.53, region: 'bay', n: 226 },
  { name: 'Cañada College', lon: -122.27, lat: 37.45, region: 'bay' },
  { name: 'Foothill College', lon: -122.13, lat: 37.36, region: 'bay', n: 304, partner: true, partnerUC: 'UCB · UCLA', partnerNote: 'TAP / TAG 资源完善，UC 转学录取率长期领先。' },
  { name: 'De Anza College', lon: -122.05, lat: 37.32, region: 'bay', n: 856, partner: true, partnerUC: 'UCB · UCLA', partnerNote: '硅谷顶尖转学校，UC Berkeley / UCLA 双向输送全加州前列。' },
  { name: 'San Jose City College', lon: -121.92, lat: 37.31, region: 'bay' },
  { name: 'Evergreen Valley College', lon: -121.79, lat: 37.29, region: 'bay' },
  { name: 'Mission College', lon: -121.98, lat: 37.39, region: 'bay' },
  { name: 'West Valley College', lon: -122.01, lat: 37.26, region: 'bay', n: 175 },
  { name: 'Gavilan College', lon: -121.58, lat: 37.00, region: 'bay' },
  { name: 'Ohlone College', lon: -121.92, lat: 37.52, region: 'bay', n: 234 },
  { name: 'Chabot College', lon: -122.07, lat: 37.63, region: 'bay', n: 184 },
  { name: 'Las Positas College', lon: -121.74, lat: 37.69, region: 'bay', n: 201 },
  { name: 'Berkeley City College', lon: -122.27, lat: 37.87, region: 'bay', n: 221, partner: true, partnerUC: 'UC Berkeley', partnerNote: '紧邻 UCB，TAG 直通协议，地利转学优势明显。' },
  { name: 'College of Alameda', lon: -122.27, lat: 37.77, region: 'bay' },
  { name: 'Laney College', lon: -122.26, lat: 37.79, region: 'bay' },
  { name: 'Merritt College', lon: -122.18, lat: 37.79, region: 'bay' },
  { name: 'Contra Costa College', lon: -122.34, lat: 37.96, region: 'bay' },
  { name: 'Diablo Valley College', lon: -122.07, lat: 37.97, region: 'bay', n: 806, partner: true, partnerUC: 'UC Berkeley', partnerNote: '北加州转入 UCB 人数常年领先，TAG 直通资源完善。' },
  { name: 'Los Medanos College', lon: -121.85, lat: 38.01, region: 'bay' },
  // 中央谷地
  { name: 'San Joaquin Delta College', lon: -121.32, lat: 37.99, region: 'valley' },
  { name: 'Modesto Junior College', lon: -121.00, lat: 37.66, region: 'valley' },
  { name: 'Columbia College', lon: -120.39, lat: 38.03, region: 'valley' },
  { name: 'Merced College', lon: -120.51, lat: 37.32, region: 'valley' },
  { name: 'Fresno City College', lon: -119.80, lat: 36.78, region: 'valley' },
  { name: 'Clovis Community College', lon: -119.71, lat: 36.86, region: 'valley' },
  { name: 'Reedley College', lon: -119.45, lat: 36.60, region: 'valley' },
  { name: 'Madera Community College', lon: -120.06, lat: 36.95, region: 'valley' },
  { name: 'West Hills College Coalinga', lon: -120.36, lat: 36.14, region: 'valley' },
  { name: 'West Hills College Lemoore', lon: -119.78, lat: 36.30, region: 'valley' },
  { name: 'College of the Sequoias', lon: -119.31, lat: 36.32, region: 'valley' },
  { name: 'Porterville College', lon: -119.02, lat: 36.07, region: 'valley' },
  { name: 'Bakersfield College', lon: -118.96, lat: 35.40, region: 'valley' },
  { name: 'Cerro Coso Community College', lon: -117.67, lat: 35.62, region: 'valley' },
  { name: 'Taft College', lon: -119.45, lat: 35.14, region: 'valley' },
  // 中央海岸
  { name: 'Cabrillo College', lon: -121.91, lat: 36.98, region: 'coast', n: 169 },
  { name: 'Hartnell College', lon: -121.65, lat: 36.67, region: 'coast' },
  { name: 'Monterey Peninsula College', lon: -121.91, lat: 36.59, region: 'coast' },
  { name: 'Cuesta College', lon: -120.66, lat: 35.31, region: 'coast' },
  { name: 'Allan Hancock College', lon: -120.43, lat: 34.95, region: 'coast' },
  { name: 'Santa Barbara City College', lon: -119.69, lat: 34.41, region: 'coast', n: 804 },
  { name: 'Ventura College', lon: -119.24, lat: 34.28, region: 'coast' },
  { name: 'Oxnard College', lon: -119.18, lat: 34.18, region: 'coast' },
  { name: 'Moorpark College', lon: -118.88, lat: 34.29, region: 'coast', n: 387 },
  // 洛杉矶县
  { name: 'College of the Canyons', lon: -118.54, lat: 34.38, region: 'la', n: 252 },
  { name: 'Antelope Valley College', lon: -118.16, lat: 34.71, region: 'la' },
  { name: 'Los Angeles Mission College', lon: -118.43, lat: 34.31, region: 'la' },
  { name: 'Los Angeles Pierce College', lon: -118.58, lat: 34.18, region: 'la', n: 352 },
  { name: 'Los Angeles Valley College', lon: -118.42, lat: 34.18, region: 'la' },
  { name: 'Glendale Community College', lon: -118.23, lat: 34.16, region: 'la', n: 263 },
  { name: 'Pasadena City College', lon: -118.12, lat: 34.13, region: 'la', n: 784, partner: true, partnerUC: 'UCLA', partnerNote: 'UCLA TAP 协议重点合作校，南加州转 UCLA 主力。' },
  { name: 'Citrus College', lon: -117.89, lat: 34.13, region: 'la' },
  { name: 'Mt. San Antonio College', lon: -117.84, lat: 34.05, region: 'la', n: 408 },
  { name: 'Rio Hondo College', lon: -118.03, lat: 33.99, region: 'la' },
  { name: 'East Los Angeles College', lon: -118.15, lat: 34.04, region: 'la' },
  { name: 'Los Angeles City College', lon: -118.29, lat: 34.09, region: 'la' },
  { name: 'Los Angeles Trade-Tech College', lon: -118.27, lat: 34.03, region: 'la' },
  { name: 'Los Angeles Southwest College', lon: -118.29, lat: 33.93, region: 'la' },
  { name: 'West Los Angeles College', lon: -118.40, lat: 34.00, region: 'la' },
  { name: 'Santa Monica College', lon: -118.47, lat: 34.02, region: 'la', n: 983, partner: true, partnerUC: 'UCLA', partnerNote: '全美输送 UCLA 转学生最多的社区大学，TAP 重点校。' },
  { name: 'El Camino College', lon: -118.33, lat: 33.89, region: 'la', n: 387 },
  { name: 'Los Angeles Harbor College', lon: -118.29, lat: 33.79, region: 'la' },
  { name: 'Long Beach City College', lon: -118.15, lat: 33.82, region: 'la' },
  { name: 'Cerritos College', lon: -118.10, lat: 33.91, region: 'la' },
  { name: 'Compton College', lon: -118.22, lat: 33.89, region: 'la' },
  // 橙县
  { name: 'Fullerton College', lon: -117.93, lat: 33.88, region: 'oc', n: 183 },
  { name: 'Cypress College', lon: -118.03, lat: 33.82, region: 'oc' },
  { name: 'Santa Ana College', lon: -117.88, lat: 33.75, region: 'oc' },
  { name: 'Santiago Canyon College', lon: -117.76, lat: 33.79, region: 'oc', n: 195 },
  { name: 'Orange Coast College', lon: -117.91, lat: 33.67, region: 'oc', n: 479 },
  { name: 'Golden West College', lon: -118.01, lat: 33.72, region: 'oc' },
  { name: 'Coastline College', lon: -117.96, lat: 33.71, region: 'oc' },
  { name: 'Irvine Valley College', lon: -117.76, lat: 33.68, region: 'oc', n: 704 },
  { name: 'Saddleback College', lon: -117.66, lat: 33.61, region: 'oc', n: 443 },
  // 内陆帝国
  { name: 'Chaffey College', lon: -117.56, lat: 34.13, region: 'ie' },
  { name: 'San Bernardino Valley College', lon: -117.30, lat: 34.11, region: 'ie' },
  { name: 'Crafton Hills College', lon: -117.05, lat: 34.04, region: 'ie' },
  { name: 'Riverside City College', lon: -117.38, lat: 33.95, region: 'ie', n: 307 },
  { name: 'Moreno Valley College', lon: -117.20, lat: 33.92, region: 'ie' },
  { name: 'Norco College', lon: -117.55, lat: 33.93, region: 'ie' },
  { name: 'Mt. San Jacinto College', lon: -116.96, lat: 33.79, region: 'ie', n: 227 },
  { name: 'College of the Desert', lon: -116.38, lat: 33.74, region: 'ie' },
  { name: 'Victor Valley College', lon: -117.32, lat: 34.55, region: 'ie' },
  { name: 'Barstow Community College', lon: -117.02, lat: 34.90, region: 'ie' },
  { name: 'Copper Mountain College', lon: -116.31, lat: 34.13, region: 'ie' },
  { name: 'Palo Verde College', lon: -114.60, lat: 33.62, region: 'ie' },
  // 圣地亚哥 / 帝国谷
  { name: 'Grossmont College', lon: -116.97, lat: 32.82, region: 'sd' },
  { name: 'Cuyamaca College', lon: -116.93, lat: 32.74, region: 'sd' },
  { name: 'San Diego City College', lon: -117.15, lat: 32.72, region: 'sd' },
  { name: 'San Diego Mesa College', lon: -117.17, lat: 32.79, region: 'sd', n: 268 },
  { name: 'San Diego Miramar College', lon: -117.14, lat: 32.90, region: 'sd', n: 217 },
  { name: 'Southwestern College', lon: -117.06, lat: 32.65, region: 'sd' },
  { name: 'Palomar College', lon: -117.18, lat: 33.15, region: 'sd', n: 202 },
  { name: 'MiraCosta College', lon: -117.29, lat: 33.19, region: 'sd', n: 268 },
  { name: 'Imperial Valley College', lon: -115.50, lat: 32.83, region: 'sd' },
];

// ── 本科直申 VS 快捷直通车 对比 ──
export const COMPARE = [
  { theme: '名校冲刺更给力',
    direct: ['托福 81–115 / 雅思 6–7.5', 'SAT 1250–1550', 'GPA 3.2–4.0'],
    fast: ['无托福 / 雅思成绩要求', '无高 GPA 要求，满足高中及以上学历即可申请', '仅需 60 学分直录本科大三'] },
  { theme: '留学经费更划算',
    direct: ['美国大学学费至少 40,000 美金 / 年', '四年约花费 160,000 美金'],
    fast: ['美国社区大学学费 8,000–12,000 美金 / 年', '转学直接衔接本科大三，同比直申节省学费 60,000–80,000 美金'] },
  { theme: '顶尖学位更快拿',
    direct: ['常规繁琐网申系统，文书材料需提前 1–2 年准备', '每年两次开学季，固定时间截止申请', '四年取得本科学位'],
    fast: ['不走常规网申系统，只需提供学历证明即可随时报名', '每年四次开学，课时灵活，随时录取', '最快一年完成转学，继读两年即获名校本科学位'] },
  { theme: '学历一样认可',
    direct: ['统招、统发学位证书', '全球范围认可，回国可做认证'],
    fast: ['美国社区大学 ≠ 国内职高 / 技校；转学 UC 八大 ≠ 国内专升本', '转学毕业颁发的学位证书与本科直申完全一致'] },
];

// ── 4 个项目保障 ──
export const GUARANTEES_4 = [
  { tag: '国家支持', title: '政策保护', desc: '美国法律保护和政府支持' },
  { tag: '规章保障', title: '转学通道', desc: '与名校签订保录取及优先录取协议' },
  { tag: '学校认可', title: '课程规范', desc: '学分互转机制完善' },
  { tag: '热度攀升', title: '覆盖率高', desc: '超过 47% 的美国高中毕业生首选' },
];

// ── 课程介绍 6 项 ──
export const COURSE_FACTS = [
  { k: '授课模式', v: '网课 / In class' },
  { k: '转学录取标准', v: '满足至少 60 个学分' },
  { k: '课程时长', v: '1 年 / 1.5 年 / 2 年' },
  { k: '开课时间', v: '每年 1 月、5 月、8 月、10 月' },
  { k: '转学合作院校', v: 'UC 八大名校' },
  { k: '整体费用', v: '8–10W 美金（学费 + 服务费）' },
];

// ── 针对人群 ──
export const AUDIENCE = [
  { title: '有名校情结、资金紧张的学生', desc: '减轻经济负担，不同的申请途径直录同样的 UC 八大。' },
  { title: '不想考雅思 / 托福或成绩较低的学生', desc: '报名和转学录取门槛低，更多机会入读 UC 八大。' },
  { title: '时间赛跑、期望更快获取名校学历的学生', desc: '同样的申请起跑线，更快拿到本科学位。' },
  { title: '综合学历背景差、未来发展受限多的学生', desc: '名校光环，获取顶尖职场和社交人脉圈的敲门砖。' },
];

// ── 转学时间线（流程图时间表）──
export const TIMELINE = [
  { phase: 'STEP 1', term: '第 1 年', title: '入读社区大学，修满 60 学分',
    desc: '专业导师选课（VIP 选课服务），主修四年制本科大一、大二通识基础课，与 UC 大三课程无缝衔接。开课时间：每年 1 / 5 / 8 / 10 月。' },
  { phase: 'STEP 2', term: '第 1–1.5 年', title: '全科私教 + 高分 GPA 管理',
    desc: '社区大学课程学分辅导专业团队全程跟进，确保高分转学无风险；同步布局 IGETC 通识完成 + TAG 保录取协议。' },
  { phase: 'STEP 3', term: '第 1.5 年', title: '递交转学申请，锁定 UC 八大',
    desc: '指定一到三所顶尖院校，整合推荐信、背景资源、实习与竞赛，全力拿到录取；与校方达成优先录取协议。' },
  { phase: 'STEP 4', term: '第 1.5–2 年', title: '转入 UC 大三 → 名校本科毕业',
    desc: '继读两年完成本科，颁发与本科直申完全一致的 UC 学位证书，全球认可、回国可认证。' },
];

// ── 24Fall UC 录取概况 ──
export const FALL2024 = [
  { num: '250,436', label: '本科入学申请总数', sub: '较 2023 增长 1.5%' },
  { num: '43,543', label: '转学申请总数', sub: '同比增长 9%' },
  { num: '34,668', label: '加州社区大学转学申请', sub: 'CCC 申请增长 8%' },
  { num: '47%', label: '来自高中毕业生首选', sub: '社区大学转学已成主流路径' },
];

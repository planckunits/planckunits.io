export type Category = 'all' | 'iot' | 'web' | 'consulting'

export interface Work {
  id: string
  titleJa: string
  titleEn: string
  descriptionJa: string
  descriptionEn: string
  category: Exclude<Category, 'all'>
  client?: string
  link?: string
}

export const works: Work[] = [
  {
    id: 'info-management',
    titleJa: '情報管理システム',
    titleEn: 'Information Management System',
    descriptionJa:
      '複数企業向けの情報管理システム。データの一元管理と業務効率化を実現。',
    descriptionEn:
      'Information management system for multiple companies. Centralized data management and operational efficiency.',
    category: 'web',
    client: '株式会社ベスト、株式会社エナジア、タカヤ株式会社',
  },
  {
    id: 'pocket-farm',
    titleJa: '環境制御装置 ポケットファーム',
    titleEn: 'Environmental Control: Pocket Farm',
    descriptionJa:
      '農業向けIoT環境制御システム。温度・湿度・照明を自動制御し、最適な栽培環境を実現。',
    descriptionEn:
      'IoT environmental control system for agriculture. Automatic control of temperature, humidity, and lighting.',
    category: 'iot',
    client: '株式会社細野ファーム',
    link: 'https://pocketfarm.planckunits.io/houses/0',
  },
  {
    id: 'land-management',
    titleJa: '土地情報管理・土砂災害検知システム',
    titleEn: 'Land Management & Landslide Detection',
    descriptionJa:
      '地盤センサーを活用した土砂災害の早期検知システム。リアルタイムモニタリングで安全を確保。',
    descriptionEn:
      'Early landslide detection using ground sensors. Real-time monitoring ensures safety.',
    category: 'iot',
    client: '株式会社リプロ',
  },
  {
    id: 'shift-management',
    titleJa: 'シフト管理システム',
    titleEn: 'Shift Management System',
    descriptionJa:
      '従業員のシフト管理を効率化するWebアプリケーション。勤怠管理との連携も可能。',
    descriptionEn:
      'Web application for efficient employee shift management. Integrates with attendance systems.',
    category: 'web',
  },
  {
    id: 'iot-consulting',
    titleJa: 'IoTソリューション・コンサルティング',
    titleEn: 'IoT Solutions Consulting',
    descriptionJa:
      'IoT導入の企画から実装までをサポート。最適な技術選定と導入戦略を提案。',
    descriptionEn:
      'Support from IoT planning to implementation. Optimal technology selection and deployment strategy.',
    category: 'consulting',
  },
  {
    id: 'construction-iot',
    titleJa: '工事現場向けIoTシステム',
    titleEn: 'Construction Site IoT System',
    descriptionJa:
      '建設現場の安全管理と作業効率化を実現するIoTソリューション。センサーによる危険検知。',
    descriptionEn:
      'IoT solution for safety management and efficiency at construction sites. Sensor-based hazard detection.',
    category: 'iot',
  },
  {
    id: 'mobility-tracking',
    titleJa: 'シェアリングモビリティ位置情報システム',
    titleEn: 'Sharing Mobility Location System',
    descriptionJa:
      'モビリティの位置情報をリアルタイム追跡。スマホから電源操作やセンサー情報の収集が可能。',
    descriptionEn:
      'Real-time mobility tracking. Power control and sensor data collection via smartphone.',
    category: 'iot',
  },
  {
    id: 'remote-camera',
    titleJa: '遠隔カメラモニタリングシステム',
    titleEn: 'Remote Camera Monitoring System',
    descriptionJa:
      '屋外現場向けのリアルタイム映像配信。PTZ操作、タイムラプス撮影に対応。',
    descriptionEn:
      'Real-time video streaming for outdoor sites. Supports PTZ control and time-lapse capture.',
    category: 'iot',
  },
  {
    id: 'qr-key',
    titleJa: 'QR電子キーシステム',
    titleEn: 'QR Electronic Key System',
    descriptionJa:
      '重機の電子キーシステム。日々入れ替わる現場スタッフの鍵管理を効率化。',
    descriptionEn:
      'Electronic key system for heavy machinery. Efficient key management for rotating site staff.',
    category: 'iot',
  },
  {
    id: 'touch-panel',
    titleJa: 'タッチパネル付きLinux装置',
    titleEn: 'Linux Device with Touch Panel',
    descriptionJa:
      'タッチパネル操作可能なLinuxベースの組込み装置。クラウド経由での遠隔管理に対応。',
    descriptionEn:
      'Linux-based embedded device with touch panel. Supports remote management via cloud.',
    category: 'iot',
  },
  {
    id: 'medical-location',
    titleJa: '医療向けセンサー・位置情報管理システム',
    titleEn: 'Medical Sensor & Location Management',
    descriptionJa:
      '病院内の資産・人員の位置情報をリアルタイム管理。業務効率と患者ケアの向上に貢献。',
    descriptionEn:
      'Real-time location management for hospital assets and staff. Improves efficiency and patient care.',
    category: 'iot',
  },
]

export const categoryLabels = {
  all: { ja: 'すべて', en: 'All' },
  iot: { ja: 'IoT', en: 'IoT' },
  web: { ja: 'Web', en: 'Web' },
  consulting: { ja: 'コンサル', en: 'Consulting' },
}

export const categoryColors: Record<Exclude<Category, 'all'>, string> = {
  iot: 'var(--color-category-iot)',
  web: 'var(--color-category-web)',
  consulting: 'var(--color-category-consulting)',
}

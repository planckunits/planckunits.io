export type Category = 'all' | 'iot' | 'web' | 'consulting'

export type TechStack =
  | 'aws'
  | 'gcp'
  | 'firebase'
  | 'react'
  | 'nextjs'
  | 'rails'
  | 'laravel'
  | 'nodejs'
  | 'python'
  | 'php'
  | 'postgresql'
  | 'mysql'
  | 'redis'
  | 'mqtt'
  | 'webrtc'
  | 'websocket'
  | 'rtsp'
  | 'pytorch'
  | 'opencv'
  | 'docker'
  | 'raspberrypi'

export interface Work {
  id: string
  titleJa: string
  titleEn: string
  descriptionJa: string
  descriptionEn: string
  category: Exclude<Category, 'all'>
  technologies?: TechStack[]
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
    technologies: ['react', 'nodejs', 'postgresql'],
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
    technologies: ['raspberrypi', 'rails', 'react', 'mqtt', 'postgresql', 'firebase'],
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
    technologies: ['raspberrypi', 'mqtt', 'firebase', 'react'],
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
    technologies: ['react', 'nodejs'],
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
    technologies: ['raspberrypi', 'mqtt', 'firebase'],
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
    technologies: ['raspberrypi', 'react', 'firebase'],
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
    technologies: ['raspberrypi', 'rtsp', 'nodejs'],
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
    technologies: ['raspberrypi', 'react'],
  },
  {
    id: 'touch-panel',
    titleJa: 'タッチパネル式組込みデバイス',
    titleEn: 'Touch Panel Embedded Device',
    descriptionJa:
      'Linuxベースのタッチパネル式組込みデバイス。クラウド経由での遠隔管理とリアルタイム制御に対応。',
    descriptionEn:
      'Linux-based touch panel embedded device. Supports remote management and real-time control via cloud.',
    category: 'iot',
    technologies: ['python', 'mqtt', 'firebase'],
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
    technologies: ['react', 'nodejs', 'websocket'],
  },
  {
    id: 'cloud-video-streaming',
    titleJa: 'IPカメラクラウド配信システム',
    titleEn: 'IP Camera Cloud Streaming System',
    descriptionJa:
      'RTSP映像をクラウド経由でHLS配信。AWS Kinesis Video Streamsを活用した映像アーカイブとリアルタイム視聴に対応。',
    descriptionEn:
      'Cloud-based RTSP to HLS streaming. Video archiving and real-time viewing using AWS Kinesis Video Streams.',
    category: 'iot',
    technologies: ['aws', 'nodejs', 'laravel', 'redis', 'rtsp', 'docker'],
  },
  {
    id: 'transit-operation',
    titleJa: '公共交通運行管理システム',
    titleEn: 'Public Transit Operation Management',
    descriptionJa:
      '車載IoT機器によるGPS追跡、運行ダイヤ管理、遅延検知。リアルタイム位置情報とセンサーデータをBigQueryで分析。',
    descriptionEn:
      'GPS tracking with onboard IoT devices, schedule management, and delay detection. Real-time location and sensor data analysis with BigQuery.',
    category: 'iot',
    technologies: ['raspberrypi', 'gcp', 'firebase', 'react', 'mqtt'],
  },
  {
    id: 'environmental-sensor',
    titleJa: '環境センサー統合プラットフォーム',
    titleEn: 'Environmental Sensor Integration Platform',
    descriptionJa:
      '気象データ、路面状態、大気圧などの環境データをリアルタイム監視。地図プロットとグラフ表示で異常値を即座に検知。',
    descriptionEn:
      'Real-time monitoring of weather, road conditions, and atmospheric pressure. Instant anomaly detection with map plotting and graphs.',
    category: 'iot',
    technologies: ['firebase', 'react'],
  },
  {
    id: 'log-aggregation',
    titleJa: 'ログ集約・可視化システム',
    titleEn: 'Log Aggregation & Visualization System',
    descriptionJa:
      'IoTデバイスやサーバーのログを統合管理。MQTT、SFTP、Cloud Loggingからデータ収集し、OpenAI APIで異常検知と自動要約。',
    descriptionEn:
      'Unified log management for IoT devices and servers. Data collection from MQTT, SFTP, and Cloud Logging with AI-powered anomaly detection.',
    category: 'web',
    technologies: ['firebase', 'react', 'nodejs', 'mqtt'],
  },
  {
    id: 'ai-person-detection',
    titleJa: 'AI人物検知カメラシステム',
    titleEn: 'AI Person Detection Camera System',
    descriptionJa:
      'WebRTCリアルタイム配信とPyTorch/Transformersによる人物検知。エッジデバイスで低遅延AI推論を実現。',
    descriptionEn:
      'Real-time WebRTC streaming with PyTorch/Transformers person detection. Low-latency AI inference on edge devices.',
    category: 'iot',
    technologies: ['python', 'pytorch', 'opencv', 'webrtc', 'docker', 'react'],
  },
  {
    id: 'wireless-monitoring',
    titleJa: '無線通信品質モニタリングシステム',
    titleEn: 'Wireless Quality Monitoring System',
    descriptionJa:
      'RSSI（受信信号強度）、パケットエラーレート、接続状態をリアルタイム監視。通信品質の可視化とアラート通知。',
    descriptionEn:
      'Real-time monitoring of RSSI, packet error rate, and connection status. Communication quality visualization and alerts.',
    category: 'iot',
    technologies: ['nextjs', 'react', 'nodejs', 'mqtt', 'firebase', 'websocket'],
  },
  {
    id: 'video-log-management',
    titleJa: '映像ログ管理システム',
    titleEn: 'Video Log Management System',
    descriptionJa:
      '映像ログの自動アップロード、サムネイル生成、日時・場所検索。WBGT（暑さ指数）連動で高温アラート通知。',
    descriptionEn:
      'Automatic video log upload, thumbnail generation, and search by date/location. High-temperature alerts linked to WBGT index.',
    category: 'iot',
    technologies: ['php', 'mysql', 'docker'],
  },
]

export const categoryLabels = {
  all: { ja: 'すべて', en: 'All' },
  iot: { ja: 'IoT', en: 'IoT' },
  web: { ja: 'Web', en: 'Web' },
  consulting: { ja: 'コンサル', en: 'Consulting' },
}

export const categoryColors: Record<Exclude<Category, 'all'>, string> = {
  iot: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  web: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  consulting: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
}

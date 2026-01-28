import { useMemo, useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  NodeChange,
  EdgeChange,
} from 'reactflow'
import 'reactflow/dist/style.css'
import Section from './Section'
import techStackData from '../data/tech-stack-patterns.json'

const STORAGE_KEY = 'tech-stack-node-positions'

const TechStackDemoSection = () => {
  const [requirements, setRequirements] = useState('')
  const [suggestedStack, setSuggestedStack] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const initialData = useMemo(() => {
    const newNodes: Node[] = []
    const newEdges: Edge[] = []

    // === IoT/Hardware Group (左列) ===
    newNodes.push({
      id: 'iot_device',
      type: 'default',
      position: { x: 50, y: 50 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              IoT Device
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.iot_device.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#fef3c7',
        border: '2px solid #f59e0b',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    newNodes.push({
      id: 'hardware_control',
      type: 'default',
      position: { x: 50, y: 230 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              制御機器
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.hardware_control.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#fed7aa',
        border: '2px solid #ea580c',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    newNodes.push({
      id: 'video',
      type: 'default',
      position: { x: 50, y: 410 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              Video
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.video.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#fce7f3',
        border: '2px solid #ec4899',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    // === Protocol Group (中間層1) ===
    newNodes.push({
      id: 'iot_protocol',
      type: 'default',
      position: { x: 270, y: 130 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '4px',
                fontSize: '12px',
              }}
            >
              IoT Protocol
            </div>
            <div style={{ fontSize: '9px', lineHeight: 1.5 }}>
              MQTT / Modbus / Serial / CAN / I2C / SPI
            </div>
          </div>
        ),
      },
      style: {
        background: '#fef9c3',
        border: '2px dashed #facc15',
        borderRadius: '10px',
        padding: '10px',
        minWidth: '130px',
      },
    })

    newNodes.push({
      id: 'video_protocol',
      type: 'default',
      position: { x: 270, y: 410 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '4px',
                fontSize: '12px',
              }}
            >
              Video Protocol
            </div>
            <div style={{ fontSize: '9px', lineHeight: 1.5 }}>
              RTSP / WebRTC
            </div>
          </div>
        ),
      },
      style: {
        background: '#fef9c3',
        border: '2px dashed #facc15',
        borderRadius: '10px',
        padding: '10px',
        minWidth: '130px',
      },
    })

    // === Backend/Server Group (中央) ===
    newNodes.push({
      id: 'backend',
      type: 'default',
      position: { x: 470, y: 50 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              Backend
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.backend.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#dbeafe',
        border: '2px solid #3b82f6',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    newNodes.push({
      id: 'database',
      type: 'default',
      position: { x: 470, y: 230 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              Database
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.database.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#e0e7ff',
        border: '2px solid #6366f1',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    newNodes.push({
      id: 'ai_ml',
      type: 'default',
      position: { x: 470, y: 500 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              AI/ML
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.ai_ml.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#fce7f3',
        border: '2px solid #ec4899',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    // === Web Protocol (中間層2) ===
    newNodes.push({
      id: 'web_protocol',
      type: 'default',
      position: { x: 690, y: 130 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '4px',
                fontSize: '12px',
              }}
            >
              Web Protocol
            </div>
            <div style={{ fontSize: '9px', lineHeight: 1.5 }}>
              HTTPS / WebSocket / REST API / GraphQL / gRPC
            </div>
          </div>
        ),
      },
      style: {
        background: '#fef9c3',
        border: '2px dashed #facc15',
        borderRadius: '10px',
        padding: '10px',
        minWidth: '130px',
      },
    })

    // === Frontend/Client Group (右列) ===
    newNodes.push({
      id: 'frontend',
      type: 'default',
      position: { x: 890, y: 50 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              Frontend
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.frontend.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#dcfce7',
        border: '2px solid #22c55e',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    newNodes.push({
      id: 'visualization',
      type: 'default',
      position: { x: 890, y: 210 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              Visualization
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.visualization.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#e0f2fe',
        border: '2px solid #0ea5e9',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    // === External/Integration Group (右下) ===
    newNodes.push({
      id: 'external_api',
      type: 'default',
      position: { x: 890, y: 410 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              External API
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.external_api.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#fef3c7',
        border: '2px solid #f59e0b',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    newNodes.push({
      id: 'notification',
      type: 'default',
      position: { x: 890, y: 570 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              Notification
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.notification.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#ffedd5',
        border: '2px solid #f97316',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '150px',
      },
    })

    // === Infrastructure (下部) ===
    newNodes.push({
      id: 'infrastructure',
      type: 'default',
      position: { x: 270, y: 700 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '6px',
                fontSize: '13px',
              }}
            >
              Infrastructure
            </div>
            <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
              {techStackData.technologies.infrastructure.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#f3e8ff',
        border: '2px solid #a855f7',
        borderRadius: '10px',
        padding: '12px',
        minWidth: '350px',
      },
    })

    // === Data Format Node ===
    newNodes.push({
      id: 'data_formats',
      type: 'default',
      position: { x: 470, y: 380 },
      data: {
        label: (
          <div>
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '4px',
                fontSize: '11px',
              }}
            >
              Data Formats
            </div>
            <div style={{ fontSize: '9px', lineHeight: 1.5 }}>
              {techStackData.data_formats.join(' / ')}
            </div>
          </div>
        ),
      },
      style: {
        background: '#e0f2fe',
        border: '1px solid #0ea5e9',
        borderRadius: '8px',
        padding: '8px',
        minWidth: '120px',
      },
    })

    // === Edges ===
    const edgeStyle = { stroke: '#667eea', strokeWidth: 2 }
    const dashedEdgeStyle = {
      stroke: '#94a3b8',
      strokeWidth: 1,
      strokeDasharray: '5,5',
    }

    // IoT → IoT Protocol → Backend
    newEdges.push({
      id: 'e1',
      source: 'iot_device',
      target: 'iot_protocol',
      animated: true,
      style: edgeStyle,
    })
    newEdges.push({
      id: 'e2',
      source: 'hardware_control',
      target: 'iot_protocol',
      animated: false,
      style: edgeStyle,
    })
    newEdges.push({
      id: 'e3',
      source: 'iot_protocol',
      target: 'backend',
      animated: true,
      style: edgeStyle,
    })

    // Video → Video Protocol → Backend/AI
    newEdges.push({
      id: 'e4',
      source: 'video',
      target: 'video_protocol',
      animated: true,
      style: edgeStyle,
    })
    newEdges.push({
      id: 'e5',
      source: 'video_protocol',
      target: 'backend',
      animated: false,
      style: edgeStyle,
    })
    newEdges.push({
      id: 'e6',
      source: 'video_protocol',
      target: 'ai_ml',
      animated: false,
      style: edgeStyle,
    })

    // Backend → Database
    newEdges.push({
      id: 'e7',
      source: 'backend',
      target: 'database',
      animated: true,
      style: edgeStyle,
    })

    // Backend → Web Protocol → Frontend
    newEdges.push({
      id: 'e8',
      source: 'backend',
      target: 'web_protocol',
      animated: true,
      style: edgeStyle,
    })
    newEdges.push({
      id: 'e9',
      source: 'web_protocol',
      target: 'frontend',
      animated: true,
      style: edgeStyle,
    })
    newEdges.push({
      id: 'e10',
      source: 'web_protocol',
      target: 'visualization',
      animated: false,
      style: edgeStyle,
    })

    // Backend → External API
    newEdges.push({
      id: 'e11',
      source: 'backend',
      target: 'external_api',
      animated: false,
      style: edgeStyle,
    })

    // Backend → Notification
    newEdges.push({
      id: 'e12',
      source: 'backend',
      target: 'notification',
      animated: false,
      style: edgeStyle,
    })

    // Infrastructure connections (dashed)
    newEdges.push({
      id: 'e13',
      source: 'backend',
      target: 'infrastructure',
      animated: false,
      style: dashedEdgeStyle,
    })
    newEdges.push({
      id: 'e14',
      source: 'database',
      target: 'infrastructure',
      animated: false,
      style: dashedEdgeStyle,
    })
    newEdges.push({
      id: 'e15',
      source: 'ai_ml',
      target: 'infrastructure',
      animated: false,
      style: dashedEdgeStyle,
    })

    // Data format connections
    newEdges.push({
      id: 'e18',
      source: 'backend',
      target: 'data_formats',
      animated: false,
      style: dashedEdgeStyle,
      label: 'uses',
    })

    return { nodes: newNodes, edges: newEdges }
  }, [])

  // Load saved positions from localStorage
  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialData.nodes.map((node) => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
          try {
            const positions = JSON.parse(saved)
            if (positions[node.id]) {
              return { ...node, position: positions[node.id] }
            }
          } catch (e) {
            console.error('Failed to load saved positions', e)
          }
        }
      }
      return node
    }),
  )

  const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.edges)

  // Save positions to localStorage when nodes change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const positions = nodes.reduce(
        (acc, node) => {
          acc[node.id] = node.position
          return acc
        },
        {} as Record<string, { x: number; y: number }>,
      )
      localStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
    }
  }, [nodes])

  // Generate suggested stack nodes and edges
  const suggestedNodes = useMemo(() => {
    if (!suggestedStack?.stack) return []

    const newNodes: Node[] = []
    const stack = suggestedStack.stack
    let yOffset = 50

    // Color schemes for different categories
    const categoryStyles: Record<
      string,
      { background: string; border: string }
    > = {
      iot_device: { background: '#fef3c7', border: '#f59e0b' },
      hardware_control: { background: '#fed7aa', border: '#ea580c' },
      video: { background: '#fce7f3', border: '#ec4899' },
      backend: { background: '#dbeafe', border: '#3b82f6' },
      database: { background: '#e0e7ff', border: '#6366f1' },
      ai_ml: { background: '#fce7f3', border: '#ec4899' },
      frontend: { background: '#dcfce7', border: '#22c55e' },
      visualization: { background: '#e0f2fe', border: '#0ea5e9' },
      external_api: { background: '#fef3c7', border: '#f59e0b' },
      notification: { background: '#ffedd5', border: '#f97316' },
      infrastructure: { background: '#f3e8ff', border: '#a855f7' },
    }

    // Category display names
    const categoryNames: Record<string, string> = {
      iot_device: 'IoT Device',
      hardware_control: '制御機器',
      video: 'Video',
      backend: 'Backend',
      database: 'Database',
      ai_ml: 'AI/ML',
      frontend: 'Frontend',
      visualization: 'Visualization',
      external_api: 'External API',
      notification: 'Notification',
      infrastructure: 'Infrastructure',
      protocols: 'Protocols',
      data_formats: 'Data Formats',
    }

    // Add nodes for each category with technologies
    Object.entries(stack).forEach(([category, technologies]) => {
      if (
        Array.isArray(technologies) &&
        technologies.length > 0 &&
        category !== 'protocols' &&
        category !== 'data_formats'
      ) {
        const style = categoryStyles[category] || {
          background: '#f3f4f6',
          border: '#9ca3af',
        }

        newNodes.push({
          id: `suggested_${category}`,
          type: 'default',
          position: { x: 100, y: yOffset },
          data: {
            label: (
              <div>
                <div
                  style={{
                    fontWeight: 'bold',
                    marginBottom: '6px',
                    fontSize: '13px',
                  }}
                >
                  {categoryNames[category] || category}
                </div>
                <div style={{ fontSize: '10px', lineHeight: 1.5 }}>
                  {technologies.join(' / ')}
                </div>
              </div>
            ),
          },
          style: {
            background: style.background,
            border: `2px solid ${style.border}`,
            borderRadius: '10px',
            padding: '12px',
            minWidth: '200px',
          },
        })
        yOffset += 120
      }
    })

    // Add protocols and data formats if present
    if (stack.protocols && stack.protocols.length > 0) {
      newNodes.push({
        id: 'suggested_protocols',
        type: 'default',
        position: { x: 400, y: 200 },
        data: {
          label: (
            <div>
              <div
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  fontSize: '11px',
                }}
              >
                Protocols
              </div>
              <div style={{ fontSize: '9px', lineHeight: 1.5 }}>
                {stack.protocols.join(' / ')}
              </div>
            </div>
          ),
        },
        style: {
          background: '#fef9c3',
          border: '2px dashed #facc15',
          borderRadius: '10px',
          padding: '10px',
          minWidth: '150px',
        },
      })
    }

    if (stack.data_formats && stack.data_formats.length > 0) {
      newNodes.push({
        id: 'suggested_data_formats',
        type: 'default',
        position: { x: 400, y: 350 },
        data: {
          label: (
            <div>
              <div
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  fontSize: '11px',
                }}
              >
                Data Formats
              </div>
              <div style={{ fontSize: '9px', lineHeight: 1.5 }}>
                {stack.data_formats.join(' / ')}
              </div>
            </div>
          ),
        },
        style: {
          background: '#e0f2fe',
          border: '1px solid #0ea5e9',
          borderRadius: '8px',
          padding: '8px',
          minWidth: '120px',
        },
      })
    }

    return newNodes
  }, [suggestedStack])

  const suggestedEdges = useMemo(() => {
    if (!suggestedStack?.stack || suggestedNodes.length === 0) return []

    const newEdges: Edge[] = []
    const edgeStyle = { stroke: '#667eea', strokeWidth: 2 }
    const stack = suggestedStack.stack

    // Create logical connections between nodes
    const nodeIds = suggestedNodes.map((n) => n.id)

    // IoT/Hardware → Backend
    if (
      nodeIds.includes('suggested_iot_device') &&
      nodeIds.includes('suggested_backend')
    ) {
      newEdges.push({
        id: 'se1',
        source: 'suggested_iot_device',
        target: 'suggested_backend',
        animated: true,
        style: edgeStyle,
      })
    }

    if (
      nodeIds.includes('suggested_hardware_control') &&
      nodeIds.includes('suggested_backend')
    ) {
      newEdges.push({
        id: 'se2',
        source: 'suggested_hardware_control',
        target: 'suggested_backend',
        animated: false,
        style: edgeStyle,
      })
    }

    // Video → Backend/AI
    if (
      nodeIds.includes('suggested_video') &&
      nodeIds.includes('suggested_backend')
    ) {
      newEdges.push({
        id: 'se3',
        source: 'suggested_video',
        target: 'suggested_backend',
        animated: true,
        style: edgeStyle,
      })
    }

    if (
      nodeIds.includes('suggested_video') &&
      nodeIds.includes('suggested_ai_ml')
    ) {
      newEdges.push({
        id: 'se4',
        source: 'suggested_video',
        target: 'suggested_ai_ml',
        animated: false,
        style: edgeStyle,
      })
    }

    // Backend → Database
    if (
      nodeIds.includes('suggested_backend') &&
      nodeIds.includes('suggested_database')
    ) {
      newEdges.push({
        id: 'se5',
        source: 'suggested_backend',
        target: 'suggested_database',
        animated: true,
        style: edgeStyle,
      })
    }

    // Backend → Frontend
    if (
      nodeIds.includes('suggested_backend') &&
      nodeIds.includes('suggested_frontend')
    ) {
      newEdges.push({
        id: 'se6',
        source: 'suggested_backend',
        target: 'suggested_frontend',
        animated: true,
        style: edgeStyle,
      })
    }

    // Frontend → Visualization
    if (
      nodeIds.includes('suggested_frontend') &&
      nodeIds.includes('suggested_visualization')
    ) {
      newEdges.push({
        id: 'se7',
        source: 'suggested_frontend',
        target: 'suggested_visualization',
        animated: false,
        style: edgeStyle,
      })
    }

    // Backend → External API
    if (
      nodeIds.includes('suggested_backend') &&
      nodeIds.includes('suggested_external_api')
    ) {
      newEdges.push({
        id: 'se8',
        source: 'suggested_backend',
        target: 'suggested_external_api',
        animated: false,
        style: edgeStyle,
      })
    }

    // Backend → Notification
    if (
      nodeIds.includes('suggested_backend') &&
      nodeIds.includes('suggested_notification')
    ) {
      newEdges.push({
        id: 'se9',
        source: 'suggested_backend',
        target: 'suggested_notification',
        animated: false,
        style: edgeStyle,
      })
    }

    // Backend → Infrastructure (dashed)
    if (
      nodeIds.includes('suggested_backend') &&
      nodeIds.includes('suggested_infrastructure')
    ) {
      newEdges.push({
        id: 'se10',
        source: 'suggested_backend',
        target: 'suggested_infrastructure',
        animated: false,
        style: { stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5,5' },
      })
    }

    return newEdges
  }, [suggestedStack, suggestedNodes])

  // Sample requirements
  const sampleRequirements = [
    'IoTデバイスからのデータを収集し、Webダッシュボードで可視化したい',
    '工場の制御機器をリモート監視・制御できるシステムを構築したい',
    '複数のIPカメラの映像をAIで解析し、異常検知を行いたい',
    'スマホアプリでリアルタイムにデータを確認・通知を受け取りたい',
  ]

  const handleSampleClick = (sample: string) => {
    setRequirements(sample)
    setSuggestedStack(null)
  }

  // Generate suggestion using OpenAI API
  const handleGenerateSuggestion = async () => {
    if (!requirements.trim()) {
      alert('要件を入力してください')
      return
    }

    setIsLoading(true)
    setSuggestedStack(null)

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: `あなたは技術スタックの選定を支援するエキスパートです。以下の技術カテゴリから適切な技術を選んでシステム構成を提案してください。

利用可能な技術:
${JSON.stringify(techStackData, null, 2)}

要件に基づいて、具体的な技術スタックの組み合わせを提案してください。
必ず以下のJSON形式で回答してください（それ以外のテキストは含めないでください）：

{
  "stack": {
    "iot_device": ["Raspberry Pi", "ESP32", "M5Stack", "Arduino"],
    "hardware_control": ["PLC", "リレー制御", "モーター制御"],
    "video": ["RTSP", "WebRTC", "FFmpeg", "OpenCV"],
    "backend": ["Node.js", "Express", "Fastify", "Next.js API Routes", "NestJS"],
    "database": ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    "ai_ml": ["PyTorch", "TensorFlow", "OpenCV", "Cloud Vision API"],
    "frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    "visualization": ["Chart.js", "React Flow", "D3.js", "Recharts", "Plotly"],
    "notification": ["Slack Webhook", "Email", "LINE Notify", "Push通知"],
    "external_api": ["OpenAI API", "Google Maps API", "Weather API"],
    "infrastructure": ["Vercel", "Docker", "AWS", "GCP", "Firebase"],
    "protocols": ["HTTPS", "WebSocket", "MQTT", "REST API"],
    "data_formats": ["JSON", "CSV", "Binary"]
  }
}

重要な指示：
- 各カテゴリから推奨順に技術を複数選んでください
- 主要カテゴリ（frontend, backend, database, infrastructure）は必ず5-8個以上選択
- 関連性が高いカテゴリは8-12個選択してください
- より詳細で具体的な技術構成を提案してください
- 該当しないカテゴリは空配列[]にしてください`,
              },
              {
                role: 'user',
                content: requirements,
              },
            ],
            temperature: 0.7,
            max_tokens: 2000,
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data = await response.json()
      const generatedText = data.choices[0]?.message?.content || ''

      // Extract JSON from response
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const suggested = JSON.parse(jsonMatch[0])
        setSuggestedStack(suggested)
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error('Error generating suggestion:', error)
      alert('提案の生成に失敗しました。もう一度お試しください。')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section name="Technology Stack" id="tech-stack">
      <div className="stack-container">
        <p className="intro">Planckunitsが対応可能な技術スタック一覧</p>

        {/* 技術スタック提案フォーム（開発環境のみ） */}
        {process.env.NODE_ENV === 'development' && (
          <div className="suggestion-form">
            <h3>技術スタック提案</h3>
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="システムの要件を入力してください（例：IoTデバイスからのデータを収集し、Webダッシュボードで可視化したい）"
              rows={4}
              disabled={isLoading}
            />

            <div className="sample-buttons">
              <span className="sample-label">サンプル：</span>
              {sampleRequirements.map((sample, index) => (
                <button
                  key={index}
                  className="sample-button"
                  onClick={() => handleSampleClick(sample)}
                  disabled={isLoading}
                >
                  {sample}
                </button>
              ))}
            </div>

            <button
              className="generate-button"
              onClick={handleGenerateSuggestion}
              disabled={isLoading}
            >
              {isLoading ? '生成中...' : '技術スタックを提案'}
            </button>

            {suggestedStack && suggestedNodes.length > 0 && (
              <div className="suggestion-flow">
                <h4>提案された技術スタック：</h4>
                <div className="suggested-flow-container">
                  <ReactFlow
                    nodes={suggestedNodes}
                    edges={suggestedEdges}
                    fitView
                    attributionPosition="bottom-left"
                  >
                    <Background />
                    <Controls />
                  </ReactFlow>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flow-container">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            attributionPosition="bottom-left"
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>

      <style jsx>{`
        .stack-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .intro {
          text-align: center;
          font-size: var(--text-lg);
          color: #4a5568;
          margin: 0 0 var(--space-8);
          line-height: 1.6;
        }

        .suggestion-form {
          background: #f0f9ff;
          border: 2px solid #0ea5e9;
          border-radius: var(--radius-md);
          padding: var(--space-6);
          margin-bottom: var(--space-8);
        }

        .suggestion-form h3 {
          font-size: var(--text-xl);
          color: #0369a1;
          margin: 0 0 var(--space-4);
        }

        .suggestion-form textarea {
          width: 100%;
          padding: var(--space-3);
          border: 1px solid #cbd5e1;
          border-radius: var(--radius-sm);
          font-size: var(--text-base);
          font-family: inherit;
          resize: vertical;
          margin-bottom: var(--space-3);
        }

        .suggestion-form textarea:focus {
          outline: none;
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }

        .sample-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          align-items: center;
          margin-bottom: var(--space-4);
        }

        .sample-label {
          font-size: var(--text-sm);
          color: #64748b;
          font-weight: 600;
        }

        .sample-button {
          background: white;
          color: #0369a1;
          border: 1px solid #bae6fd;
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-sm);
          font-size: var(--text-sm);
          cursor: pointer;
          transition: all 0.2s;
        }

        .sample-button:hover:not(:disabled) {
          background: #e0f2fe;
          border-color: #0ea5e9;
        }

        .sample-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .generate-button {
          background: #0ea5e9;
          color: white;
          border: none;
          padding: var(--space-3) var(--space-6);
          border-radius: var(--radius-sm);
          font-size: var(--text-base);
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          width: 100%;
        }

        .generate-button:hover:not(:disabled) {
          background: #0284c7;
        }

        .generate-button:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }

        .suggestion-flow {
          margin-top: var(--space-6);
        }

        .suggestion-flow h4 {
          font-size: var(--text-lg);
          color: #1e293b;
          margin: 0 0 var(--space-3);
        }

        .suggested-flow-container {
          width: 100%;
          height: 600px;
          border: 2px solid #0ea5e9;
          border-radius: var(--radius-md);
          background: white;
          margin-bottom: var(--space-4);
        }

        .flow-container {
          width: 100%;
          height: 800px;
          border: 2px solid #e2e8f0;
          border-radius: var(--radius-md);
          background: #f9fafb;
        }

        @media (max-width: 768px) {
          .intro {
            font-size: var(--text-base);
          }

          .suggestion-form {
            padding: var(--space-4);
          }

          .suggestion-form h3 {
            font-size: var(--text-lg);
          }

          .sample-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .sample-button {
            text-align: left;
          }

          .flow-container {
            height: 600px;
          }
        }
      `}</style>
    </Section>
  )
}

export default TechStackDemoSection

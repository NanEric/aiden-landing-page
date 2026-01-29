export type Language = 'en' | 'zh';

export const translations = {
    en: {
        nav: {
            product: 'Product',
            features: 'Features',
            download: 'Download',
        },
        hero: {
            badge: 'System Status: High Fidelity ({{version}}-stable)',
            titleLine1: 'The Pro-Grade',
            titleLine2: 'Monitoring Engine',
            description: 'FULL-STACK OBSERVABILITY WITH SUB-MILLISECOND TELEMETRY PRECISION.',
        },
        mockup: {
            title: 'Performance Metrics',
            subtitle: 'Real-time telemetry and energy consumption analysis',
            lastSync: 'Last Sync',
            totalTokens: 'Total Tokens',
            estimatedCost: 'Estimated Cost',
            contextWindow: 'Context Window',
            activeDays: 'Active Days',
            chartTitle: '24h Token Consumption Trend',
            chartSubtitle: 'Aggregated throughput across all active endpoints',
            peakThroughput: 'Peak Throughput',
            systemLogs: 'System Logs',
            ltmEfficiency: 'LTM Efficiency: 98.4%',
            uptime: 'UPTIME'
        },
        features: {
            heading: 'Core Engine Capabilities',
            cards: [
                {
                    title: 'Live Telemetry',
                    description: 'Nanosecond-scale event streaming with zero-buffer ingestion for high-traffic nodes.',
                    footer: 'Active Tracking'
                },
                {
                    title: 'ML Diagnostics',
                    description: 'Neural networks identify drift patterns before they impact your service availability.',
                    footer: 'Pattern Locked'
                },
                {
                    title: 'Global Heartbeat',
                    description: 'Distributed probes across 14 global regions ensure 99.999% reliability benchmarks.',
                    footer: 'Probes Online'
                },
                {
                    title: 'Hardened Security',
                    description: 'AES-256 encrypted telemetry with automated vaulting and intrusion detection.',
                    footer: 'Encrypted Core'
                },
            ],
        },
        download: {
            heading: 'Ready for Deployment',
            subheading: 'Native binaries for production environments',
            cards: [
                {
                    platform: 'macOS',
                    details: '{{version}} • Apple Silicon support',
                    downloads: '{{macDownloads}} DOWNLOADS',
                    btnText: 'Download .DMG'
                },
                {
                    platform: 'Windows',
                    details: '{{version}} • x64 & ARM64',
                    downloads: '{{windowsDownloads}} DOWNLOADS',
                    btnText: 'Download .EXE'
                }
            ]
        },
        footer: {
            engine: 'AIDEN',
            pro: 'PRO',
            copyright: '© 2024 AIDEN SYSTEMS INC.',
            links: {
                terms: 'Terms',
                privacy: 'Privacy',
                contact: 'Contact'
            }
        },
        tips: {
            title: 'Installation Guide',
            step1Title: 'Install App',
            step1DescPart1: 'Ensure you have dragged ',
            step1DescPart2: ' to the target folder (e.g., ',
            step2Title: 'Run Command',
            copy: 'Copy',
            copied: 'Copied',
            footerPart1: 'Final step complete. Please enjoy every stunning detail ',
            footerPart2: ' has carefully prepared for you.',
            dontShow: "Don't show again",
            done: 'Done',
        },
    },
    zh: {
        nav: {
            product: '产品',
            features: '功能特性',
            download: '立即下载',
        },
        hero: {
            badge: '系统状态：高保真 ({{version}}-stable)',
            titleLine1: '专业级',
            titleLine2: '监控引擎',
            description: '全栈可观测性，具有亚毫秒级遥测精度。',
        },
        mockup: {
            title: '性能指标',
            subtitle: '实时遥测与能耗分析',
            lastSync: '最后同步',
            totalTokens: '总 Token',
            estimatedCost: '预估成本',
            contextWindow: '上下文窗口',
            activeDays: '活跃天数',
            chartTitle: '24小时 Token 消耗趋势',
            chartSubtitle: '所有活跃端点的聚合吞吐量',
            peakThroughput: '峰值吞吐量',
            systemLogs: '系统日志',
            ltmEfficiency: 'LTM 效率: 98.4%',
            uptime: '运行时间'
        },
        features: {
            heading: '核心引擎能力',
            cards: [
                {
                    title: '实时遥测',
                    description: '纳秒级事件流，针对高流量节点实现零缓冲摄取。',
                    footer: '主动追踪'
                },
                {
                    title: 'ML 诊断',
                    description: '神经网络在漂移模式影响服务可用性之前识别它们。',
                    footer: '模式锁定'
                },
                {
                    title: '全球心跳',
                    description: '分布在 14 个全球区域的探测器确保 99.999% 的可靠性基准。',
                    footer: '探测在线'
                },
                {
                    title: '强化安全',
                    description: '具有自动存储和入侵检测功能的 AES-256 加密遥测。',
                    footer: '加密核心'
                },
            ],
        },
        download: {
            heading: '准备部署',
            subheading: '用于生产环境的原生二进制文件',
            cards: [
                {
                    platform: 'macOS',
                    details: '{{version}} • Apple Silicon 支持',
                    downloads: '{{macDownloads}} 次下载',
                    btnText: '下载 .DMG'
                },
                {
                    platform: 'Windows',
                    details: '{{version}} • x64 & ARM64',
                    downloads: '{{windowsDownloads}} 次下载',
                    btnText: '下载 .EXE'
                }
            ]
        },
        footer: {
            engine: 'AIDEN',
            pro: 'PRO',
            copyright: '© 2024 AIDEN 系统公司',
            links: {
                terms: '条款',
                privacy: '隐私',
                contact: '联系我们'
            }
        },
        tips: {
            title: '安装指南',
            step1Title: '安装应用',
            step1DescPart1: '确保已将 ',
            step1DescPart2: ' 拖拽到 目标文件夹。(如 ',
            step2Title: '执行命令',
            copy: '复制',
            copied: '已复制',
            footerPart1: '最后一步完成。请尽情享受 ',
            footerPart2: ' 为您精心准备的每一处惊艳细节。',
            dontShow: '不再显示',
            done: '完成',
        },
    },
};

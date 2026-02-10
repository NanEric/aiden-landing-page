export type Language = 'en' | 'zh';

export const translations = {
    en: {
        nav: {
            product: 'Product',
            features: 'Features',
            download: 'Download',
        },
        hero: {
            badge: 'Built for macOS',
            titleLine1: 'Observe Your AI Workflows',
            titleLine2: 'with Precision',
            description: 'A native performance monitor for developers building with LLMs. Track latency, costs, and token usage in real-time.',
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
            title: 'Powerful AI Monitoring',
            subtitle: 'Everything you need to optimize your agentic workflows in a single native application.',
            cards: [
                {
                    title: 'Token Tracking',
                    description: 'Monitor input and output tokens across multiple models with sub-millisecond precision.',
                },
                {
                    title: 'Cost Management',
                    description: 'Set budgets and get real-time estimates of your API spending across all providers.',
                },
                {
                    title: 'Context Load',
                    description: 'Visualize context window usage to optimize performance and prevent truncation.',
                },
                {
                    title: 'Active Usage',
                    description: 'Deep dive into usage patterns and historical data with advanced diagnostic tools.',
                },
            ],
        },
        download: {
            heading: 'Ready to optimize your AI?',
            subheading: 'Join thousands of developers using Aiden to build better, faster, and more cost-effective AI applications.',
            trusted: 'Trusted by 10,000+ power users',
            downloads: 'Downloads',
            btnText: 'Download Aiden for macOS',
            requirements: 'Free for individuals • Requires macOS 13.5+',
        },
        footer: {
            links: {
                terms: 'Terms',
                privacy: 'Privacy',
                license: 'License'
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
            badge: '专为 macOS 打造',
            titleLine1: '精准观测您的',
            titleLine2: 'AI 工作流',
            description: '专为 LLM 开发者打造的原生性能监控工具。实时追踪延迟、成本和 Token 使用情况。',
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
            title: '强大的 AI 监控',
            subtitle: '在单个原生应用中优化代理工作流所需的一切。',
            cards: [
                {
                    title: 'Token 追踪',
                    description: '以亚毫秒级精度监控多个模型的输入和输出 Token。',
                },
                {
                    title: '成本管理',
                    description: '设置预算并实时估算所有提供商的 API 支出。',
                },
                {
                    title: '上下文负载',
                    description: '可视化上下文窗口使用情况，以优化性能并防止截断。',
                },
                {
                    title: '活跃使用',
                    description: '使用高级诊断工具深入了解使用模式和历史数据。',
                },
            ],
        },
        download: {
            heading: '准备好优化您的 AI 了吗？',
            subheading: '加入数千名开发者的行列，使用 Aiden 构建更好、更快、更具成本效益的 AI 应用。',
            trusted: '深受 10,000+ 高级用户的信赖',
            downloads: '次下载',
            btnText: '下载 macOS 版 Aiden',
            requirements: '个人免费 • 需要 macOS 13.5+',
        },
        footer: {
            links: {
                terms: '条款',
                privacy: '隐私',
                license: '许可'
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


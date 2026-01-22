export type Language = 'en' | 'zh';

export const translations = {
    en: {
        nav: {
            features: 'Features',
            download: 'Download',
        },
        hero: {
            badge: 'Now Live',
            titleLine1: 'Bring Clarity to Your',
            titleLine2: 'Gemini CLI Experience',
            description: 'Aiden is a lightweight desktop monitoring dashboard that provides real-time visibility into your API calls, token consumption, and command logs.',
        },
        mockup: {
            activeLog: 'Aiden_Engine_Active.log',
            tokensIn: 'TOKENS_IN',
            latency: 'LATENCY',
            stability: 'STABILITY',
            initCmd: '> aiden init --model=gemini-3-pro',
            initStep1: 'Initializing intake valves... [OK]',
            initStep2: 'Synchronizing token vectors... [OK]',
            initStep3: 'Monitoring real-time mechanical throughput...',
        },
        features: {
            heading: 'Everything you need to master Gemini.',
            subheading: 'Turn complex CLI data into actionable visual insights with a suite of professional monitoring tools.',
            cards: [
                {
                    title: 'Real-time Tracking',
                    description: 'Monitor requests and responses in milliseconds with full streaming support.',
                },
                {
                    title: 'Usage Analytics',
                    description: 'Visual token consumption reports to help you stay ahead of your API billing.',
                },
                {
                    title: 'Command History',
                    description: 'Never lose a great prompt again. Full searchable history of all CLI interactions.',
                },
                {
                    title: 'Latency Monitor',
                    description: 'Track response times and optimize your production deployment logic.',
                },
            ],
        },
        download: {
            headingLine1: 'Upgrade your Gemini',
            headingLine2: 'development experience.',
            macos: 'Download for macOS',
            windows: 'Download for Windows',
            version: 'VERSION',
            stable: 'STABLE BUILD',
            size: 'SIZE: 42.5MB',
        },
        footer: {
            engine: 'AIDEN ENGINE',
            copyright: '© 2024 AIDEN MONITORING LTD.',
            privacy: 'Privacy',
            terms: 'Terms',
            support: 'Support',
            twitter: 'Twitter',
        },
    },
    zh: {
        nav: {
            features: '功能特性',
            download: '立即下载',
        },
        hero: {
            badge: '现已发布',
            titleLine1: '为您的',
            titleLine2: 'Gemini CLI 体验带来清晰视野',
            description: 'Aiden 是一款轻量级的桌面监控仪表板，可实时查看您的 API 调用、Token 消耗和命令日志。',
        },
        mockup: {
            activeLog: 'Aiden_引擎_活动日志.log',
            tokensIn: '输入 TOKEN',
            latency: '延迟',
            stability: '稳定性',
            initCmd: '> aiden init --model=gemini-3-pro',
            initStep1: '初始化进气阀... [完成]',
            initStep2: '同步 Token 向量... [完成]',
            initStep3: '正在监控实时机械吞吐量...',
        },
        features: {
            heading: '掌控 Gemini 所需的一切。',
            subheading: '通过一套专业的监控工具，将复杂的 CLI 数据转化为直观的视觉洞察。',
            cards: [
                {
                    title: '实时追踪',
                    description: '以毫秒级速度监控请求和响应，支持完整的流式输出。',
                },
                {
                    title: '用量分析',
                    description: '直观的 Token 消耗报告，助您掌控 API 账单。',
                },
                {
                    title: '历史命令',
                    description: '永不丢失优秀的提示词。支持全量 CLI 交互搜索。',
                },
                {
                    title: '延迟监控',
                    description: '追踪响应时间，优化您的生产部署逻辑。',
                },
            ],
        },
        download: {
            headingLine1: '升级您的 Gemini',
            headingLine2: '开发体验',
            macos: '下载 macOS 版',
            windows: '下载 Windows 版',
            version: '版本',
            stable: '稳定构建',
            size: '大小: 42.5MB',
        },
        footer: {
            engine: 'AIDEN 引擎',
            copyright: '© 2024 AIDEN 监控有限公司',
            privacy: '隐私政策',
            terms: '服务条款',
            support: '技术支持',
            twitter: '推特',
        },
    },
};

export type Language = 'en' | 'zh';

export const translations = {
    en: {
        nav: {
            features: 'Features',
            download: 'Download',
        },
        hero: {
            badge: 'Version {{version}} Release',
            titleLine1: 'Next-Gen Intelligence',
            titleLine2: 'for Modern Monitoring.',
            description: 'Optimize latency, track stability, and scale your infrastructure with the Aiden Smart Engine. The most intuitive data layer ever built.',
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
            heading: 'Core Monitoring Features',
            subheading: 'Everything you need to maintain peak performance and security in a single, unified interface.',
            cards: [
                {
                    title: 'Real-time Activity',
                    description: 'Live monitoring of every request across your stack. Instant feedback for critical events.',
                },
                {
                    title: 'Advanced Analytics',
                    description: 'Deep dives into data trends with AI-powered insights that predict bottlenecks before they happen.',
                },
                {
                    title: 'Uptime Tracking',
                    description: '24/7 clock-based monitoring for maximum availability with global heartbeat probes.',
                },
                {
                    title: 'Layered Security',
                    description: 'Multi-layered protection for your entire infrastructure, featuring automated threat detection.',
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
        },
        footer: {
            engine: 'AIDEN ENGINE',
            copyright: '© 2024 AIDEN MONITORING LTD.',
            privacy: 'Privacy',
            terms: 'Terms',
            support: 'Support',
            twitter: 'Twitter',
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
            features: '功能特性',
            download: '立即下载',
        },
        hero: {
            badge: '{{version}} 版本发布',
            titleLine1: '为现代监控而生',
            titleLine2: '的新一代智能引擎',
            description: '利用 Aiden 智能引擎优化延迟、追踪稳定并扩展您的基础设施。有史以来最直观的数据层。',
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
            heading: '核心监控功能',
            subheading: '在统一的界面中，提供维护卓越性能和安全所需的一切工具。',
            cards: [
                {
                    title: '实时活动',
                    description: '对技术栈中的每个请求进行实时监控。为关键事件提供即时反馈。',
                },
                {
                    title: '高级分析',
                    description: '深入探究数据趋势，利用 AI 洞察在瓶颈发生前进行预测。',
                },
                {
                    title: '在线追踪',
                    description: '通过全球心跳探测，提供 24/7 全天候监控以确保最大可用性。',
                },
                {
                    title: '分层安全',
                    description: '为您的整个基础设施提供多层保护，具备自动威胁检测功能。',
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
        },
        footer: {
            engine: 'AIDEN 引擎',
            copyright: '© 2024 AIDEN 监控有限公司',
            privacy: '隐私政策',
            terms: '服务条款',
            support: '技术支持',
            twitter: '推特',
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

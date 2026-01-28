---
name: architecture-generator
description: 用于生成软件系统的架构设计、图表和文档。当需要规划新功能、重构现有代码或可视化系统组件及交互时使用。支持生成 Mermaid 图表和技术栈建议。
---

# Architecture Generator

## 概述

`architecture-generator` 技能旨在通过结构化的方法帮助开发者设计、可视化和文档化软件架构。它结合了需求分析、技术选型和图形化表示，以确保系统设计的健壮性和可理解性。

## 工作流

本技能遵循以下步骤进行架构设计：

### 1. 需求分析与定义
首先明确系统的功能性需求（用户能做什么）和非功能性需求（性能、扩展性、安全性等）。

### 2. 技术选型
根据项目规模、团队技能和性能要求，从主流技术栈中选择最合适的组合。
- 参考 [tech-stacks.md](references/tech-stacks.md) 获取建议。

### 3. 系统组件设计
定义系统中的各个模块及其职责。

### 4. 架构可视化
使用 Mermaid 语法生成各类架构图。
- **流程图 (Flowchart)**: 用于展示组件间的宏观连接。
- **时序图 (Sequence Diagram)**: 用于展示组件间的交互逻辑和数据流。
- **关系图 (ERD)**: 用于设计数据库模型。
- 参考 [mermaid-guide.md](references/mermaid-guide.md) 获取模式示例。

### 5. 文档生成
使用标准模板汇总所有设计细节。
- 使用 [architecture-template.md](assets/architecture-template.md) 作为输出基础。

## 示例请求

- "帮我设计一个实时聊天应用的架构，需要支持 10 万并发。"
- "为现有的电商系统增加一个优惠券模块，请给出详细的组件设计图。"
- "使用 Mermaid 绘制一个微服务架构的流量流向图。"

## 资源

- **references/mermaid-guide.md**: Mermaid 图表生成指南和常用模式。
- **references/tech-stacks.md**: 针对不同场景的技术栈推荐。
- **assets/architecture-template.md**: 系统架构设计文档模板。
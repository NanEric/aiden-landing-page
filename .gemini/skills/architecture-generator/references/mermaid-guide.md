# Mermaid Diagram Guide

This reference provides patterns and tips for generating high-quality Mermaid diagrams for system architecture.

## 1. Flowcharts (Graph)
Used for process flows, decision trees, and high-level component connections.

```mermaid
graph TD
    A[User] --> B{Load Balancer}
    B -- HTTP --> C[Web Server 1]
    B -- HTTP --> D[Web Server 2]
    C --> E[(Database)]
    D --> E
```

## 2. Sequence Diagrams
Best for showing interactions between components over time.

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant DB

    User->>Frontend: Click "Login"
    Frontend->>API: POST /auth/login
    API->>DB: Query User
    DB-->>API: User Data
    API-->>Frontend: JWT Token
    Frontend-->>User: Redirect to Dashboard
```

## 3. Entity Relationship Diagrams (ERD)
Used for database schema design.

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER {
        string id PK
        string email
        string password
    }
    ORDER {
        string id PK
        string user_id FK
        float total_amount
    }
```

## 4. Class Diagrams
Good for detailed object-oriented design.

```mermaid
classDiagram
    class User {
        +String username
        +String password
        +login()
    }
    class Admin {
        +deleteUser()
    }
    User <|-- Admin
```

## Tips for Better Diagrams
- **Labels**: Use clear, descriptive labels for nodes and edges.
- **Direction**: Use `TD` (Top-Down) for hierarchies and `LR` (Left-Right) for processes.
- **Subgraphs**: Use `subgraph` to group related components (e.g., "Frontend", "Backend", "Storage").
- **Styling**: Keep it simple. Focus on structure over aesthetics.

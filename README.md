# FocusBoard – Task Management Dashboard

A responsive task management dashboard built with React, Vite, JavaScript, and Tailwind CSS as part of a frontend development assessment.

FocusBoard helps users organize tasks, track progress, manage priorities, and stay focused through a clean and interactive dashboard.

## Live Demo

- **Live Application:** [Add your deployed URL]
- **GitHub Repository:** [Add your repository URL]

## Features

### Dashboard

- Overview of tasks and their completion status.
- Statistics to track task progress.
- Clean dashboard layout based on the provided Figma reference.

### Task Management

- Create new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or restore them to their previous status.
- Display task details such as category, priority, and due date.

### Search and Filtering

- Search tasks by their details.
- Filter tasks based on their status and available categories or priorities.
- View relevant tasks based on the selected filters.

### Focus Notes

- Interactive Focus Notes carousel.
- Navigate between multiple notes to display different focus reminders.

### Data Persistence

- Uses browser Local Storage to preserve task data.
- Tasks remain available after refreshing the page.

### Responsive Design

- Responsive dashboard layout for desktop, tablet, and mobile screens.
- Adapts the layout to different screen sizes.
- Built using the provided Figma design as the visual reference.

## Tech Stack

| Technology    | Purpose                           |
| ------------- | --------------------------------- |
| React.js      | Component-based UI development    |
| Vite          | Development server and build tool |
| JavaScript    | Application logic                 |
| Tailwind CSS  | Styling and responsive layouts    |
| Lucide React  | Icons                             |
| Local Storage | Client-side data persistence      |

## Project Structure

```text
FocusBoard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── FocusNotes.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskForm.jsx
│   │   ├── SearchBar.jsx
│   │   └── FilterTabs.jsx
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   ├── data/
│   │   └── sampleTasks.js
│   │
│   ├── hooks/
│   │   └── useTasks.js
│   │
│   ├── utils/
│   │   └── formatDate.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

The application uses reusable components to keep the UI organized and maintainable. The dashboard is placed inside a separate `pages/` directory so additional pages and features can be introduced as the application grows.

_Note: The structure above is illustrative. Adjust filenames and folders to match the final repository._

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Navigate to the project directory:

```bash
cd FocusBoard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in your terminal.

### Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Implementation Highlights

- Built the interface using reusable React components.
- Managed task operations and dashboard state within React.
- Used Local Storage to persist task data.
- Applied responsive Tailwind CSS utility classes to adapt the dashboard across screen sizes.
- Separated UI components, page-level layout, sample data, hooks, and utility functions for maintainability.

## AI Usage Disclosure

AI tools, including ChatGPT, were used as development assistance during this project.

The assistance included:

- Understanding React implementation approaches.
- Exploring responsive layout solutions.
- Debugging and resolving implementation issues.
- Reviewing component structure and code.
- Understanding and refining specific functionality.

The application structure, feature planning, design decisions, and implementation were reviewed and tested during development. AI-generated suggestions were evaluated and adapted to the project's requirements.

## Assessment Scope

This project was developed as a frontend-only implementation of the FocusBoard assessment.

- Framework: React.js
- Build tool: Vite
- Styling: Tailwind CSS
- Backend: Not required
- Data persistence: Browser Local Storage

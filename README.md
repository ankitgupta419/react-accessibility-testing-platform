# React Accessibility Testing Platform

![image](https://github.com/user-attachments/assets/343e2c5f-67ae-475d-833d-53a92ad28f4a)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Components](#components)
8. [API](#api)
9. [Styling](#styling)
10. [Accessibility Testing Areas](#accessibility-testing-areas)
11. [Future Enhancements](#future-enhancements)
12. [Contributing](#contributing)
13. [License](#license)

## Introduction

This React Accessibility Testing Platform is a comprehensive testing suite designed to demonstrate various React UI components that commonly require accessibility enhancements. Built with React and Vite, it provides a baseline "normal" application without accessibility features, making it ideal for testing and developing accessibility migration rules and patterns.

The platform includes an interactive quiz application with media elements, plus 8 major UI component sections covering forms, tables, modals, tabs, carousels, tooltips, file uploads, and notifications.

## Features

### Core Platform Features
- **Component Testing Suite**: 9 major accessibility testing areas
- **Interactive Quiz Application**: Timed questions with media elements
- **Responsive Design**: Works across all screen sizes
- **Modern UI**: Professional design with gradients and animations
- **Navigation System**: Easy section switching and quick access

### Quiz Application Features
- Dynamic quiz generation based on user-selected category and difficulty
- Timed questions with automatic progression (60 seconds per question)
- Progress bar to track quiz completion
- Score calculation and display with answer review
- Media integration (images, audio, video) in questions
- Multiple question types (multiple choice, drag & drop)

### UI Component Testing Areas
- **Form Elements**: Various input types and form controls
- **Data Tables**: Sortable and filterable data tables
- **Modal Dialogs**: Popups, overlays, and dialog boxes
- **Tabs & Accordions**: Tab navigation and accordion panels
- **Carousels & Sliders**: Image carousels and range sliders
- **Tooltips & Popovers**: Hover tooltips and popup menus
- **File Upload**: Drag-drop and file upload interfaces
- **Notifications**: Alerts, toasts, and notification systems

## Technologies Used

- React 18.3.1
- Vite (for project setup and build optimization)
- OpenTrivia Database API (for quiz questions)
- CSS3 for styling with modern design patterns

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/DonGuillotine/react-quiz-app.git
   ```

2. Navigate to the project directory:
   ```
   cd react-quiz-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Usage

### Platform Navigation
1. **Overview**: View all available testing components and accessibility areas
2. **Component Sections**: Click on any tab to explore specific UI patterns
3. **Quiz Application**: Test the interactive quiz with media elements
4. **Quick Actions**: Use footer buttons for fast navigation

### Quiz Application Usage
1. Navigate to the "Quiz Application" section
2. Select a category and difficulty level from the quiz settings
3. Click "Start Quiz" to begin
4. Answer each question within the time limit
5. Use the "Next" and "Previous" buttons to navigate through questions
6. After answering all questions, view your score and correct answers
7. Optionally restart the quiz or return to the main platform

### Component Testing
1. Navigate to any component section (Forms, Tables, Modals, etc.)
2. Interact with the UI elements to understand their behavior
3. Test keyboard navigation, screen reader compatibility, and visual accessibility
4. Use these components as baselines for accessibility rule development

![image](https://github.com/user-attachments/assets/96451f9e-ec7f-4045-aac3-b3aef70d2dba)

## Project Structure

```
react-quiz-app/
│
├── src/
│   ├── components/
│   │   ├── AccessibilityShowcase.jsx (Main navigation and component showcase)
│   │   ├── QuizContainer.jsx (Quiz application logic)
│   │   ├── QuizSettings.jsx (Quiz configuration)
│   │   ├── Question.jsx (Question display with media)
│   │   ├── AnswerOptions.jsx (Multiple choice answers)
│   │   ├── NavigationButtons.jsx (Quiz navigation)
│   │   ├── ProgressBar.jsx (Quiz progress indicator)
│   │   ├── ScoreDisplay.jsx (Score presentation)
│   │   ├── FormElements.jsx (Form input testing)
│   │   ├── DataTable.jsx (Data table testing)
│   │   ├── ModalDialogs.jsx (Modal and overlay testing)
│   │   ├── TabsAccordion.jsx (Tab and accordion testing)
│   │   ├── CarouselSlider.jsx (Carousel and slider testing)
│   │   ├── TooltipsPopoversFixed.jsx (Tooltip and popover testing)
│   │   ├── FileUpload.jsx (File upload testing)
│   │   └── Notifications.jsx (Notification system testing)
│   │
│   ├── styles/
│   │   ├── App.css (Main application styles)
│   │   └── basic-styles.css (Quiz component styles)
│   │
│   ├── App.jsx (Root application component)
│   ├── main.jsx (Application entry point)
│   └── index.html (HTML template)
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Components

### Platform Components
- **AccessibilityShowcase**: Main navigation hub and component showcase
- **App**: Root application component with simplified header

### Quiz Application Components
- **QuizContainer**: Main component managing quiz state and logic
- **QuizSettings**: Handles category and difficulty selection
- **Question**: Displays current question with media elements
- **AnswerOptions**: Renders selectable answer options
- **NavigationButtons**: Provides navigation between questions
- **ProgressBar**: Shows quiz progress
- **ScoreDisplay**: Displays final score and answer review

### Testing Components
- **FormElements**: Various form inputs and controls for accessibility testing
- **DataTable**: Sortable and filterable data tables
- **ModalDialogs**: Different types of modals and overlays
- **TabsAccordion**: Tab navigation and accordion panels
- **CarouselSlider**: Image carousels and range sliders
- **TooltipsPopovers**: Hover tooltips and popup menus
- **FileUpload**: Drag-drop file upload interfaces
- **Notifications**: Alert systems and toast notifications

## API

This application uses the Open Trivia Database API to fetch quiz questions. The API endpoint is:

```
https://opentdb.com/api.php
```

Parameters used:
- `amount`: Number of questions (default: 10)
- `category`: Question category ID
- `difficulty`: easy, medium, or hard
- `type`: multiple (for multiple-choice questions)

## Styling

The application uses modern CSS with:
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern UI**: Gradients, shadows, and smooth animations
- **Component Organization**: Consistent styling patterns
- **Visual Hierarchy**: Clear typography and spacing
- **Professional Appearance**: Clean, modern design suitable for accessibility testing

## Accessibility Testing Areas

This platform provides comprehensive testing for:

### 🎯 Focus Management
- Tab navigation order
- Focus indicators
- Focus trapping in modals
- Skip links

### 📢 Screen Readers
- ARIA labels and descriptions
- Semantic HTML structure
- Live regions
- Alternative text for images

### ⌨️ Keyboard Navigation
- All interactive elements reachable
- Keyboard shortcuts
- Escape key handling
- Arrow key navigation

### 🎨 Visual Design
- Color contrast ratios
- Text resizing support
- High contrast mode
- Reduced motion preferences

## Future Enhancements

- **Accessibility Rules Engine**: Automated accessibility testing and rule generation
- **Component Library**: Expanded set of accessibility testing components
- **User Testing**: Integration with screen readers and accessibility tools
- **Documentation**: Comprehensive accessibility pattern documentation
- **Testing Suite**: Automated accessibility testing integration
- **Performance**: Accessibility performance metrics and monitoring

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

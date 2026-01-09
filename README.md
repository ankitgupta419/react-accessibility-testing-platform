# React Accessibility Testing Platform

A comprehensive testing suite designed to demonstrate and evaluate React UI components that commonly require accessibility enhancements. Built with React and Vite, this platform provides a baseline application without accessibility features, making it ideal for testing and developing accessibility migration rules and patterns.

## 📋 Table of Contents

1. [✨ Features](#features)
2. [🛠️ Technologies Used](#technologies-used)
3. [🚀 Installation](#installation)
4. [📜 Available Scripts](#available-scripts)
5. [💡 Usage](#usage)
6. [📁 Project Structure](#project-structure)
7. [🧩 Components](#components)
8. [🔌 API](#api)
9. [🎨 Styling](#styling)
10. [♿ Accessibility Testing Areas](#accessibility-testing-areas)
11. [🚧 Future Enhancements](#future-enhancements)
12. [🤝 Contributing](#contributing)
13. [📄 License](#license)

## ✨ Features

### 🎯 Core Platform Features
- **Component Testing Suite**: 9 major accessibility testing areas
- **Interactive Quiz Application**: Timed questions with media elements
- **Responsive Design**: Works across all screen sizes
- **Modern UI**: Professional design with gradients and animations
- **Navigation System**: Easy section switching and quick access

### 🎮 Quiz Application Features
- Dynamic quiz generation based on user-selected category and difficulty
- Timed questions with automatic progression (60 seconds per question)
- Progress bar to track quiz completion
- Score calculation and display with answer review
- Media integration (images, audio, video) in questions
- Multiple question types (multiple choice, drag & drop)

### 🧩 UI Component Testing Areas
- **Form Elements**: Various input types and form controls
- **Data Tables**: Sortable and filterable data tables
- **Modal Dialogs**: Popups, overlays, and dialog boxes
- **Tabs & Accordions**: Tab navigation and accordion panels
- **Carousels & Sliders**: Image carousels and range sliders
- **Tooltips & Popovers**: Hover tooltips and popup menus
- **File Upload**: Drag-drop and file upload interfaces
- **Notifications**: Alerts, toasts, and notification systems

## 🛠️ Technologies Used

- **React 18.3.1** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **OpenTrivia Database API** - External API for quiz questions
- **CSS3** - Modern styling with animations and responsive design
- **ESLint** - Code quality and consistency checks

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankitgupta419/react-accessibility-testing-platform
   ```

2. **Navigate to the project directory**
   ```bash
   cd react-accessibility-testing-platform
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173`

### 🐳 Docker Alternative (Optional)
If you prefer using Docker, you can run the application with:
```bash
docker build -t react-a11y-platform .
docker run -p 5173:5173 react-a11y-platform
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run predeploy` | Build the application (runs before deploy) |
| `npm run deploy` | Deploy to GitHub Pages |

## 💡 Usage

### 🧭 Platform Navigation
1. **Overview**: View all available testing components and accessibility areas
2. **Component Sections**: Click on any tab to explore specific UI patterns
3. **Quiz Application**: Test the interactive quiz with media elements
4. **Quick Actions**: Use footer buttons for fast navigation

### 🎮 Quiz Application Usage
1. Navigate to the "Quiz Application" section
2. Select a category and difficulty level from the quiz settings
3. Click "Start Quiz" to begin
4. Answer each question within the time limit
5. Use the "Next" and "Previous" buttons to navigate through questions
6. After answering all questions, view your score and correct answers
7. Optionally restart the quiz or return to the main platform

### 🧪 Component Testing
1. Navigate to any component section (Forms, Tables, Modals, etc.)
2. Interact with the UI elements to understand their behavior
3. Test keyboard navigation, screen reader compatibility, and visual accessibility
4. Use these components as baselines for accessibility rule development

### 🔍 Accessibility Testing Tips
- **Keyboard Navigation**: Try navigating through components using only Tab, Shift+Tab, Enter, and Space
- **Screen Reader**: Test with popular screen readers like NVDA, JAWS, or VoiceOver
- **Focus Management**: Check that focus is properly trapped within modals and dropdowns
- **Color Contrast**: Use browser dev tools or contrast checker extensions
- **ARIA Labels**: Verify that all interactive elements have appropriate ARIA attributes

## 📁 Project Structure

```
react-accessibility-testing-platform/
│├── src/
│   ├── components/
│   │   ├── AccessibilityShowcase.jsx (Main navigation and component showcase)
│   │   ├── QuizContainer.jsx (Quiz application logic)
│   │   ├── QuizSettings.jsx (Quiz configuration)
│   │   ├── Question.jsx (Question display with media)
│   │   ├── AnswerOptions.jsx (Multiple choice answers)
│   │   ├── DragDropQuestion.jsx (Drag and drop question component)
│   │   ├── NavigationButtons.jsx (Quiz navigation)
│   │   ├── ProgressBar.jsx (Quiz progress indicator)
│   │   ├── ScoreDisplay.jsx (Score presentation)
│   │   ├── FormElements.jsx (Form input testing)
│   │   ├── DataTable.jsx (Data table testing)
│   │   ├── ModalDialogs.jsx (Modal and overlay testing)
│   │   ├── TabsAccordion.jsx (Tab and accordion testing)
│   │   ├── CarouselSlider.jsx (Carousel and slider testing)
│   │   ├── TooltipsPopoversFixed.jsx (Tooltip and popover testing)
│   │   ├── TooltipsPopoversBackup.jsx (Backup tooltip component)
│   │   ├── FileUpload.jsx (File upload testing)
│   │   └── Notifications.jsx (Notification system testing)
│   │
│   ├── styles/
│   │   ├── App.css (Main application styles)
│   │   ├── basic-styles.css (Quiz component styles)
│   │   ├── accessibility.css (Accessibility-specific styles)
│   │   └── index.css (Global styles)
│   │
│   ├── assets/ (Static assets and images)
│   │
│   ├── App.jsx (Root application component)
│   ├── main.jsx (Application entry point)
│   └── index.html (HTML template)
│
├── public/ (Public assets)
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🧩 Components

### 🏗️ Platform Components
- **AccessibilityShowcase**: Main navigation hub and component showcase
- **App**: Root application component with simplified header

### 🎮 Quiz Application Components
- **QuizContainer**: Main component managing quiz state and logic
- **QuizSettings**: Handles category and difficulty selection
- **Question**: Displays current question with media elements
- **AnswerOptions**: Renders selectable answer options
- **DragDropQuestion**: Handles drag and drop question interactions
- **NavigationButtons**: Provides navigation between questions
- **ProgressBar**: Shows quiz progress
- **ScoreDisplay**: Displays final score and answer review

### 🧪 Testing Components
- **FormElements**: Various form inputs and controls for accessibility testing
- **DataTable**: Sortable and filterable data tables
- **ModalDialogs**: Different types of modals and overlays
- **TabsAccordion**: Tab navigation and accordion panels
- **CarouselSlider**: Image carousels and range sliders
- **TooltipsPopoversFixed**: Hover tooltips and popup menus with accessibility fixes
- **TooltipsPopoversBackup**: Backup version of tooltip and popover components
- **FileUpload**: Drag-drop file upload interfaces
- **Notifications**: Alert systems and toast notifications

## 🔌 API

This application uses the **Open Trivia Database API** to fetch quiz questions.

### API Endpoint
```
https://opentdb.com/api.php
```

### Parameters Used
| Parameter | Description | Default |
|-----------|-------------|---------|
| `amount` | Number of questions | 10 |
| `category` | Question category ID | - |
| `difficulty` | easy, medium, or hard | - |
| `type` | Question type (multiple) | multiple |

### Example Request
```javascript
fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 🎨 Styling

The application uses modern CSS with comprehensive styling approach:

### 🎯 Design Principles
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern UI**: Gradients, shadows, and smooth animations
- **Component Organization**: Consistent styling patterns
- **Visual Hierarchy**: Clear typography and spacing
- **Professional Appearance**: Clean, modern design suitable for accessibility testing

### 📁 CSS Architecture
- **Accessibility-Specific Styles**: Dedicated `accessibility.css` for a11y enhancements
- **Global Styles**: `index.css` for base styles and resets
- **Modular CSS**: Separate stylesheets for different components and concerns
- **Component-Specific**: `App.css` and `basic-styles.css` for targeted styling

### 🎨 Key Features
- CSS Grid and Flexbox for layouts
- CSS custom properties (variables) for theming
- Smooth transitions and micro-interactions
- Focus states and hover effects
- Responsive breakpoints for all screen sizes

## ♿ Accessibility Testing Areas

This platform provides comprehensive testing for key accessibility areas:

### 🎯 Focus Management
- **Tab Navigation Order**: Logical flow through interactive elements
- **Focus Indicators**: Visible focus states for keyboard users
- **Focus Trapping**: Proper focus management within modals and dropdowns
- **Skip Links**: Quick navigation to main content areas

### 🔊 Screen Readers
- **ARIA Labels and Descriptions**: Proper labeling for complex components
- **Semantic HTML Structure**: Meaningful markup for better interpretation
- **Live Regions**: Dynamic content announcements
- **Alternative Text**: Descriptive text for images and media

### ⌨️ Keyboard Navigation
- **Full Keyboard Access**: All interactive elements reachable via keyboard
- **Keyboard Shortcuts**: Efficient navigation patterns
- **Escape Key Handling**: Proper modal and menu closing
- **Arrow Key Navigation**: Intuitive movement within components

### 👁️ Visual Design
- **Color Contrast Ratios**: WCAG AA/AAA compliant color combinations
- **Text Resizing Support**: Up to 200% zoom without breaking layout
- **High Contrast Mode**: Compatibility with system preferences
- **Reduced Motion Preferences**: Respect for user's motion settings

### 🧪 Testing Tools Recommended
- **axe DevTools**: Browser extension for automated testing
- **WAVE**: Web accessibility evaluation tool
- **Screen Readers**: NVDA, JAWS, VoiceOver for testing
- **Keyboard Only**: Navigate using only keyboard for full testing

## 🚧 Future Enhancements

### 🤖 Automation & Testing
- **Accessibility Rules Engine**: Automated accessibility testing and rule generation
- **Testing Suite**: Automated accessibility testing integration
- **Performance Metrics**: Accessibility performance metrics and monitoring

### 📚 Documentation & Learning
- **Comprehensive Documentation**: Detailed accessibility pattern documentation
- **Interactive Tutorials**: Step-by-step accessibility implementation guides
- **Best Practices Library**: Collection of proven accessibility solutions

### 🔧 Component Expansion
- **Component Library**: Expanded set of accessibility testing components
- **Advanced Patterns**: Complex accessibility scenarios and edge cases
- **Real-world Examples**: Industry-specific accessibility implementations

### 🌐 Integration & Tools
- **Screen Reader Integration**: Direct integration with popular screen readers
- **Accessibility Tools**: Built-in accessibility testing and validation tools
- **CI/CD Integration**: Automated accessibility checks in development pipeline

### 🎯 User Experience
- **User Testing Framework**: Tools for conducting accessibility user tests
- **Feedback System**: Collect and analyze accessibility feedback
- **Customization Options**: Adaptable interface for different testing needs

## 🤝 Contributing

We welcome contributions to make this platform even better! Here's how you can help:

### 📝 How to Contribute
1. **Fork the repository** and create a feature branch
2. **Make your changes** following accessibility best practices
3. **Test thoroughly** with keyboard navigation and screen readers
4. **Submit a Pull Request** with a clear description of your changes

### 🎯 Areas for Contribution
- **New Components**: Add more accessibility testing scenarios
- **Bug Fixes**: Improve existing component accessibility
- **Documentation**: Enhance guides and examples
- **Testing**: Add automated accessibility tests
- **Performance**: Optimize for better accessibility performance

### 📋 Guidelines
- Follow WCAG 2.1 AA standards
- Ensure keyboard navigation works for all new features
- Test with multiple screen readers
- Maintain code consistency with existing patterns
- Update documentation for any new features

### 🐛 Reporting Issues
Found an accessibility issue or have a suggestion? Please:
1. **Check existing issues** first
2. **Create a new issue** with detailed description
3. **Include steps to reproduce** any problems
4. **Provide browser/screen reader information** for accessibility issues


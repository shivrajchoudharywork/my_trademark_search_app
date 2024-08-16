# Trademark Search Application

A web application built with Next.js to search and filter trademark data. This project features server-side rendering, client-side interactivity, and responsive design using Tailwind CSS.

## Features

- **Search Functionality**: Search trademarks using a search input.
- **Filtering**: Filter search results by various criteria.
- **Responsive Design**: Optimized for desktop screens with Tailwind CSS for styling.
- **Server-Side Data Fetching**: Data is fetched and rendered on the server for SEO and performance.

## Getting Started

### Prerequisites

Make sure you have Node.js (v14 or later) and npm (v6 or later) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/trademark-search-app.git

2. Navigate to the project directory:
  ```bash
  cd trademark-search-app

3. Install the dependencies:
  ```bash
  npm install
4. Running the Development Server
Start the development server with:
  ```bash
  npm run dev

## Project Structure
  - components/: Contains React components used in the project.
  - Header.tsx: Search header component with a styled search input and button.
  - Filter.tsx: Filtering options component with tabs and checkboxes.
  - Status.tsx: Status options component with clickable status filters.
  - pages/: Contains page components.
  - index.tsx: Main page component displaying search results and integrating Header, Filter, and Status.
  = public/: Contains static assets like images.
  - styles/: Contains global CSS files.
  - tailwind.config.js: Tailwind CSS configuration file.
  - next.config.js: Next.js configuration file.
  - Tailwind CSS Configuration
  - Modify tailwind.config.js for custom styles and themes.

## API Integration
  - fetchData(value: string) function in index.tsx fetches data from the API based on the search term.
  - Header.tsx component receives an onSearch prop to handle search actions.
  - Filter.tsx component displays various filtering options based on aggregations.

## Contributing
  - Feel free to submit issues or pull requests. Please ensure your changes adhere to the project's coding standards.

## Contact
  - For questions or feedback, contact shivrajchoudharywork@gmail.com.

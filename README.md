# React Rainfall Animation - Vite + React

This project creates a visually appealing rainfall animation effect using React and Vite. The falling blocks have smooth transitions, vibrant colors, and glowing shadows for an enhanced experience.

# Features

Dynamic Rainfall Effect: Each column features falling blocks of different heights and colors, appearing smoothly and randomly.

Smooth Transitions: The blocks fall smoothly with minimal abrupt changes.

Vibrant Colors with Shadows: A set of vibrant color combinations with glowing shadows is used for an attractive visual.

Customizable Grid: You can easily customize the number of rows and columns.

Built with Vite: Fast development environment with Hot Module Replacement (HMR) for React.

Setup Instructions

# Prerequisites

Make sure you have the following installed:

Node.js (version 16 or later)

# npm or yarn

# Steps to Run the Project

# Clone the repository:

git clone https://github.com/abhishekSinghNitian/falling_rain_pattern
cd <repository-folder>

Install dependencies:

# npm install

or, if you are using yarn:

# yarn install

Run the development server:

# npm run dev

or, if you are using yarn:

# yarn dev

Open your browser and navigate to http://localhost:5173 to see the rainfall animation in action.

# Customization

Changing the Grid Size

You can modify the grid size by adjusting the rows and cols props when rendering the Grid component:


# Modifying Colors

The colors and shadows of the falling blocks can be customized in the colors array:

const colors = [
  "bg-rose-500 shadow-rose-500",
  "bg-sky-500 shadow-sky-500",
  "bg-emerald-500 shadow-emerald-500",
  "bg-orange-500 shadow-orange-500",
  "bg-indigo-500 shadow-indigo-500",
];

Feel free to replace the values with any Tailwind CSS color classes.

# Technologies Used

React: A JavaScript library for building user interfaces

Vite: A fast development build tool for modern web projects

Tailwind CSS: A utility-first CSS framework


# Acknowledgments:

Vite for providing a lightning-fast development environment.

Tailwind CSS for making styling easy and consistent.


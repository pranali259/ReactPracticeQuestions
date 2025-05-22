import React from 'react';
import Accordion from './componants/Accordion';
import './App.css'

function App() {
  const accordionData = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript."
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React."
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js."
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js."
    },
  ];

  return (
    <div>
      <h1>Simple React Accordion</h1>
      <Accordion items={accordionData} />
    </div>
  )
}

export default App

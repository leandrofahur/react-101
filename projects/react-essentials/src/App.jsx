import { useState } from "react";

// Customized components:
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleOnClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  function renderSelectedTopic() {
    if (!selectedTopic) {
      return <p>Please, select a topic.</p>;
    }

    return (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.description} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleOnClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleOnClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleOnClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleOnClick("state")}>State</TabButton>
          </menu>
          {renderSelectedTopic()}
        </section>
      </main>
    </div>
  );
}

export default App;

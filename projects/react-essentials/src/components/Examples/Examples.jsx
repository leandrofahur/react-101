import { useState } from "react";

// Customized components:
import Section from "../Section/Section.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import { EXAMPLES } from "../../data.js";

export default function Examples() {
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
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleOnClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleOnClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleOnClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleOnClick("state")}
        >
          State
        </TabButton>
      </menu>
      {renderSelectedTopic()}
    </Section>
  );
}

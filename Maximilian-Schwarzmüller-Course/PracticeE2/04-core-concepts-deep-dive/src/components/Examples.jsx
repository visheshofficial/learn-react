import { EXAMPLES } from '../data.js'
import TabButton from './TabButton.jsx'
import { useState } from 'react'
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  const tabContent = selectedTopic ? (
    <>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </>
  ) : (
    <p>Please select a topic.</p>
  )
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={Object.keys(EXAMPLES).map((example) => (
          <TabButton
            isSelected={selectedTopic === example}
            key={example}
            onSelect={() => handleSelect(example)}
          >
            {EXAMPLES[example].title}
          </TabButton>
        ))}
        // buttonsContainer="menu" // menu is default
      >
        <div id="tab-content">{tabContent}</div>
      </Tabs>
    </Section>
  )
}

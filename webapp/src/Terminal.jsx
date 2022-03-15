import React, { useRef, useEffect, useState } from "react";
import useInterval from "./hooks/useInterval";
import "./Terminal.css";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

function Terminal() {
  const [messages, setMessages] = useState([]);
  useInterval(() => {
    setMessages([...messages, "Hello again!"]);
  }, 1000);
  return (
    <div className="terminal">
      <div className="terminal-lines">
        <div className="terminal-text">
          {messages.map((m, i) => (
            <pre>
              <output key={i}>{m}</output>
            </pre>
          ))}
          <AlwaysScrollToBottom />
        </div>
      </div>
    </div>
  );
}

export default Terminal;

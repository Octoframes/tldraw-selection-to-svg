import { Tldraw, useEditor, createShapeId } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { useState } from "react";

export default function App() {
  const [snapshotData, setSnapshotData] = useState("");
  const handleMount = (editor) => {
    const id = createShapeId("hello");

    editor.createShapes([
      {
        id,
        type: "geo",
        x: 128,
        y: 128,
        props: {
          geo: "rectangle",
          w: 100,
          h: 100,
          dash: "draw",
          color: "blue",
          size: "m",
        },
      },
    ]);
  };
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* First Column */}
      <div style={{ width: 500, height: 500 }}>
        <Tldraw onMount={handleMount}>
          <SaveButton onSave={setSnapshotData} />
        </Tldraw>
      </div>

      {/* Second Column */}
      <div style={{ width: 500, height: 500, marginLeft: 20 }}>
        <textarea
          style={{ width: "100%", height: "100%" }}
          value={snapshotData}
          readOnly
        />
      </div>

      {/* Third Column with Black Border */}
      <div style={{ width: 500, height: 500, marginLeft: 20, border: '2px solid black' }}>
        <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
          {snapshotData && (
            <div dangerouslySetInnerHTML={{ __html: snapshotData }} />
          )}
        </div>
      </div>
    </div>
  );
}


function SaveButton({ onSave }) {
  const editor = useEditor();

  return (
    <button
      style={{
        position: "absolute",
        zIndex: 1000,
        right: 10,
        top: 10,
        backgroundColor: "lightblue",
      }}
      onClick={async () => {
        const snapshot = await editor.getSvg(editor.selectedShapeIds);
        const stringified = snapshot.outerHTML;
        // console.log("Export SVG!");
        console.log(stringified);

        onSave(stringified);
      }}
    >
      Export SVG
    </button>
  );
}

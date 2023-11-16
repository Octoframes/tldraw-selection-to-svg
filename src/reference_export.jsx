// import { Tldraw, useEditor } from "@tldraw/tldraw";
// import "@tldraw/tldraw/tldraw.css";
// import { useState } from "react";

// export default function App() {
//   const [snapshotData, setSnapshotData] = useState("");

//   return (
//     <div
//       style={{
//         display: "flex",
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <div style={{ width: 500, height: 500 }}>
//         <Tldraw>
//           <SaveButton onSave={setSnapshotData} />
//         </Tldraw>
//       </div>
//       <div style={{ marginLeft: 20, flex: 1 }}>
//         <textarea style={{ width: "100%", height: 500 }} value={snapshotData} />
//       </div>
//     </div>
//   );
// }

// function SaveButton({ onSave }) {
//   const editor = useEditor();

//   return (
//     <button
//       style={{
//         position: "absolute",
//         zIndex: 1000,
//         right: 10,
//         top: 10,
//         backgroundColor: "lightblue",
//       }}
//       onClick={() => {
//         const snapshot = editor.getSvg();
//         const stringified = JSON.stringify(snapshot);
//         localStorage.setItem("my-editor-snapshot", stringified);
//         console.log("Saved!");
//         console.log(stringified);
//         onSave(stringified);
//       }}
//     >
//       Save
//     </button>
//   );
// }

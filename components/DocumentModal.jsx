"use client";

import { X } from "lucide-react";
import { useState } from "react";
import DocumentFace from "./DocumentFace";

export default function DocumentModal({ doc, person, onClose }) {
  const [flipped, setFlipped] = useState(false);

  if (!doc) return null;

  return (
    <div className="overlay" onMouseDown={onClose}>
      <div className="modal modalExact" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHead">
          <h3>{doc.title}</h3>
          <button className="xBtn" onClick={onClose} aria-label="Хаах">
            <X size={23}/>
          </button>
        </div>

        <button
          className="documentStageButton"
          onClick={() => doc.type === "id" && setFlipped(v => !v)}
          aria-label={doc.type === "id" ? "Үнэмлэх эргүүлэх" : "Паспорт харах"}
        >
          <DocumentFace doc={doc} person={person} flipped={flipped} />
        </button>

        <p className="modalNote">
          {doc.type === "id"
            ? "Бичиг баримтын арын хуудсыг харах бол үнэмлэх дээр дарна уу."
            : "Паспортын DEMO харагдац."}
        </p>

        <div className="modalActions">
          <button className="primaryBtn">Лавлагаа авах</button>
          <button className="outlineBtn">Дахин захиалах</button>
        </div>
      </div>
    </div>
  );
}

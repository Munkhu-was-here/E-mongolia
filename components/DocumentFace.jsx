"use client";

export default function DocumentFace({
  doc,
  compact = false,
  flipped = false
}) {
  const src =
    doc.type === "id"
      ? flipped
        ? doc.back
        : doc.front
      : doc.front;

  return (
    <div className={`documentFace ${compact ? "compact" : ""}`}>
      <img
        className="documentBase"
        src={src}
        alt={doc.title}
      />
    </div>
  );
}
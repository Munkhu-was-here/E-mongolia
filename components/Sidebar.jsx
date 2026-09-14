const ASSET = "https://cache.e-mongolia.mn/files/portal-v5/images/menu-icons";

const items = [
  ["Нүүр хуудас", `${ASSET}/home.svg`],
  ["Үйлчилгээ авах", `${ASSET}/services.svg`],
  ["Мэдээ, мэдээлэл", `${ASSET}/news.svg`],
  ["Төрийн байгууллагууд", `${ASSET}/organization.svg`],
  ["Хөтөч", `${ASSET}/guide.svg`],
  ["Санал асуулга", `${ASSET}/survey.svg`],
  ["Цахим сургалт", `${ASSET}/e-learning.svg`],
  ["Цахим хэлэлцүүлэг", `${ASSET}/online-discussion.svg`],
  ["Ажлын байр", `${ASSET}/workplace.svg`],
  ["Knowledge Graph", `${ASSET}/knowledge-graph.svg`],
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {items.map(([label, src]) => (
        <button className="sideItem" key={label}>
          <img src={src} alt="" />
          <span>{label}</span>
        </button>
      ))}
    </aside>
  );
}

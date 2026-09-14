import { Moon, Grid3X3, Accessibility } from "lucide-react";

const ASSET = "https://cache.e-mongolia.mn/files/portal-v5/images";

export default function Header() {
  const userMenu = [
    ["Хайлт", `${ASSET}/menu-icons/user-menu-icons/magnifier.svg`],
    ["Чат", `${ASSET}/menu-icons/user-menu-icons/chat.svg`],
    ["Мэдэгдэл", `${ASSET}/menu-icons/user-menu-icons/notification.svg`],
    ["Хэтэвч", `${ASSET}/menu-icons/user-menu-icons/purse.svg`],
  ];

  return (
    <>
      <div className="topbar">
        <div>For Foreigners</div>
        <div>Монгол бичгийн хувилбар</div>
        <div className="topspacer" />
        <div>☁️ +22.5°C</div>
        <div>💰 3,594₮</div>
        <div>📅 8 сарын 25</div>
      </div>

      <header className="header">
        <div className="brand">
          <img className="officialLogo" src={`${ASSET}/emon-logo-light.svg`} alt="portal logo" />
          <Moon size={20} fill="currentColor" />
        </div>

        <div className="headerActions">
          {userMenu.map(([label, src]) => (
            <button className="headAction" key={label}>
              <img src={src} alt="" />
              <span>{label}</span>
            </button>
          ))}
          <div className="avatarSmall"><img src="/images/imagepfp.png" alt="Profile" /></div>
          <div className="circleBtn"><Grid3X3 size={20}/></div>
          <div className="circleBtn"><Accessibility size={20}/></div>
        </div>
      </header>
    </>
  );
}

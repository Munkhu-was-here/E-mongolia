"use client";

import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DocumentModal from "../components/DocumentModal";
import DocumentFace from "../components/DocumentFace";
import { Settings, RefreshCw, Headphones, Bot, UserRound } from "lucide-react";

const ASSET = "https://cache.e-mongolia.mn/files/portal-v5/images";

/*
  Edit profile/demo data here.
*/
const person = {
  lastName: "Бэсүд",
  parentName: "Ганбат",
  firstName: "МӨНХ-ЭРДЭНЭ",
  latinLastName: "BESUD",
  latinParentName: "GANBAT",
  latinFirstName: "MUNKH-ERDENE",
  sex: "Эрэгтэй",
  birthDate: "2004/12/24",
  registerNumber: "658651499738",
  idIssueDate: "2021-01-27",
  idExpiryDate: "2029/12/24",
  email: "658651499738@e-mongolia.mn",
  profilePhoto: "/images/imagepfp.png",

  passportNumber: "PE1102577",
  passportBirthDate: "24/12/2004",
  passportPersonalNumber: "EM00123456",
  passportIssueDate: "19 AUG 2028",
  passportExpiryDate: "18 AUG 2036",
  nationality: "MONGOLIA",
  authority: "General Authority for State Registration of Mongolia",
};

const docs = [
  {
    id: 1,
    title: "Иргэний үнэмлэх",
    type: "id",
    front: "/images/nuur-urd.png",
    back: "/images/nuur-ard.png",
  },
  {
    id: 2,
    title: "Паспорт",
    type: "passport",
    front: "/images/passport.png",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="appShell">
      <Header />

      <div className="pageGrid">
        <Sidebar />

        <main className="main">
          <h2>Профайл</h2>

          <section className="ecoCard">
            <img className="treeImg treeLeft" src={`${ASSET}/profile/tree.svg`} alt="" />
            <img className="treeImg treeRight" src={`${ASSET}/profile/tree.svg`} alt="" />

            <div className="ecoLine">
              Нийт <b>17,000</b> 🌳 <b>1.4 сая тонн</b> 💧 хэмээн эх дэлхийгээ хайрлахад хувь нэмрээ оруулсан танд баярлалаа.
            </div>

            <div className="stats">
              <Stat big="5" small="үйлчилгээ" />
              <Stat big="99,735₮" small="төгрөг" />
              <Stat big="11 цаг 30 мин" small="хугацаа" />
            </div>
          </section>

          <section className="profileRow">
            <div className="profilePic profilePicWithImage">
              <img src={person.profilePhoto} alt="Profile" />
            </div>
            <img className="soyombo" src={`${ASSET}/profile/soyombo.svg`} alt="" />

            <div>
              <div className="profileName">{person.parentName} {person.firstName}</div>
              <div className="profileMail">{person.email}</div>
            </div>

            <button className="settings">
              <Settings size={18}/> Тохиргоо
            </button>
          </section>

          <nav className="tabs">
            {[
              "Төрд байгаа миний мэдээлэл",
              "Бичиг баримт",
              "Үндэсний шуудан",
              "Үйлчилгээний түүх",
              "Талархал",
              "Баталгаажуулалт",
              "Өргөдөл, гомдол",
              "Эрсдэлийн түүх"
            ].map((x,i) => (
              <button key={x} className={i===1 ? "activeTab" : ""}>{x}</button>
            ))}
          </nav>

          <button className="refreshBtn">
            <RefreshCw size={18}/> Шинэчлэх
          </button>

          <div className="documents">
            {docs.map(doc => (
              <button
                className="docCardButton"
                key={doc.id}
                onClick={() => setSelected(doc)}
              >
                <DocumentFace doc={doc} person={person} compact />
              </button>
            ))}
          </div>
        </main>
      </div>

      <div className="floating">
        <button><UserRound size={20}/></button>
        <button><Headphones size={20}/></button>
        <button><Bot size={20}/></button>
      </div>

      <DocumentModal
        doc={selected}
        person={person}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

function Stat({big, small}) {
  return (
    <div className="stat">
      <div>{big}</div>
      <span>{small}</span>
    </div>
  );
}

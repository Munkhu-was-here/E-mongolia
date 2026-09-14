export default function DocumentCard({type='id',onClick}){
  const passport=type==='passport';
  return <button className={'document-card '+(passport?'passport':'identity')} onClick={onClick}>
    <div className="doc-title">{passport?'PASSPORT • DEMO':'CITIZEN IDENTITY CARD • DEMO'}</div>
    <div className="doc-photo">PHOTO</div>
    <div className="doc-info">
      <small>Овог / Surname</small><b>Болорхүү</b>
      <small>Нэр / Given name</small><b>БАТМЭНД</b>
      <small>Төрсөн огноо / Date of birth</small><b>2004 / 08 / 20</b>
      <small>Дугаар / No.</small><b>658651499738</b>
    </div>
  </button>
}

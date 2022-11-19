import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {timeAccessed, title, id, domainUrl, logoUrl} = historyDetails

  const del = () => {
    onDelete(id)
  }

  return (
    <li className="history-item">
      <div className="logo-container">
        <p>{timeAccessed}</p>

        <img src={logoUrl} className="item-image" alt="domain logo" />

        <p>{title}</p>

        <p>{domainUrl}</p>
      </div>
      <button type="button" onClick={del}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem

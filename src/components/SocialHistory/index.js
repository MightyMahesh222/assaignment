import './index.css'

const Searching = props => {
  const {Details, unq, deleting} = props
  const {timeAccessed, logoUrl, title, domainUrl} = Details
  const onDelete = () => {
    deleting(unq)
  }
  return (
    <div>
      <li>
        <div className="spaceBetween">
          <div className="middlePart">
            <p className="time">{timeAccessed}</p>
            <img src={logoUrl} className="logoIcon" alt="domain logo" />
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
          <div>
            <button type="button" data-testid="delete" onClick={onDelete}>
              <img
                className="deleteIcon"
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}
export default Searching

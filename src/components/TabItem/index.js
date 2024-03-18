// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const clickTab = () => {
    onClickTab(tabId)
  }

  const active = isActive ? 'act-btn' : 'text'
  return (
    <li className="tab-container">
      <button className={active} type="button" onClick={clickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem

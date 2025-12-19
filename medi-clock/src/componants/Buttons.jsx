import './css/Buttons.css'

const buttons = ({ label, onClick }) => {
  return (
    <div>
      <div className="button" onClick={onClick}><span>BUTTON</span></div>
    </div>
  )
}

export default buttons

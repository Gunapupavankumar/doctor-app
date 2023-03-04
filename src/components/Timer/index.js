import './index.css'

const Timer = props => {
  const {details, deleteTime} = props
  const {time, uniqueNo, isActive} = details
  const onDelete = () => {
    deleteTime(uniqueNo)
  }
  const timer = isActive ? 'active' : 'time'

  return (
    <button className={timer} onClick={onDelete} type="button">
      {time}
    </button>
  )
}

export default Timer

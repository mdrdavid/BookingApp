import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css"
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useContext } from "react";

const Reserve = ({ setOpen, hotelid }) => {
  const [selectedRooms, setSelectedRooms] = useState([])
  const { data, loading, error } = useFetch(`hotels/room/${hotelid}`)
  const {dates}= useContext(SearchContext)
  const getDatesInRange = (startDate, endDate)=>{
    const start = new Date(startDate)
    const end = new Date(endDate)
    const date = new Date(start.getTime());

    let dates = []
    while(date <=end){
list.push(new Date(date))
date.setDate(date.getDate(+1))
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate,dates[0].endDate)

  const isAvilable = (roomNumber)=>{
    const isFound = roomNumber.unavailableDates.some(date=>
      allDates.includes(new Date(date).getTime())
      )
      return isFound
  }

  const handleSelect = (e) => {
    const seclected = e.target.checked
    const value = e.target.value
    setSelectedRooms(checked ? [...selectedRooms, value] 
      : selectedRooms.filter(item=>item !==value))
  };

  const handleClick =()=>{

  }
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
        <span>Select your rooms:</span>
        {data.map(item => {
          <div className="rItem">
            <div className="rItemInfo">{item.title}</div>
            <div className="rDest">{item.desc}</div>
            <div className="rMax">Max People: <b>{item.maxPeople}</b></div>
            <div className="rPrice">{item.price}</div>

            {item.roomNubers.map(roomNumber => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input type="checkbox" 
                value={roomNumber._id} 
                onChange={handleSelect}
                disabled={!isAvilable(roomNumber)} />
              </div>
            ))}

          </div>
        })}
        <button className="rButton" onClick={handleClick}>Reserve Now</button>
      </div>
    </div>
  )
}
export default Reserve

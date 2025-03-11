import { useState, useEffect} from "react"
import "./DateDisplay.css"

export function DateDisplay () {
    const [currentDate, setCurrentDate] = useState("")

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        setCurrentDate(formattedDate);
      }, []);
    
      return (
        <div>
          <p className="currentDate">{currentDate}</p>
        </div>
      );
    }
    
    export default DateDisplay;


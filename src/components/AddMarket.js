import React, {useState, useContext} from 'react';
import './AddMarket.css';
import { GlobalContext } from '../global/GlobalState';
import Market from './Market/Market';



const AddMarket = () => {
    // hooks
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const { addEvent } = useContext(GlobalContext);
    const { events } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            time
        }

        addEvent(newEvent);

        // restet the form
        setEvent('');
        setTime('');
      }

    return (
        <div className="Content">
            <div className="Header">
                <div className="Layer">
                    Southsea Flea Market
                </div>
            </div>
            <div className="Body">
                <ul className="Events">
                    {events.map(item => (<Market key={item.id} item={item} />))}
                </ul>
                <div className="AddEvent">
                    <form onSubmit={onSubmit}>
                        <input className="eventFiled" value={event} type="text" onChange={(e) => setEvent(e.target.value)} placeholder="New Event" />
                        <input className="eventTime" value={time} type="text" onChange={(e) => setTime(e.target.value)} placeholder="Date" />
                        <button className="submitBtn">Add New</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddMarket;
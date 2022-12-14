import React, { createContext, useReducer } from 'react';
import ReduceState from './ReduceState';

// initial state
const initialState = {
    events: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReduceState, initialState);

    // actions
    function addEvent(event) {
        dispatch({
            type: 'ADD_EVENT',
            payload: event
        });
    }

    // Actions
    function deleteEvent(id) {
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        });
    }

    return (<GlobalContext.Provider value={{
        events: state.events,
        addEvent,
        deleteEvent
    }}>
    {children}
    </GlobalContext.Provider>);
}
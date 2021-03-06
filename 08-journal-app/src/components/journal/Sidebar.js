import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {

  const dispatch = useDispatch();
  const { auth: { name } } = useSelector( state => state );
  
  const handleLogout = () => {
    dispatch( startLogout() );
  }
  
  const handleAddNew = () => {
    dispatch( startNewNote() );
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="fa fa-moon"></i>
          <span>{ name }</span>
        </h3>
        <button 
          className="btn"
          onClick={ handleLogout }
        >
          Logout
        </button>
      </div>
      <div className="journal__new-entry" onClick={ handleAddNew }>
        <i className="fa fa-calendar-plus fa-5x"></i>
        <p> New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}

import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  
  const dispatch = useDispatch();
  const { active:note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title } = formValues;

  const activeId = useRef( note.id );
  
  useEffect(() => {
    if( note.id !== activeId.current ) {
      reset(note);
      activeId.current = note.id;
    }
  }, [reset, note]);

  useEffect(() => {
    dispatch( activeNote(formValues.id, { ...formValues } ) );
  }, [dispatch, formValues]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          name="title"
          value={ title }
          onChange={ handleInputChange }
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name="body"
          value={ body }
          onChange={ handleInputChange }
        ></textarea>

        {
          (note.url) 
          && (
            <div className="notes__image">
              <img 
                src="https://i.pinimg.com/originals/bd/6c/0b/bd6c0bef4a473bfca44d1f6c83c95006.png"
                alt="tree"
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

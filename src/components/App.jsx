import React, { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddNote = () => {
    if (inputValue !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  }

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  const handleClearNotes = () => {
    setNotes([]);
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Notas</h1>
      <div className="row">
        <div className="col-md-8 mx-auto mb-4">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Escribe una nota" value={inputValue} onChange={handleInputChange} />
            <button className="btn btn-primary" onClick={handleAddNote}>Agregar nota</button>
            <button className="btn btn-danger ms-2" onClick={handleClearNotes}>Borrar todo</button>
          </div>
        </div>
      </div>
      {notes.map((note, index) => (
        <div key={index} className="row mb-2">
          <div className="col-md-8 mx-auto">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{note}</p>
                <button className="btn btn-danger" onClick={() => handleDeleteNote(index)}>Borrar</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

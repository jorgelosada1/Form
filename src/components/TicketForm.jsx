import React, { useState } from 'react';
import '../sass/ticket.scss'

const TicketForm = ({ addTicket }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [resolved, setResolved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !priority) return;
    addTicket({ title, priority, description, resolved });
    setTitle('');
    setPriority('');
    setDescription('');
    setResolved(false);
  };

  return (
    <form onSubmit={handleSubmit}>
        
      <input className='titulo'
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className='prioridad' value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Selecciona Prioridad</option>
        <option value="1">Baja</option>
        <option value="2">Media</option>
        <option value="3">Alta</option>
      </select>
      <textarea className='textera'
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className='resuelto'>
        Resuelto:
        <input className='chexkbox'
          type="checkbox"
          checked={resolved}
          onChange={(e) => setResolved(e.target.checked)}
        />
      </label>
      <button className='boton' type="submit">Crear Ticket</button>
    </form>
  );
};

export default TicketForm;

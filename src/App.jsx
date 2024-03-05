import React, { useState, useEffect } from 'react';
import TicketForm from './components/TicketForm';
import './sass/app.scss'

const App = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tickets')
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  const addTicket = (ticket) => {
    fetch('http://localhost:3001/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticket),
    })
      .then((response) => response.json())
      .then((data) => setTickets([...tickets, data]));
  };

  const deleteTicket = (id) => {
    fetch(`http://localhost:3001/tickets/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTickets(tickets.filter((ticket) => ticket.id !== id)));
  };

  return (
  <div className='container'>
      <h1 className='title'>Add Tickets</h1>
      <TicketForm addTicket={addTicket} />
      <h2 className='tickets'>Tickets:</h2>
      <ul className='contenedor'>
        {tickets.map((ticket) => (
          <li key={ticket.id} className='ticket-item'>
            <div>
              <h3>{ticket.title}</h3>
              <p>{ticket.description}</p>
            </div>
            <div>
              <p>Prioridad: {ticket.priority}</p>
              <button className='delete-button' onClick={() => deleteTicket(ticket.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

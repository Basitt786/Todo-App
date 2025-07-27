import { MdCheck, MdDeleteForever } from 'react-icons/md';
export default function Nation({ data, checked, handledelete, toggleComplete }) {
  
  return (
    <li className='todo-item'>
      <span style={{ 
        textDecoration: checked ? 'underline' : 'none',
        textDecorationColor: checked ? 'orange' : 'none',
        textDecorationThickness: checked ? '3px' : 'none'
       }}>

        {data}

      </span>

      <button className='check-btn' onClick={() => toggleComplete(data)}>
        <MdCheck />
      </button>

      <button className='delete-btn' onClick={() => handledelete(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

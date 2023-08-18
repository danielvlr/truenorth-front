import { useState, useEffect } from 'react';
import recordService from '../services/record.service';
import { Record } from '../types/record.type';


function UserRecord() {
  const [items, setItems] = useState<Record[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const content = await recordService.getContent();
        setItems(content);
        console.log(items);
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
      {items &&
          items.map((item, i) => (
            <li key={i}>amount: {item.amount}</li>
          ))}
      </ul>
    </div>
  );
}

export default UserRecord;
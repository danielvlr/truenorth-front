import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Item {
  id: number;
  nome: string;
}

function NewOperation() {
  const [items, setItems] = useState<Item[]>([]); 
  useEffect(() => {



  }, []);

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewOperation;
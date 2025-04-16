import { useState } from 'react';

import './App.css';

import ShowAlarm from './sections/showAlarm';
import ShowMusic from './sections/showMusic';
import ShowStream from './sections/showStream';
import NavBar from './sections/NavBar';
import SideHero from './sections/SideHero';
import CreateList from './sections/CreateList';
import ItemList from './sections/ItemList';

function App() {
  const [list, setList] = useState([]);

  const onEditList = (id, newItem) => {
    const updateItem = list.map((edit) => {
      if (edit.id === id) {
        return { ...edit, item: newItem };
      }
      return edit;
    });

    setList(updateItem);
  };

  const addList = ({ item }) => {
    const updateItem = [
      ...list,
      { id: Math.round(Math.random() * 9999), item },
    ];

    setList(updateItem);
  };

  const handleRemove = (id) => {
    const updateList = list.filter((item) => {
      return item.id !== id;
    });
    setList(updateList);
  };

  return (
    <div>
      <NavBar />
      <div className="MainHero">
        <SideHero />
        <ShowMusic />
        <ShowAlarm />
      </div>
      <div>
        <CreateList onCreate={addList} />
        <ItemList
          onList={list}
          onRemove={handleRemove}
          onEditList={onEditList}
        />
      </div>
      <ShowStream />
    </div>
  );
}

export default App;

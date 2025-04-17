import { useState } from 'react';

import './App.css';

import ShowAlarm from './sections/showAlarm';
import ShowMusic from './sections/showMusic';
import ShowStream from './sections/showStream';
import NavBar from './sections/NavBar';
import SideHero from './sections/SideHero';
import CreateList from './sections/CreateList';
import ItemList from './sections/ItemList';

import ProfileData from './data/ProfileData';

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
      <div className='Nav-SideHero'>
        <SideHero ProfileData={ProfileData}/>
        
      <div className="MainHero">

        <NavBar />
        <div className='Inner-MainHero'>
        <ShowMusic />
        <ShowAlarm />

        </div>
      
      
        <CreateList onCreate={addList} />
        <ItemList
          onList={list}
          onRemove={handleRemove}
          onEditList={onEditList}
        />
      </div>
        </div>
      <ShowStream />
    </div>
  );
}

export default App;

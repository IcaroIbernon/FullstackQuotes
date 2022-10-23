import React from 'react'
import { useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import Bars from './Bars'
import SortableItem from './SortableItem';
import Chat from './Chat';
import Revenue from './Revenue';
import Potential from './Potential';


export const Dashboard = () => {
  const [comps, setComps] = useState(["Quick", "Pendings", "Leads"])
  const [activeId, setActiveId] = useState(null);
  function handleDragStart(event) {
    const { active } = event;

    setActiveId(active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setComps((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }
  return (
    <div className='bg-fundo'>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
        <SortableContext items={comps}>
          <div className=' m-6'>
            <div className='grid grid-flow-col gap-4'>
              {comps.map(comp => <SortableItem key={comp} id={comp} />)}
            </div>
          </div>
        </SortableContext>
      </DndContext>
      <div className='flex'>
        <Bars />
        <Chat />
      </div>
      <div className='flex'>
        <Revenue />
        <Potential />
      </div>
    </div>
  )
}

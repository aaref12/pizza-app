'use client'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';



function ToppingCard(topping) {
    const [selected, setSelected] = React.useState('1');
    const iscurrentselected = selected === topping.topping.id;
    return (
        <button 
        onClick={()=> setSelected(topping.topping.id)}
        variant={'outline'} className={cn('border p-2 rounded-lg flex flex-col items-center gap-2', iscurrentselected ? 'border-primary':'')}>
                <Image 
                src={topping.topping.image}
                alt={topping.topping.name}
                width={100}
                height={100}
                />
                <h4>{topping.topping.name}</h4>
                <p>&#8377;{topping.topping.price.toFixed(2)}</p>
        </button>
    )
}

export default ToppingCard
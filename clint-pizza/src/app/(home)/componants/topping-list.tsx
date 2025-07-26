import React from 'react'
import { Image } from 'next/image';
import ToppingCard from './topping-card';


const toppings = [
    { id: "1", name: 'Chicken', image: '/chicken.png', price: 50, isAvailabe: true },
    { id: "2", name: 'jelapeno', image: '/jelapeno.png', price: 50, isAvailabe: true },
    { id: "3", name: 'Cheese', image: '/cheese.png', price: 50, isAvailabe: true }
];

function ToppingList() {
    return (
        <section className='p-2 mt-6'>
            <h3>Extra topings</h3>
            <div className='grid grid-cols-3 gap-4 mt-2'>
                {
                    toppings.map(((topping) => {
                        return <ToppingCard topping={topping} key={topping.id} />
                    }))
                }

            </div>

        </section>
    )
}
export default ToppingList
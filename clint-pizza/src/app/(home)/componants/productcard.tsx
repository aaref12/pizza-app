import React from 'react';
import {
    Card,

    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from '@/components/ui/button';



export type Product = {
    id: string,
    name: string,
    price: number,
    image: string,
    description: string,
}

type ProductCardProps = {
    product: Product
}



const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div>
            <Card className='border-none shadow-none hover:shadow-lg transition-all duration-300'>
                <CardHeader className='flex items-center justify-center flex-col'>
                    <Image
                        alt='pizza-Image'
                        width={150}
                        height={150}
                        src={product.image} />

                </CardHeader>
                <CardContent>
                    <h2 className='text-xl font-semibold'>{product.name}</h2>
                    <p className='text-gray-600 mt-4'>{product.description}</p>
                </CardContent>
                <CardFooter className='flex flex-col items-center justify-between'>

                    <p>
                        <span>From</span>
                        <span className='text-primary font-semibold ml-1'>${product.price.toFixed(2)}</span>
                        <span className='text-gray-500 ml-1'>/per pizza</span>
                    </p>
                    <Button className='bg-primary text-white px-4 py-2  rounded-full mt-6 hover:bg-primary/90 transition-colors'>
                        Add to Cart</Button>


                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductCard;
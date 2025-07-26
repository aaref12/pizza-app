import React from 'react';
import {
    Card,

    CardContent,

    CardFooter,
    CardHeader,

} from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle
} from "@/components/ui/dialog"
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
                    <Dialog>
                        <DialogTrigger className='bg-primary text-white px-4 py-2  rounded-full mt-6 hover:bg-primary/90 transition-colors'>Add To Cart</DialogTrigger>
                        <DialogContent className='max-w-3xl p-0'>
                            <div className='flex '>
                                <div className='w 1/3 bg-white rounded p-8 flex items-center justify-center'>
                                    <Image src={product.image} alt={product.name} width={450} height={450} className='w-full h-auto object-cover rounded-lg' />
                                </div>
                                <div className='2/3'>
                                    <h3 className='text-3xl font-bold'>{product.name}</h3>
                                    <p className='mt-4'>{product.description}</p>


                                    <div>
                                        <h4 className='p-2 mt-6'>Choose The Size</h4>
                                        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                                            <div>
                                                <RadioGroupItem value="small" id="small" className="peer sr-only" />
                                                <Label
                                                    htmlFor="small"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >

                                                    Small
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem
                                                    value="medium"
                                                    id="medium"
                                                    className="peer sr-only"
                                                />
                                                <Label
                                                    htmlFor="medium"
                                                    className="flex flex-col items-center justify-between rounded-md border-2  bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >

                                                    Medium
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem value="large" id="large" className="peer sr-only" />
                                                <Label
                                                    htmlFor="large"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-white bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >

                                                    Large
                                                </Label>
                                            </div>
                                        </RadioGroup>

                                    </div>


                                    <div>
                                        <h4 className='p-2 mt-6'>Choose the Crust</h4>
                                        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                                            <div>
                                                <RadioGroupItem value="thin" id="thin" className="peer sr-only" />
                                                <Label
                                                    htmlFor="thin"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >

                                                    Thin
                                                    
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem
                                                    value="thick"
                                                    id="thick"
                                                    className="peer sr-only"
                                                />
                                                <Label
                                                    htmlFor="thick"
                                                    className="flex flex-col items-center justify-between rounded-md border-2  bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >

                                                    Thick
                                                </Label>
                                            </div>
                                            
                                        </RadioGroup>

                                    </div>



                                </div>
                            </div>

                        </DialogContent>
                    </Dialog>





                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductCard;
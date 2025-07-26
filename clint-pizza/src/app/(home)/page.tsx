import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard, { Product } from "./componants/productcard";


// Define the Product type
const Products: Product[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: 12.99,
    image: "/pizza-main.png",
    description: "Classic Margherita pizza with fresh basil and mozzarella cheese.",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    price: 12.99,
    image: "/pizza-main.png",
    description: "Classic Margherita pizza with fresh basil and mozzarella cheese.",
  },
  {
    id: "3",
    name: "Margherita Pizza",
    price: 12.99,
    image: "/pizza-main.png",
    description: "Classic Margherita pizza with fresh basil and mozzarella cheese.",
  },
  {
    id: "4",
    name: "Margherita Pizza",
    price: 12.99,
    image: "/pizza-main.png",
    description: "Classic Margherita pizza with fresh basil and mozzarella cheese.",
  },
  {
    id: "5",
    name: "Margherita Pizza",
    price: 12.99,
    image: "/pizza-main.png",
    description: "Classic Margherita pizza with fresh basil and mozzarella cheese.",
  }

]




export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container  py-20 flex items-center justify-between">
          <div className="">
            <h1 className="text-6xl font-bold">Super Delicious Pizza In <br />
              <span className="text-primary">Just 30 Minutes</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy A Free Meal If Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get Your Pizza Now
            </Button>
          </div>
          <div>
            <Image alt="pizza-main" src={'/pizza-main.png'} width={500} height={500} className="px-10" />
          </div>
        </div>
      </section>


      <section>
        <div className="container py-12">
          <Tabs defaultValue="pizza" 
          className="w-full">
            <TabsList>
              <TabsTrigger  value="Pizza">Pizza</TabsTrigger>
              <TabsTrigger value="Beverages"> Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="Pizza" className="text-md">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {
                  Products.map((Product) => {
                    return (
                      <ProductCard key={Product.id} product={Product} />
                    )
                  })
                }
              </div>


            </TabsContent>
            <TabsContent value="Beverages" className="text-md">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {
                  Products.map((Product) => {
                    return (
                      <ProductCard key={Product.id} product={Product} />
                    )
                  })
                }
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>




    </>
  );
}


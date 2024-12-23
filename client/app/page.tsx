'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

interface Category {
  name: string
  link: string
  imageSrc: string
}

interface Items {
  name: string
  link: string
  imageSrc: string
  price: number
  rating?: null | 1 | 2 | 3 | 4 | 5
  ratedBy: number
}

export default function Home() {

  const sale: Items[] = [
    {
      name: "Item 1",
      link: "/products/item-id",
      imageSrc: "/images/clothing.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 2",
      link: "/products/item",
      imageSrc: "/images/electronics.jpg",
      price: 100,
      rating: 2,
      ratedBy: 10
    },
    {
      name: "Item 3",
      link: "/products/item",
      imageSrc: "/images/booksstationery.jpg",
      price: 100,
      rating: 3,
      ratedBy: 40
    },
    {
      name: "Item 4",
      link: "/products/item",
      imageSrc: "/images/sports.jpg",
      price: 100,
      rating: 5,
      ratedBy: 4230
    },
    {
      name: "Item 5",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 3,
      ratedBy: 30
    },
    {
      name: "Item 5",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 1,
      ratedBy: 3240
    },
  ]


  const categories: Category[] = [
    {
      name: "Clothing",
      link: "/categories/clothing",
      imageSrc: "/images/clothing.jpg"
    },
    {
      name: "Electronics",
      link: "/categories/electronics",
      imageSrc: "/images/electronics.jpg"
    },
    {
      name: "Books & Stationery",
      link: "/categories/books-stationery",
      imageSrc: "/images/booksstationery.jpg"
    },
    {
      name: "Sports & Outdoors",
      link: "/categories/sports-outdoors",
      imageSrc: "/images/sports.jpg"
    },
    {
      name: "Furniture",
      link: "/categories/furniture",
      imageSrc: "/images/furniture.jpg"
    },
    {
      name: "Groceries & Essentials",
      link: "groceries",
      imageSrc: "/images/categories/groceries.jpg"
    },
  ]

  const foryou: Items[] = [
    {
      name: "Item 1",
      link: "/products/item-id",
      imageSrc: "/images/clothing.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 2",
      link: "/products/item",
      imageSrc: "/images/electronics.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 3",
      link: "/products/item",
      imageSrc: "/images/booksstationery.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 4",
      link: "/products/item",
      imageSrc: "/images/sports.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 5",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 6",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 7",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 8",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 9",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 10",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 11",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
    {
      name: "Item 12",
      link: "/products/item",
      imageSrc: "/images/furniture.jpg",
      price: 100,
      rating: 4,
      ratedBy: 0
    },
  ]


  return (
    <div className="w-full min-h-screen">

      <main className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl font-allertaStencil mb-4">Welcome to Electryx Store!</h1>
          <p className="text-lg text-txt-sec-light dark:text-txt-sec-dark mb-6">
            Discover the best deals and shop the latest items from all categories.
          </p>
          <Link
            href="/categories/clothing"
            className="bg-btn-bg dark:bg-btn-dark-bg text-btn-txt dark:text-btn-dark-txt py-2 px-5 rounded-lg hover:opacity-70 transition duration-300">
            Shop Clothing
          </Link>
        </section>

        {/* Featured Products */}
        <section className="flex flex-col">
          <p className='my-5 ps-2'>Flash Sale</p>
          <div className='w-full flex flex-row flex-wrap justify-center items-center gap-[0.5%] px-0'>
            {
              sale.map((item, index) => (
                <Link
                  key={index}
                  href={item?.link}
                  className="category-card md:basis-[16%] my-1 overflow-hidden bg-card-light dark:bg-card-dark hover:shadow-light-small hover:scale-[1.03] transition duration-300 border border-brd-light dark:border-brd-dark">
                  <div className="image">
                    <Image
                      src={"/images/signInImage.jpg"}
                      alt={item?.name}
                      width={500}
                      height={500}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div className='px-5 my-3'>
                    <div className="text-start">
                      <p className="text-sm">{item?.name}</p>
                      <p className="text-btn-bg dark:text-btn-dark-bg"> Rs.{item?.price}</p>
                    </div>
                    <div className="text-sm rating w-full flex items-center justify-start">
                      {
                        [1, 2, 3, 4, 5].map((value) => {
                          if (item?.rating && value <= item?.rating)
                            return (<FaStar
                              key={value}
                              className={`w-3 h-3 text-warning/80`}
                            />)
                          return (<FaRegStar
                            key={value}
                            className={`w-3 h-3 text-txt-sec-light dark:text-txt-sec-dark`}
                          />)
                        })
                      }
                      <span className='text-sm text-txt-sec-light/50 dark:text-txt-sec-dark/50'>({item?.ratedBy})</span>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </section>

        {/* Featured Categories */}
        <section className="flex flex-col mt-14">
          <p className='my-5 ps-2'>Categories</p>
          <div className='w-full flex flex-row flex-wrap justify-center items-center gap-[0.5%] px-0'>

            {
              categories.map((category, index) => (
                <Link
                  key={index}
                  href={category?.link}
                  className="category-card md:basis-[16%] my-1 overflow-hidden bg-card-light dark:bg-card-dark hover:shadow-light-small hover:scale-[1.03] transition duration-300 border border-brd-light dark:border-brd-dark">
                  <div className="image m-5">
                    <Image
                      src={"/images/signInImage.jpg"}
                      alt={category?.name}
                      width={500}
                      height={500}
                      className="object-cover object-center rounded-lg w-full h-full"
                    />
                  </div>
                  <div className="mb-5 text-center">
                    <h2 className="font-semibold mb-2">{category?.name}</h2>
                  </div>
                </Link>
              ))
            }
          </div>
          <div className='w-full text-center'>
            <Link
              href={'/categories'}
              className='inline-block my-5 hover:opacity-70 text-btn-bg dark:text-btn-dark-bg text-center transition duration-300'
            >
              Explore more categories
            </Link>
          </div>
        </section>

        {/* Just For You Products */}
        <section className="flex flex-col">
          <p className='my-5 ps-2'>Just For You</p>
          <div className='w-full flex flex-row flex-wrap justify-center items-center gap-[0.5%] px-0'>

            {
              foryou.map((item, index) => (
                <Link
                  key={index}
                  href={item?.link}
                  className="category-card md:basis-[16%] my-1 overflow-hidden bg-card-light dark:bg-card-dark hover:shadow-light-small hover:scale-[1.03] transition duration-300 border border-brd-light dark:border-brd-dark">
                  <div className="image">
                    <Image
                      src={"/images/signInImage.jpg"}
                      alt={item?.name}
                      width={500}
                      height={500}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div className='px-5 my-3'>
                    <div className="text-start">
                      <p className="text-sm">{item?.name}</p>
                      <p className="text-btn-bg dark:text-btn-dark-bg"> Rs.{item?.price}</p>
                    </div>
                    <div className="text-sm rating w-full flex items-center justify-start">
                      {
                        [1, 2, 3, 4, 5].map((value) => {
                          if (item?.rating && value <= item?.rating)
                            return (<FaStar
                              key={value}
                              className={`w-3 h-3 text-warning/80`}
                            />)
                          return (<FaRegStar
                            key={value}
                            className={`w-3 h-3 text-txt-sec-light dark:text-txt-sec-dark`}
                          />)
                        })
                      }
                      <span className='text-sm text-txt-sec-light/50 dark:text-txt-sec-dark/50'>({item?.ratedBy})</span>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
          <div className='w-full text-center'>
            <Link
              href={'/categories'}
              className='inline-block my-5 hover:opacity-70 text-btn-bg dark:text-btn-dark-bg text-center transition duration-300'
            >
              See what awaits you
            </Link>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-12">
          <h2 className="text-2xl font-allertaStencil mb-4">Limited Time Offer!</h2>
          <p className="text-lg text-txt-sec-light dark:text-txt-sec-dark mb-6">
            Don't miss out on our amazing discounts. Shop now and save big!
          </p>
          <Link href="/sale" className="bg-secondary-light dark:bg-secondary-dark text-white py-2 px-5 rounded-lg hover:opacity-70 transition duration-300">
            Shop the Sale
          </Link>
        </section>
      </main>

    </div >
  );
}

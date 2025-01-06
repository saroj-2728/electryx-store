'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ManageProducts = () => {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product A',
      price: 200,
      stock: 50,
      category: 'Category 1',
    },
    {
      id: 2,
      name: 'Product B',
      price: 300,
      stock: 30,
      category: 'Category 2',
    },
    {
      id: 3,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 4,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 5,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 5,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 5,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 5,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 5,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 5,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
  ]);

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="w-full min-h-screen px-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl mb-3">Recent Products</h2>
        <Link
          className="text-sm flex flex-row items-center gap-1 hover:opacity-70 text-btn-bg dark:text-btn-dark-bg text-center transition duration-300"
          href={'/seller/manage-products/add'}>
          <span>Add Products</span>
          <GoArrowRight
            className="size-4"
          />
        </Link>
      </div>

      <div className='w-full mx-auto flex flex-row flex-wrap justify-center items-center gap-[1%] px-0'>
        {products.map((item, index) => (
          <Link
            href={'/seller/manage-products/view?product=someproduct'}
            passHref
            legacyBehavior
            key={index}
            className="">
            <div className='category-card md:basis-[19%] my-2 overflow-hidden bg-card-light dark:bg-card-dark hover:shadow-light-small hover:scale-[1.03] transition duration-300 border border-brd-light dark:border-brd-dark max-w-xs cursor-pointer'>
              <div className="image">
                <Image
                  src={"/images/signInImage.jpg"}
                  alt={item?.name}
                  width={500}
                  height={500}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              
              <div className='px-3 my-3'>
                <div className="text-start">
                  <p className="text-sm">{item?.name}</p>
                  <p className="text-btn-bg dark:text-btn-dark-bg"> Rs.{item?.price}</p>
                </div>
              </div>

              <div className="px-3 my-3 actions flex flex-row items-center justify-between gap-2">
                <Link
                  href={'/seller/manage-products/view?product=someproduct&action=edit'}
                  className='border border-brd-light dark:border-brd-dark hover:opacity-50 py-1.5 w-full text-center rounded-lg transition duration-300 flex items-center justify-center'
                >
                  <FaEdit
                    className='text-btn-bg dark:text-btn-dark-bg size-5'
                  />
                </Link>
                <button
                  onClick={(e)=> {
                    e.preventDefault()
                    
                  }}
                  className='border border-brd-light dark:border-brd-dark hover:opacity-50 py-1.5 w-full flex items-center justify-center rounded-lg transition duration-300  pointer-events-none'
                >
                  <RiDeleteBin5Fill 
                  className='text-red-600 size-5'
                  />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>


      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products found.</p>
      )}
    </div>
  );
};

export default ManageProducts;

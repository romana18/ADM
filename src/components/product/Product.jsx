import React from 'react'
import { useContext } from 'react'
import Admcontext from '../../context/admcontext'

function Product() {
    const {prodname} = useContext(Admcontext)
    const {prodprice} = useContext(Admcontext)
    const {prodslife} = useContext(Admcontext)
    const {dairyname} = useContext(Admcontext)
    const {FSSAI} = useContext(Admcontext)
    const {prodquant} = useContext(Admcontext)
    const {prodlocation} = useContext(Admcontext)
    const {prodcreated} = useContext(Admcontext)
  return (
    <div>
       <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{prodname}</h2>
               
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">Rs. {prodprice}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Cretaed at:</span>
                        <span className="text-gray-600 dark:text-gray-300">{prodcreated}</span>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Quantity:</span>
                        <span className="text-gray-600 dark:text-gray-300">{prodquant}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Shelf Life:</span>
                        <span className="text-gray-600 dark:text-gray-300">{prodslife}</span>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Dairy Name:</span>
                        <span className="text-gray-600 dark:text-gray-300">{dairyname}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Location:</span>
                        <span className="text-gray-600 dark:text-gray-300">{prodlocation}</span>
                    </div>
                </div>
             
              
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Product
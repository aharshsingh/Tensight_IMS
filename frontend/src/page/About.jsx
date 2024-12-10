import React from 'react'
import NavBar from '../component/NavBar'

export default function About() {
  return (
    <div>
      <NavBar/>
      <div className="bg-gray-100 text-gray-800 py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">About Us</h1>
        <p className="text-lg leading-7 mb-8 text-gray-700">
          Welcome to our <strong>Inventory Management System</strong> – a robust, lightweight tool designed to revolutionize how businesses manage their stock levels, optimize supply chain workflows, and minimize out-of-stock scenarios.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-lg leading-7 text-gray-700">
            Our mission is to empower businesses with a smart and efficient way to keep their inventory in check. We aim to simplify stock management while ensuring you never miss an opportunity due to insufficient supplies.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li><strong>Real-Time Stock Monitoring:</strong> Track your inventory levels with precision and stay informed about critical stock changes.</li>
            <li><strong>Smart Analytics:</strong> Gain insights into "Top Products at Risk of Stock Out" and make data-driven decisions.</li>
            <li><strong>Seamless Stock Management:</strong> Easily update stock levels, add new products, and set reorder thresholds to maintain optimal stock levels.</li>
            <li><strong>User-Friendly Interface:</strong> Enjoy an intuitive and responsive frontend that simplifies inventory tracking for teams of all sizes.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li><strong>Efficiency:</strong> Save time with automated insights and real-time data updates.</li>
            <li><strong>Accuracy:</strong> Eliminate errors and guesswork in inventory tracking.</li>
            <li><strong>Scalability:</strong> Our system grows with your business needs, ensuring seamless integration and operation.</li>
            <li><strong>Accessibility:</strong> Access your inventory data anytime, anywhere, on any device.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h2>
          <p className="text-lg leading-7 text-gray-700">
            We envision a world where businesses, big or small, can thrive without the fear of stock-outs or excessive inventory, fostering seamless supply chain operations and improved customer satisfaction.
          </p>
        </div>
        <p className="text-lg mt-8 text-center text-gray-700">
          Thank you for choosing our <strong>Inventory Management System</strong> – where smart inventory management meets simplicity and reliability.
        </p>
      </div>
    </div>
    </div>
  )
}

import React from 'react';

export const About:React.FC = () =>{
  return (
    <div className="bg-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Grow Green</h2>
            <p className="text-gray-600 mb-6">
              At Grow Green, we believe in bringing the beauty and benefits of nature into every home. 
              Our journey began with a simple mission: to make plant parenthood accessible and enjoyable for everyone.
            </p>
            <p className="text-gray-600 mb-6">
              We carefully select each plant in our collection, ensuring they meet our high standards for health and vitality. 
              Our team of plant experts is dedicated to providing you with the knowledge and support needed to help your plants thrive.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600">5000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600">100+</h3>
                <p className="text-gray-600">Plant Varieties</p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000"
              alt="Our nursery"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import Layout from '../components/Layout';

const Application: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Rental Application
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Please fill out all required fields marked with an asterisk (*)
            </p>
          </div>
          {/* Form will be implemented in the next tasks */}
          <div className="mt-8">
            <p className="text-center text-gray-500">Form sections will be implemented here</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Application; 
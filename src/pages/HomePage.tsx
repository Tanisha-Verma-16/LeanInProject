import React from 'react';
import { Search } from 'lucide-react';
import { categories, campaigns } from '../App';
import CampaignCard from '../components/CampaignCard';
import CategoryFilter from '../components/CategoryFilter';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Fund the Future of Our Planet
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Support innovative climate solutions and join a community of environmental changemakers.
            </p>
            <div className="mt-8 relative max-w-xl mx-auto">
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-sm">
                <Search className="h-5 w-5 text-gray-400 dark:text-gray-500 ml-4" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="w-full px-4 py-3 rounded-full focus:outline-none bg-transparent dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NASA Climate Data Sections */}
      <div className="bg-gray-900 dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Real-Time Climate Impact Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Real-Time Climate Impact
            </h2>
            <p className="mt-3 text-lg text-gray-300">
              Track global temperature changes and understand why immediate action is crucial.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden mb-16">
            <iframe
              src="https://climate.nasa.gov/earth-now/#/vital-signs/air-temperature/airs-infrared-surface-3day"
              className="w-full h-[600px] border-0"
              title="NASA Climate Change and Global Warming Vital Signs"
            />
          </div>

          {/* Climate Time Machine Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Climate Time Machine
            </h2>
            <p className="mt-3 text-lg text-gray-300">
              Visualize how our planet has changed over time and see the impact of climate change.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <iframe
              src="https://climate.nasa.gov/interactives/climate-time-machine"
              className="w-full h-[600px] border-0"
              title="NASA Climate Time Machine"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Data provided by NASA's Global Climate Change Vital Signs of the Planet
            </p>
            <a 
              href="https://climate.nasa.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-green-400 hover:text-green-300 transition-colors"
            >
              Learn more at NASA Climate Change
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <CategoryFilter categories={categories} />

        {/* Campaigns Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </main>
    </>
  );
}

export default HomePage;
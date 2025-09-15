import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  DollarSign, 
  Star, 
  Shield, 
  Gift,
  ArrowRight,
  Loader2,
  ShoppingBag,
  Eye,
  ExternalLink,
  AlertCircle
} from 'lucide-react';

interface SearchPageProps {
  userName?: string;
}

interface SearchResults {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  retailer: string;
  imageUrl: string;
  dealBadge?: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
}

const SearchPage: React.FC<SearchPageProps> = ({ userName = "there" }) => {
  const [productSearch, setProductSearch] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [urgency, setUrgency] = useState<'urgent' | 'standard' | 'flexible' | null>(null);
  const [priorities, setPriorities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [error, setError] = useState<string | null>(null);

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgent', color: 'bg-[#E45A92]', description: 'Need it ASAP' },
    { value: 'standard', label: 'Standard', color: 'bg-[#5D2F77]', description: 'Within a week' },
    { value: 'flexible', label: 'Flexible', color: 'bg-[#FFACAC]', description: 'No rush' }
  ];

  const priorityOptions = [
    { value: 'price', label: 'Lowest Price', icon: DollarSign },
    { value: 'reviews', label: 'Best Reviews', icon: Star },
    { value: 'retailer', label: 'Trusted Retailer', icon: Shield },
    { value: 'offers', label: 'Best Offers', icon: Gift }
  ];

  const togglePriority = (priority: string) => {
    setPriorities(prev => 
      prev.includes(priority) 
        ? prev.filter(p => p !== priority)
        : [...prev, priority]
    );
  };

  const handleSearch = async () => {
    if (!productSearch.trim()) {
      setError('Please tell us what you want to buy!');
      return;
    }

    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock results based on search
      const mockResults: SearchResults[] = [
        {
          id: '1',
          name: productSearch.includes('iPhone') ? 'iPhone 16 Pro 128GB Black' : `${productSearch} - Premium Model`,
          price: '$999',
          originalPrice: '$1,199',
          rating: 4.8,
          reviewCount: 2847,
          retailer: 'Apple Store',
          imageUrl: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
          dealBadge: '17% OFF',
          keyFeatures: ['Latest A18 Pro chip', '48MP camera system', 'Titanium design'],
          pros: ['Exceptional performance', 'Outstanding camera quality', 'Premium build'],
          cons: ['Expensive', 'No charger included']
        },
        {
          id: '2',
          name: productSearch.includes('iPhone') ? 'iPhone 16 128GB Blue' : `${productSearch} - Standard Model`,
          price: '$799',
          originalPrice: '$899',
          rating: 4.6,
          reviewCount: 1923,
          retailer: 'Best Buy',
          imageUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
          dealBadge: '11% OFF',
          keyFeatures: ['A18 chip', 'Dual camera system', 'All-day battery'],
          pros: ['Great value', 'Reliable performance', 'Good camera'],
          cons: ['Limited storage options', 'Plastic back']
        },
        {
          id: '3',
          name: productSearch.includes('iPhone') ? 'iPhone 15 Pro 256GB Natural' : `${productSearch} - Previous Gen`,
          price: '$899',
          originalPrice: '$1,099',
          rating: 4.7,
          reviewCount: 3456,
          retailer: 'Amazon',
          imageUrl: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400',
          dealBadge: '18% OFF',
          keyFeatures: ['A17 Pro chip', 'Pro camera system', 'Titanium build'],
          pros: ['Proven performance', 'Excellent cameras', 'More storage'],
          cons: ['Previous generation', 'Still expensive']
        }
      ];

      setSearchResults(mockResults);
    } catch (err) {
      setError('Sorry, we couldn\'t find results for your search. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Aptos',system-ui,sans-serif]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-[#3E1E68]" />
              <span className="ml-2 text-xl font-bold text-[#3E1E68]">WisePick</span>
            </div>
            <div className="text-sm text-gray-600">
              Welcome back, <span className="font-semibold text-[#3E1E68]">{userName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3E1E68] mb-4">
            Hi {userName}, ready to shop smarter?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us what you need and WisePick will find the best deals for you.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="space-y-8">
            {/* Product Search */}
            <div>
              <label className="block text-lg font-semibold text-[#3E1E68] mb-3">
                What do you want to buy?
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  placeholder="e.g., iPhone, Adidas running shoes"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-[#E45A92] focus:outline-none transition-colors"
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Product detailed description? (optional)
                </label>
                <textarea
                  value={productDetails}
                  onChange={(e) => setProductDetails(e.target.value)}
                  placeholder="e.g., Apple iPhone 16 Pro 128 GB RAM Black Colour"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#E45A92] focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Urgency Selection */}
            <div>
              <label className="block text-lg font-semibold text-[#3E1E68] mb-4">
                How soon do you need it?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {urgencyOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setUrgency(option.value as any)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      urgency === option.value
                        ? `${option.color} text-white border-transparent shadow-lg transform scale-105`
                        : 'bg-white border-gray-200 text-gray-700 hover:border-[#E45A92] hover:shadow-md'
                    }`}
                  >
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-semibold">{option.label}</div>
                    <div className="text-sm opacity-90">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Priorities */}
            <div>
              <label className="block text-lg font-semibold text-[#3E1E68] mb-4">
                What matters most in your decision?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {priorityOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => togglePriority(option.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      priorities.includes(option.value)
                        ? 'bg-gradient-to-br from-[#5D2F77] to-[#E45A92] text-white border-transparent shadow-lg'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-[#E45A92] hover:shadow-md'
                    }`}
                  >
                    <option.icon className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-semibold text-sm">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-red-700">{error}</span>
              </div>
            )}

            {/* Search Button */}
            <div className="text-center">
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-gradient-to-r from-[#E45A92] to-[#FFACAC] text-white px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Searching...
                  </>
                ) : (
                  <>
                    Search Smart
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                WisePick will instantly scan the web for your best options
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-[#FFACAC]/10 to-[#E45A92]/10 rounded-2xl border-2 border-[#E45A92]/20 p-8">
          <h2 className="text-2xl font-bold text-[#3E1E68] mb-6 flex items-center">
            <Eye className="h-6 w-6 mr-2" />
            Your Smart Recommendations
          </h2>

          {!hasSearched && !isLoading && (
            <div className="text-center py-12">
              <div className="bg-white/50 rounded-xl p-8 max-w-md mx-auto">
                <ShoppingBag className="h-12 w-12 text-[#5D2F77] mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Your personalized product details and best deals will appear here.
                </p>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="text-center py-12">
              <div className="bg-white/50 rounded-xl p-8 max-w-md mx-auto">
                <Loader2 className="animate-spin h-12 w-12 text-[#E45A92] mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Finding the best deals for you...
                </p>
              </div>
            </div>
          )}

          {hasSearched && !isLoading && searchResults.length > 0 && (
            <div className="space-y-6">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="md:w-48 flex-shrink-0">
                      <div className="relative">
                        <img 
                          src={result.imageUrl} 
                          alt={result.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        {result.dealBadge && (
                          <span className="absolute top-2 left-2 bg-[#E45A92] text-white px-2 py-1 rounded-full text-xs font-bold">
                            {result.dealBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[#3E1E68] mb-2">{result.name}</h3>
                          <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < Math.floor(result.rating) ? 'text-[#E45A92] fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                              <span className="ml-2 text-sm text-gray-600">
                                {result.rating} ({result.reviewCount.toLocaleString()} reviews)
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">Sold by {result.retailer}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#3E1E68]">{result.price}</div>
                          {result.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">{result.originalPrice}</div>
                          )}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-[#3E1E68] mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.keyFeatures.map((feature, index) => (
                            <span key={index} className="bg-[#FFACAC]/20 text-[#3E1E68] px-3 py-1 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pros and Cons */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {result.pros.map((pro, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-600 mb-2">Cons:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {result.cons.map((con, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="bg-gradient-to-r from-[#E45A92] to-[#FFACAC] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                          View Deal
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </button>
                        <button className="border-2 border-[#3E1E68] text-[#3E1E68] px-6 py-2 rounded-full font-semibold hover:bg-[#3E1E68] hover:text-white transition-all duration-300">
                          Read Full Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {hasSearched && !isLoading && searchResults.length === 0 && error && (
            <div className="text-center py-12">
              <div className="bg-white/50 rounded-xl p-8 max-w-md mx-auto">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <p className="text-red-600 text-lg">
                  {error}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#3E1E68] text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <ShoppingBag className="h-6 w-6 text-[#E45A92]" />
              <span className="ml-2 text-lg font-bold">WisePick</span>
              <span className="ml-4 text-sm text-gray-300">Shop smarter, every time.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#E45A92] transition-colors">Profile</a>
              <a href="#" className="hover:text-[#E45A92] transition-colors">Home</a>
              <a href="#" className="hover:text-[#E45A92] transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchPage;
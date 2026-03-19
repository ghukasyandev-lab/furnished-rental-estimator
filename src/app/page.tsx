import React, { useState } from 'react';
import { Search, Home, Users, Calendar, PawPrint, Star, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';

const mockListings = [
  {
    id: 1,
    name: "Modern Architectural Gem in Venice",
    location: "Venice, Los Angeles",
    price: 450,
    rating: 4.95,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    description: "Stunning modern home with rooftop deck and ocean breeze.",
    score: 98,
    badge: "Best Value"
  },
  {
    id: 2,
    name: "Luxury Hollywood Hills Retreat",
    location: "Hollywood Hills, Los Angeles",
    price: 850,
    rating: 4.88,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    description: "Infinity pool overlooking the city skyline. Ultimate privacy.",
    score: 95,
    badge: "Premium Choice"
  },
  {
    id: 3,
    name: "Charming Silver Lake Loft",
    location: "Silver Lake, Los Angeles",
    price: 325,
    rating: 4.92,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    description: "Hip industrial loft steps away from the reservoir and cafes.",
    score: 92,
    badge: "Local Favorite"
  }
];

export default function HomeApp() {
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    location: 'Los Angeles, CA',
    dates: '',
    guests: '2',
    pets: 'No'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 text-rose-500 font-bold text-2xl">
          <Home size={32} />
          <span>RentEstimator</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#" className="hover:text-rose-500 transition">How it works</a>
          <a href="#" className="hover:text-rose-500 transition">For Owners</a>
          <button className="bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition shadow-sm">Sign In</button>
        </div>
      </nav>

      {/* Hero / Search */}
      <header className="bg-white pt-16 pb-24 px-6 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
            Find your <span className="text-rose-500">perfect</span> furnished home.
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Smart AI estimates and real-time comparisons for mid-term rentals.
          </p>

          <form onSubmit={handleSearch} className="bg-white shadow-2xl rounded-3xl border p-4 md:p-2 flex flex-col md:flex-row gap-2 max-w-5xl mx-auto ring-1 ring-gray-200">
            <div className="flex-1 flex items-center px-4 py-3 md:border-r hover:bg-gray-50 rounded-2xl transition group">
              <MapPin className="text-rose-500 mr-3" size={20} />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-gray-500 uppercase">Location</label>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-transparent font-medium focus:outline-none" 
                  placeholder="Where are you going?"
                />
              </div>
            </div>
            
            <div className="flex-1 flex items-center px-4 py-3 md:border-r hover:bg-gray-50 rounded-2xl transition">
              <Calendar className="text-rose-500 mr-3" size={20} />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-gray-500 uppercase">Stay Dates</label>
                <input type="text" className="w-full bg-transparent font-medium focus:outline-none" placeholder="Add dates" />
              </div>
            </div>

            <div className="flex-1 flex items-center px-4 py-3 md:border-r hover:bg-gray-50 rounded-2xl transition">
              <Users className="text-rose-500 mr-3" size={20} />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-gray-500 uppercase">Guests</label>
                <select className="w-full bg-transparent font-medium focus:outline-none cursor-pointer">
                  <option>1 Guest</option>
                  <option selected>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4 py-3 hover:bg-gray-50 rounded-2xl transition">
              <PawPrint className="text-rose-500 mr-3" size={20} />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-gray-500 uppercase">Pets</label>
                <select className="w-full bg-transparent font-medium focus:outline-none cursor-pointer">
                  <option>None</option>
                  <option>1 Pet</option>
                  <option>Multiple</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={searching}
              className="bg-rose-500 text-white rounded-2xl px-8 py-4 font-bold hover:bg-rose-600 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 min-w-[140px]"
            >
              <Search size={20} />
              {searching ? 'Calculating...' : 'Search'}
            </button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 min-h-[500px]">
        {!showResults && !searching && (
          <div className="text-center py-20 opacity-50">
            <TrendingUp size={64} className="mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-bold">Search above to see comparisons</h2>
            <p>We analyze real-market data to find the best value for your stay.</p>
          </div>
        )}

        {searching && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-rose-500 mb-6"></div>
            <h2 className="text-2xl font-bold animate-pulse">Analyzing market rates in {formData.location}...</h2>
            <p className="text-gray-500 mt-2">Checking reviews and listing quality metrics</p>
          </div>
        )}

        {showResults && !searching && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-extrabold mb-1">Top 3 Furnished Homes in {formData.location}</h2>
                <p className="text-gray-500 italic">Based on price, 4.8+ rating, and amenities</p>
              </div>
              <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-xl flex items-center gap-2 border border-green-200 shadow-sm">
                <ShieldCheck size={20} />
                <span>Price Match Guaranteed</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockListings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border hover:shadow-2xl transition group relative cursor-pointer">
                  {listing.badge && (
                    <div className={`absolute top-4 left-4 z-10 font-bold px-3 py-1 rounded-full text-xs shadow-md ${
                      listing.badge === 'Best Value' ? 'bg-rose-500 text-white' : 
                      listing.badge === 'Premium Choice' ? 'bg-amber-400 text-amber-900' : 
                      'bg-indigo-600 text-white'
                    }`}>
                      {listing.badge}
                    </div>
                  )}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={listing.image} alt={listing.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl leading-tight h-14 overflow-hidden">{listing.name}</h3>
                      <div className="flex items-center gap-1 font-bold text-gray-700 bg-gray-50 px-2 py-1 rounded-lg">
                        <Star className="text-amber-400 fill-amber-400" size={16} />
                        <span>{listing.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-4 text-sm font-medium">{listing.description}</p>
                    <div className="flex items-end justify-between border-t pt-4">
                      <div>
                        <span className="text-2xl font-extrabold">${listing.price}</span>
                        <span className="text-gray-500 font-medium tracking-tight"> / night</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-gray-400 uppercase mb-1">AI Recommendation</div>
                        <div className="bg-gray-900 text-white rounded-lg px-2 py-1 font-bold text-sm inline-block">
                          {listing.score}% Match
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-6 mt-16 text-center text-gray-400 font-medium">
        <p>© 2026 RentEstimator Inc. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-rose-500">Privacy</a>
          <a href="#" className="hover:text-rose-500">Terms</a>
          <a href="#" className="hover:text-rose-500">Contact</a>
        </div>
      </footer>
    </div>
  );
}

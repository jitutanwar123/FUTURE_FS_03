"use client";

import { useState } from 'react';
import { Search, Filter, Star, Clock, Truck, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

const restaurants = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.8,
    reviewCount: 1250,
    deliveryTime: "25-30 min",
    deliveryFee: "$2.99",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    promo: "Free delivery",
    distance: "0.8 km",
    popular: true
  },
  {
    id: 2,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.6,
    reviewCount: 890,
    deliveryTime: "30-35 min",
    deliveryFee: "$1.99",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    promo: "20% off",
    distance: "1.2 km",
    popular: false
  },
  {
    id: 3,
    name: "Tokyo Express",
    cuisine: "Japanese",
    rating: 4.9,
    reviewCount: 2100,
    deliveryTime: "20-25 min",
    deliveryFee: "$3.49",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600",
    promo: "New",
    distance: "0.5 km",
    popular: true
  },
  {
    id: 4,
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.5,
    reviewCount: 567,
    deliveryTime: "15-20 min",
    deliveryFee: "$2.49",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
    promo: "Buy 1 Get 1",
    distance: "1.8 km",
    popular: false
  },
  {
    id: 5,
    name: "Mediterranean Delight",
    cuisine: "Mediterranean",
    rating: 4.7,
    reviewCount: 734,
    deliveryTime: "35-40 min",
    deliveryFee: "$2.99",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    promo: "15% off",
    distance: "2.1 km",
    popular: false
  },
  {
    id: 6,
    name: "Dragon Palace",
    cuisine: "Chinese",
    rating: 4.4,
    reviewCount: 456,
    deliveryTime: "25-30 min",
    deliveryFee: "$1.99",
    image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600",
    promo: "Free delivery",
    distance: "1.5 km",
    popular: true
  }
];

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [filterBy, setFilterBy] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Zomato</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
                <Link href="/restaurants" className="text-orange-500 font-medium">Restaurants</Link>
                <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="hidden sm:flex">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-orange-500 hover:bg-orange-600">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for restaurants, cuisines, or dishes"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="delivery-time">Delivery Time</SelectItem>
                  <SelectItem value="cost">Cost: Low to High</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-48 h-12">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Restaurants</SelectItem>
                  <SelectItem value="pure-veg">Pure Veg</SelectItem>
                  <SelectItem value="non-veg">Non Veg</SelectItem>
                  <SelectItem value="fast-delivery">Fast Delivery</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="h-12 px-6">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="flex items-center space-x-2 mb-8 text-gray-600">
          <MapPin className="w-5 h-5 text-orange-500" />
          <span>Showing restaurants in New York, NY</span>
          <Button variant="link" className="text-orange-500 p-0 h-auto">Change location</Button>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Restaurants near you ({restaurants.length} results)
          </h1>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-600">Found {restaurants.length} restaurants</span>
          </div>
        </div>

        {/* Restaurant Cards */}
        <div className="space-y-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-64 h-48 md:h-auto">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover md:rounded-l-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                        {restaurant.promo}
                      </Badge>
                    </div>
                    {restaurant.popular && (
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-900">
                          Popular
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                        <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{restaurant.distance}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{restaurant.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500">{restaurant.reviewCount} reviews</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{restaurant.deliveryTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Truck className="w-4 h-4" />
                          <span>{restaurant.deliveryFee}</span>
                        </div>
                      </div>
                      
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        View Menu
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load more restaurants
          </Button>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ViewingPersonalityCard from './components/ViewingPersonalityCard';
import UpcomingBookingsCard from './components/UpcomingBookingsCard';
import ViewingHistorySection from './components/ViewingHistorySection';
import WishlistSection from './components/WishlistSection';
import QuickStatsGrid from './components/QuickStatsGrid';
import AIRecommendationsCard from './components/AIRecommendationsCard';
import SocialActivityFeed from './components/SocialActivityFeed';

const PersonalCinemaDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Mock data for viewing personality
  const personalityData = {
    type: "Explorer",
    description: `You're a cinematic adventurer who loves discovering hidden gems and exploring diverse genres. Your viewing patterns show a preference for thought-provoking narratives and international cinema.`,
    topGenres: ["Drama", "Thriller", "Sci-Fi", "Foreign"],
    moodPreference: "Contemplative & Engaging",
    viewingStyle: "Weekend Marathons",
    confidence: 87
  };

  // Mock data for upcoming bookings
  const upcomingBookings = [
    {
      id: 1,
      movieTitle: "Dune: Part Two",
      poster: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/DUNE2_VERT_Tsr_2764x4096_DOM_REV.jpg",
      theater: "AMC Lincoln Square",
      date: "Jul 16, 2025",
      time: "7:30 PM",
      seats: "H12, H13",
      tickets: 2,
      showtime: "2025-07-16T19:30:00",
      weather: "rainy"
    },
    {
      id: 2,
      movieTitle: "The Batman",
      poster: "https://c8.alamy.com/comp/2HJTPK0/the-batman-us-poster-clockwise-from-top-robert-pattinson-as-batman-zoe-kravitz-as-catwoman-robert-pattinson-as-bruce-wayne-colin-farrell-as-oswald-cobblepot-paul-dano-as-riddler-2022-warner-bros-courtesy-everett-collection-2HJTPK0.jpg",
      theater: "Regal Times Square",
      date: "Jul 18, 2025",
      time: "9:15 PM",
      seats: "F8",
      tickets: 1,
      showtime: "2025-07-18T21:15:00",
      weather: "sunny"
    }
  ];

  // Mock data for viewing history
  const viewingHistory = [
    {
      id: 1,
      title: "Oppenheimer",
      poster: "https://th.bing.com/th?id=OIF.fRQM058%2f3h9scTGMGAYgbQ&r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      genre: "Biography",
      year: 2023,
      userRating: 5,
      watchedDate: "2025-07-10",
      isFavorite: true,
      hasReview: true
    },
    {
      id: 2,
      title: "Spider-Man: Across the Spider-Verse",
      poster: "https://tse4.mm.bing.net/th/id/OIP.YRKsxTZOsVp22v0LsNpGJgHaLH?r=0&w=1080&h=1620&rs=1&pid=ImgDetMain&o=7&rm=3",
      genre: "Animation",
      year: 2023,
      userRating: 4,
      watchedDate: "2025-07-05",
      isFavorite: false,
      hasReview: false
    },
    {
      id: 3,
      title: "John Wick: Chapter 4",
      poster: "https://m.media-amazon.com/images/I/51BTEcmsxbL._SL500_.jpg",
      genre: "Action",
      year: 2023,
      userRating: 4,
      watchedDate: "2025-06-28",
      isFavorite: true,
      hasReview: true
    },
    {
      id: 4,
      title: "Everything Everywhere All at Once",
      poster: "https://tse1.explicit.bing.net/th/id/OIP.Ojx8Tak85SQLzWKeqio9dAHaKu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      genre: "Sci-Fi",
      year: 2022,
      userRating: 5,
      watchedDate: "2025-06-20",
      isFavorite: true,
      hasReview: true
    }
  ];

  // Mock data for wishlist
  const wishlistItems = [
    {
      id: 1,
      title: "Killers of the Flower Moon",
      poster: "https://picfiles.alphacoders.com/487/487120.jpg",
      genre: "Crime Drama",
      year: 2024,
      releaseDate: "2025-08-15",
      status: "coming-soon",
      expectedRating: 8.5,
      notificationsEnabled: true
    },
    {
      id: 2,
      title: "Guardians of the Galaxy Vol. 3",
      poster: "https://tse3.mm.bing.net/th/id/OIP.4E32Anj4RLBR4T3KZGh9cgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      genre: "Action",
      year: 2024,
      releaseDate: "2025-07-20",
      status: "available",
      expectedRating: 8.0,
      notificationsEnabled: false
    },
    {
      id: 3,
      title: "The Flash",
      poster: "https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-01.jpeg?fit=1638%2C2048&quality=80&strip=info&ssl=1",
      genre: "Superhero",
      year: 2024,
      releaseDate: "2025-09-10",
      status: "pre-order",
      expectedRating: 7.5,
      notificationsEnabled: true
    }
  ];

  // Mock data for quick stats
  const quickStats = {
    moviesWatched: 127,
    moviesWatchedChange: 12,
    totalSpent: 1247,
    totalSpentChange: -5,
    favoriteGenre: "Drama",
    favoriteGenrePercentage: 35,
    avgRating: 4.2,
    totalReviews: 89,
    upcomingBookings: 2,
    nextBookingDate: "Jul 16",
    loyaltyPoints: 2450,
    loyaltyTier: "Gold"
  };

  // Mock data for AI recommendations
  const aiRecommendations = [
    {
      id: 1,
      title: "The Northman",
      poster: "https://m.media-amazon.com/images/S/pv-target-images/319a1e950a6277a3504a88112df94a1e48ddce4ec9b365635f622117cb90cafd.jpg",
      genre: "Action Drama",
      year: 2022,
      duration: "2h 17m",
      rating: 7.0,
      reviewCount: 1234,
      confidence: 92,
      description: `A young Viking prince seeks revenge against his father's killer in this epic tale of honor, betrayal, and destiny set in 10th-century Iceland.`,
      matchReasons: [
        { type: 'genre', text: 'You enjoy epic dramas', weight: 25 },
        { type: 'director', text: 'Robert Eggers directed films you rated highly', weight: 20 },
        { type: 'mood', text: 'Matches your preference for intense narratives', weight: 18 },
        { type: 'similar-users', text: 'Users with similar taste loved this', weight: 15 },
        { type: 'rating', text: 'High critical acclaim', weight: 12 },
        { type: 'trending', text: 'Popular among your demographic', weight: 10 }
      ]
    },
    {
      id: 2,
      title: "Parasite",
      poster: "https://i.etsystatic.com/23402008/r/il/0e5769/2499687838/il_1140xN.2499687838_7a06.jpg",
      genre: "Thriller",
      year: 2019,
      duration: "2h 12m",
      rating: 8.6,
      reviewCount: 2567,
      confidence: 89,
      description: `A dark comedy thriller about class conflict and social inequality that unfolds when a poor family infiltrates a wealthy household.`,
      matchReasons: [
        { type: 'genre', text: 'Perfect match for your thriller preference', weight: 30 },
        { type: 'rating', text: 'Academy Award winner', weight: 25 },
        { type: 'mood', text: 'Thought-provoking content you enjoy', weight: 20 },
        { type: 'similar-users', text: 'Highly rated by users like you', weight: 15 },
        { type: 'director', text: 'Bong Joon-ho\'s acclaimed direction', weight: 10 }
      ]
    }
  ];

  // Mock data for social activities
  const socialActivities = [
    {
      id: 1,
      type: 'review',
      user: {
        name: 'Iyapan S P',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      content: 'Just watched "Oppenheimer" and it was absolutely mind-blowing! Nolan\'s direction is phenomenal.',
      movie: {
        title: 'Oppenheimer',
        poster: 'https://th.bing.com/th?id=OIF.fRQM058%2f3h9scTGMGAYgbQ&r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        year: 2023,
        genre: 'Biography'
      },
      rating: 5,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      type: 'booking',
      user: {
        name: 'Akashay',
        avatar: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/DUNE2_VERT_Tsr_2764x4096_DOM_REV.jpg'
      },
      content: 'Booked tickets for "Dune: Part Two" this weekend. Can\'t wait!',
      movie: {
        title: 'Dune: Part Two',
        poster: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/DUNE2_VERT_Tsr_2764x4096_DOM_REV.jpg',
        year: 2024,
        genre: 'Sci-Fi'
      },
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      likes: 8,
      comments: 1
    },
    // my portfolio take the image
    {
      id: 3,
      type: 'recommendation',
      user: {
        name: 'Ajith kumar',
        avatar: './assets/images/tak.jpg'
      },
      content: 'Highly recommend "Everything Everywhere All at Once" - it\'s a masterpiece of creativity!',
      movie: {
        title: 'Everything Everywhere All at Once',
        poster: 'https://tse1.explicit.bing.net/th/id/OIP.Ojx8Tak85SQLzWKeqio9dAHaKu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        year: 2022,
        genre: 'Sci-Fi'
      },
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      likes: 15,
      comments: 5
    }
  ];

  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'history', label: 'History', icon: 'History' },
    { id: 'wishlist', label: 'Wishlist', icon: 'Bookmark' },
    { id: 'social', label: 'Social', icon: 'Users' }
  ];

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {getGreeting()}, Abanee! 👋
                </h1>
                <p className="text-white/80 text-lg">
                  Welcome to your personal cinema command center
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/ai-insights-preferences">
                  <Button variant="outline" iconName="Settings" iconPosition="left">
                    AI Preferences
                  </Button>
                </Link>
                <Link to="/immersive-booking-interface">
                  <Button variant="default" iconName="Plus" iconPosition="left">
                    Book Movie
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabOptions.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-accent text-accent' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Quick Stats */}
                <QuickStatsGrid stats={quickStats} />

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="lg:col-span-2 space-y-8">
                    <ViewingPersonalityCard personalityData={personalityData} />
                    <UpcomingBookingsCard bookings={upcomingBookings} />
                    <AIRecommendationsCard recommendations={aiRecommendations} />
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <SocialActivityFeed activities={socialActivities} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <ViewingHistorySection viewingHistory={viewingHistory} />
            )}

            {activeTab === 'wishlist' && (
              <WishlistSection wishlistItems={wishlistItems} />
            )}

            {activeTab === 'social' && (
              <div className="max-w-4xl mx-auto">
                <SocialActivityFeed activities={socialActivities} />
              </div>
            )}
          </div>
        </section>

        {/* Quick Actions Footer */}
        <section className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Ready for your next movie?</h3>
                <p className="text-muted-foreground">Discover new films or book tickets for upcoming shows</p>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/intelligent-movie-catalog">
                  <Button variant="outline" iconName="Search" iconPosition="left">
                    Browse Movies
                  </Button>
                </Link>
                <Link to="/immersive-booking-interface">
                  <Button variant="default" iconName="Ticket" iconPosition="left">
                    Book Tickets
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Film" size={24} color="var(--color-accent)" />
              <span className="text-xl font-bold font-accent">CineAI</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <Link to="/support-trust-center" className="hover:text-white transition-colors">
                Support
              </Link>
              <span>© {new Date().getFullYear()} CineAI. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalCinemaDashboard;
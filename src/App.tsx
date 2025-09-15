import React, { useState } from 'react';
import SearchPage from './components/SearchPage';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Search, 
  Heart, 
  Zap,
  Users,
  Target,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ShoppingBag,
  Eye,
  DollarSign
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'search'>('landing');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (currentPage === 'search') {
    return <SearchPage userName="Alex" />;
  }

  const benefits = [
    {
      icon: Eye,
      title: "Unified Interface",
      description: "All reviews. All prices. One place. Make decisions in seconds, not hours!",
      bgColor: "bg-gradient-to-br from-[#E45A92] to-[#FFACAC]"
    },
    {
      icon: Zap,
      title: "Minimalist UX",
      description: "Zero clutter. Lightning-fast. Get what you need—instantly, every time.",
      bgColor: "bg-gradient-to-br from-[#5D2F77] to-[#E45A92]"
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Recommendations that fit YOUR needs, budget, and preferences.",
      bgColor: "bg-gradient-to-br from-[#3E1E68] to-[#5D2F77]"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Tell us your shopper style",
      description: "Share your preferences, budget, and shopping priorities",
      icon: Users
    },
    {
      step: "2", 
      title: "Search any product",
      description: "Browse through thousands of products across all categories",
      icon: Search
    },
    {
      step: "3",
      title: "Get instant insights",
      description: "Receive reviews, prices and personalized recommendations instantly",
      icon: Zap
    }
  ];

  const testimonials = [
    {
      text: "Finally, an app that knows what I want. WisePick's recommendations actually match my budget and needs—shopping has never been this easy!",
      author: "Krishna",
      role: "Budget Buyer",
      avatar: "K",
      bgColor: "bg-[#E45A92]"
    },
    {
      text: "Most shopping apps overwhelm me, but WisePick's clean design is a breath of fresh air. I see what matters instantly, and the personalized picks always fit my style!",
      author: "Sneha P.",
      role: "Fashion Shopper", 
      avatar: "S",
      bgColor: "bg-[#5D2F77]"
    },
    {
      text: "The AI summaries are a game changer. In seconds, I know the key pros and cons, so I can shop confidently without second guessing.",
      author: "Rahul K.",
      role: "Busy Professional",
      avatar: "R", 
      bgColor: "bg-[#3E1E68]"
    }
  ];

  const faqs = [
    {
      question: "Is WisePick free to use?",
      answer: "Yes! The core features of WisePick, including product comparisons, reviews, and recommendations, are completely free for all users."
    },
    {
      question: "How are recommendations tailored to my preferences?",
      answer: "WisePick learns your buyer style and past choices to suggest products that best fit your needs, whether you're budget-focused, premium, or eco-conscious."
    },
    {
      question: "Can I compare prices and reviews for any type of product?",
      answer: "Absolutely! WisePick supports a wide range of categories like electronics, clothing, accessories, and more—all in one app."
    },
    {
      question: "What makes WisePick different from other review or shopping apps?",
      answer: "WisePick unifies reviews and prices in a single, clutter-free interface and delivers personalized, AI-powered insights—so every shopper finds what's right for them instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Aptos',system-ui,sans-serif]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-[#3E1E68]" />
              <span className="ml-2 text-xl font-bold text-[#3E1E68]">WisePick</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#benefits" className="text-gray-600 hover:text-[#3E1E68] px-3 py-2 rounded-md text-sm font-medium transition-colors">Benefits</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-[#3E1E68] px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
                <a href="#testimonials" className="text-gray-600 hover:text-[#3E1E68] px-3 py-2 rounded-md text-sm font-medium transition-colors">Reviews</a>
                <a href="#faq" className="text-gray-600 hover:text-[#3E1E68] px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
                <button 
                  onClick={() => setCurrentPage('search')}
                  className="bg-gradient-to-r from-[#E45A92] to-[#FFACAC] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Buy Smart
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-[#3E1E68]"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#benefits" className="text-gray-600 hover:text-[#3E1E68] block px-3 py-2 rounded-md text-base font-medium">Benefits</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-[#3E1E68] block px-3 py-2 rounded-md text-base font-medium">How It Works</a>
                <a href="#testimonials" className="text-gray-600 hover:text-[#3E1E68] block px-3 py-2 rounded-md text-base font-medium">Reviews</a>
                <a href="#faq" className="text-gray-600 hover:text-[#3E1E68] block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
                <button 
                  onClick={() => setCurrentPage('search')}
                  className="w-full bg-gradient-to-r from-[#E45A92] to-[#FFACAC] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold mt-2"
                >
                  Buy Smart
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-[#FFACAC]/10 to-[#E45A92]/10 py-20 overflow-hidden">
        {/* Scattered Product Images */}
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Fashion" className="absolute top-10 left-10 w-20 h-20 object-cover rounded-lg transform rotate-12" />
          <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Electronics" className="absolute top-20 right-20 w-24 h-24 object-cover rounded-lg transform -rotate-6" />
          <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Accessories" className="absolute bottom-20 left-20 w-16 h-16 object-cover rounded-lg transform rotate-45" />
          <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Beauty" className="absolute bottom-32 right-16 w-20 h-20 object-cover rounded-lg transform -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#3E1E68] mb-6 leading-tight">
              WisePick
              <span className="block text-xl md:text-2xl text-[#E45A92]">See Reviews. See Prices. Decide Smarter.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5D2F77] mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
              Smart decisions, simplified for every buyer to shop smarter.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Easily compare reviews, prices and get personalized recommendations in one app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('search')}
                className="bg-gradient-to-r from-[#E45A92] to-[#FFACAC] text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Buy Smart
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-[#3E1E68] text-[#3E1E68] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#3E1E68] hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E1E68] mb-4">
              Why Choose WisePick?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to make smarter shopping decisions, all in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`group ${benefit.bgColor} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white`}>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="leading-relaxed opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Product Images in Benefits */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60">
            <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Fashion" className="w-full h-32 object-cover rounded-lg" />
            <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Electronics" className="w-full h-32 object-cover rounded-lg" />
            <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Accessories" className="w-full h-32 object-cover rounded-lg" />
            <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Beauty" className="w-full h-32 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#FFACAC]/10 to-[#E45A92]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E1E68] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to smarter shopping decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#3E1E68] to-[#5D2F77] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="bg-[#E45A92] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#3E1E68] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E1E68] mb-4">
              What Shoppers Say About WisePick
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from smart shoppers who transformed their buying decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#E45A92] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className={`${testimonial.bgColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#3E1E68]">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-[#3E1E68]/5 to-[#5D2F77]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E1E68] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about WisePick
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#FFACAC]/10 transition-colors rounded-xl"
                >
                  <span className="font-bold text-[#3E1E68] text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#E45A92]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#E45A92]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3E1E68] via-[#5D2F77] to-[#E45A92]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Shop Smarter?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of smart shoppers who make better decisions with WisePick
          </p>
          <button 
            onClick={() => setCurrentPage('search')}
            className="bg-gradient-to-r from-[#FFACAC] to-[#E45A92] text-[#3E1E68] px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Buy Smart - It's Free!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E1E68] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-[#E45A92]" />
                <span className="ml-2 text-xl font-bold">WisePick</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                WisePick — Shop smarter, every time.
              </p>
              <p className="text-gray-400 text-sm">
                Smart decisions, simplified for every buyer to shop smarter.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#E45A92] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#E45A92] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#E45A92] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#E45A92] transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#E45A92] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#E45A92] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#E45A92] transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#5D2F77] mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 WisePick. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
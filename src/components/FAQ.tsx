import { Faq5 } from "@/components/ui/faq-5";
import type { FaqItem } from "@/components/ui/faq-5";
import { Button } from "@/components/ui/button";

const smartMartFaqs: FaqItem[] = [
  {
    question: "How does SmartMart connect to Walmart's inventory?",
    answer: "SmartMart uses Walmart's official APIs to access real-time inventory data from stores and warehouses near you. This ensures you always see accurate stock levels and pricing before making your trip or placing an order."
  },
  {
    question: "How personalized are the recommendations?",
    answer: "Our AI analyzes your purchase history, preferences quiz responses, browsing behavior, and shopping patterns to provide highly tailored recommendations. The more you use SmartMart, the better it gets at understanding your needs."
  },
  {
    question: "Can I use the chatbot to manage my entire shopping experience?",
    answer: "Absolutely! Our AI assistant can help you find products, compare options within your budget, check availability, add items to your cart, and even help you choose between pickup and delivery options."
  },
  {
    question: "Is my personal data and shopping information secure?",
    answer: "Yes, we use enterprise-grade encryption and follow strict privacy standards. Your data is never shared with third parties, and you have full control over your information and privacy settings."
  },
  {
    question: "How much does SmartMart cost?",
    answer: "SmartMart is completely free to use! We earn a small commission from Walmart when you make purchases through our platform, but this never affects the prices you pay."
  },
  {
    question: "Do I need a separate account or can I use my existing Walmart account?",
    answer: "You can link your existing Walmart account for seamless integration, or create a new SmartMart account. Either way, you'll have access to all your purchase history and preferences."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
          
          {/* Main content container */}
          <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 md:p-8 lg:p-12">
            <Faq5 
              badge="FAQ"
              heading="Frequently Asked Questions"
              description="Everything you need to know about SmartMart's AI-powered shopping experience"
              faqs={smartMartFaqs}
            />
          </div>
        </div>

        {/* Contact support section */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            Still have questions? We're here to help!
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 bg-transparent text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 px-8 py-3 h-auto font-medium text-sm md:text-base"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

'use client';

import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { HelpCircle, ChevronDown, PhoneCall, Mail, MapPin, Search } from 'lucide-react';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'eligibility' | 'repayment' | 'security'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'eligibility',
      question: 'What documents do I need to apply for a loan?',
      answer:
        'You need a valid government-issued ID (NIN, Voter Card, or Passport), 3 to 6 months bank statements, proof of employment or business registration (CAC), and your Bank Verification Number (BVN).',
    },
    {
      category: 'eligibility',
      question: 'How fast is the loan assessment and disbursement process?',
      answer:
        'Once all required verification documents are uploaded, our automated underwriting engine reviews applications within 24 hours. Approved funds are transferred directly to your bank account.',
    },
    {
      category: 'repayment',
      question: 'How do I make loan repayments?',
      answer:
        'Repayments can be made via automated bank transfer to your dedicated virtual account number provided in your dashboard, direct debit mandate, or physically at our Maitama office.',
    },
    {
      category: 'repayment',
      question: 'Are there penalties for early loan liquidation?',
      answer:
        'No. We encourage early liquidation! There are zero penalty fees for settling your facility ahead of the agreed tenure maturity.',
    },
    {
      category: 'security',
      question: 'Why is my BVN required during application?',
      answer:
        'Your BVN is required strictly for identity verification and credit history assessment in compliance with CBN regulations. It does not grant us access to your bank accounts.',
    },
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div>
        <Header />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4 border border-blue-100">
              <HelpCircle className="w-3.5 h-3.5" /> Customer Help Center
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Frequently Asked Questions</h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Everything you need to know about our credit facilities, repayments, and security protocols.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-md mb-8 flex items-center gap-2">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., BVN, early liquidation, documents)..."
              className="w-full py-2 px-2 text-xs sm:text-sm bg-transparent border-none focus:outline-none font-medium"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 text-xs font-bold">
            {(['all', 'eligibility', 'repayment', 'security'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl capitalize transition ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-16">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 grid md:grid-cols-3 gap-6 shadow-xl">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Customer Care</p>
                <p className="text-xs font-bold mt-0.5">+234 907 821 6588</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Email Support</p>
                <p className="text-xs font-bold mt-0.5">info@irvinglobal.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Physical Support</p>
                <p className="text-xs font-bold mt-0.5">Maitama HQ, Abuja</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
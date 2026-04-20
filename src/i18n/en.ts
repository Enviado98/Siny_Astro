import type { HomeTranslations } from './es';

export const en: HomeTranslations = {
  // Meta
  title: 'Tax & Accounting Services Las Vegas | Bilingual CPA Near You',
  description: 'Professional tax and accounting services in Las Vegas for the Latino community. Tax preparation, bookkeeping, LLC formation and more. English and Spanish-speaking staff available.',

  // Hero
  hero: {
    eyebrow: 'Bilingual Accounting Firm · Las Vegas, NV',
    h1a: 'Professional',
    h1span: 'Tax & Accounting',
    h1b: 'Services in Las Vegas',
    p: 'Personalized service in English and Spanish for individuals, families, and businesses. No hidden fees, no surprises — real results.',
    cta1: 'Call Now',
    cta2: 'WhatsApp',
    badge1: '239+ Projects Completed',
    badge2: '24/7 Bilingual Support',
    badge3: '10+ Years of Experience',
  },

  // Services
  services: {
    eyebrow: 'What We Do',
    h2: 'Our Tax & Accounting Expertise',
    p: 'Complete solutions for your tax and financial situation, explained in your language.',
    cta: 'View All Services',
    ctaHref: '/en/services',
    items: [
      { title: 'Tax Preparation', p: 'Personal and business taxes: 1040, LLC, S-Corp, C-Corp. We maximize your refund legally.', href: '/en/taxes' },
      { title: 'Bookkeeping', p: 'Monthly reconciliation, accounting records and clear financial statements for your business.', href: '/en/services' },
      { title: 'Payroll Services', p: 'Payroll processing, W-2, 1099, direct deposit and federal/state tax compliance.', href: '/en/services' },
      { title: 'LLC Formation', p: 'We help you form your LLC correctly, including EIN, operating agreement and state compliance.', href: '/en/services' },
      { title: 'IRS Letters & Audits', p: 'Response and representation for IRS letters, audits and tax compliance support.', href: '/en/services' },
      { title: 'Web Design & E-Commerce', p: 'Free 1-page website when you create an LLC or hire our services. Hosting included.', href: '/en/services' },
    ],
    learnMore: 'Learn more →',
  },

  // Stats
  stats: [
    { number: '239+', label: 'Projects Completed', target: 239, suffix: '+' },
    { number: '24/7', label: 'Bilingual Support' },
    { number: '10+',  label: 'Years of Experience', target: 10, suffix: '+' },
    { number: '100%', label: 'Personalized Service' },
  ],

  // Mission
  mission: {
    eyebrow: 'Our Mission',
    h2: 'What We Believe',
    p1: 'Our mission is to support individuals and businesses by providing personalized accounting solutions, strategic financial advice, and a close,',
    p1highlight: 'client-focused approach.',
    p2: 'We believe in the value of working face to face to build long-term trust relationships, while educating our clients about taxes, accounting, and financial planning.',
    points: [
      { title: 'Total Clarity', p: 'No fine print, no surprises. We explain everything in your language.' },
      { title: 'Trust & Honesty', p: 'Two decades of service to the Latino community in Las Vegas.' },
      { title: 'Human Service', p: 'We don\'t just work with numbers. We work with people.' },
    ],
    cta: 'Meet the Team',
    ctaHref: '/en/about',
    imgAlt: 'Guzman Tax Accounting Team',
  },

  // Pricing
  pricing: {
    eyebrow: 'Transparent Pricing',
    h2: 'Services with Clear Pricing and No Surprises',
    p: 'Quote with tax and accounting experts. No hidden fees.',
    badge: 'Most Popular',
    plans: [
      {
        title: 'Individual / Family',
        price: 'From $150',
        note: 'Per return',
        features: ['Federal 1040 + State', 'W-2, 1099, interest income', 'Tax credits (EITC, CTC)', 'Prior year review', 'Bilingual service'],
        cta: 'Free Consultation',
        ctaHref: '/en/free-consultation',
        featured: false,
      },
      {
        title: 'Business / LLC',
        price: 'From $350',
        note: 'Per annual filing',
        features: ['LLC, S-Corp, C-Corp', 'Schedule C / Schedule E', 'Monthly bookkeeping', 'Payroll services', 'Strategic tax planning', 'IRS support'],
        cta: 'Free Consultation',
        ctaHref: '/en/free-consultation',
        featured: true,
      },
      {
        title: 'Virtual CPA',
        price: 'Custom',
        note: 'Monthly support',
        features: ['Virtual CFO for your business', 'Annual tax planning', 'Monthly financial reports', 'Retirement strategies (401k, IRA)', 'Priority service'],
        cta: 'Contact Us',
        ctaHref: '/en/free-consultation',
        featured: false,
      },
    ],
  },

  // Testimonials
  testimonials: {
    eyebrow: 'Reviews',
    h2: 'What Our Las Vegas Clients Say',
    p: 'Verified Google reviews from real clients.',
    verifiedLabel: 'Verified client · Google',
    items: [
      { initials: 'MR', name: 'Mitchell Rhoads', text: 'They helped me out with an issue with my taxes where I had two W-2s with the same info and it was a mistake from payroll. They fixed the issue and contacted the IRS for me. I didn\'t have to worry anymore about getting to pay extra taxes. Thanks for the help!' },
      { initials: 'CA', name: 'Carlos Avirón', text: 'Excellent service. They helped me with my business taxes in a very professional way. Everything clear, no surprises. 100% recommended for the Latino community in Las Vegas.' },
      { initials: 'JP', name: 'Jose Perez', text: 'Great service, they explained everything and helped me maximize my refund. I will definitely come back next year.' },
      { initials: 'KB', name: 'Karen Blandón', text: 'They helped me with my ITIN and tax filing as an undocumented person. They were very professional and discreet. Thank you Karen!' },
      { initials: 'PT', name: 'Pedro Torres', text: 'Pedro was very kind and helpful. He explained the entire LLC formation process and helped me with the first business taxes. Highly recommended.' },
      { initials: 'AM', name: 'Ana Martínez', text: 'I had been afraid to file my taxes for years. Guzman Tax explained everything patiently, without judgment. Now I have peace of mind. Thank you so much.' },
    ],
  },

  // Blog
  blog: {
    eyebrow: 'Tax Blog',
    h2: 'IRS News & Updates Explained Simply',
    cta: 'View All Articles',
    ctaHref: '/en/blog',
    posts: [
      { img: '/assets/child-tax-credit-2024-amount.webp', imgAlt: 'Child Tax Credit 2024', tag: 'Tax Credits', title: 'How Much Is the Child Tax Credit for 2024?', p: 'Tax season is just around the corner. If you\'re a parent or guardian, you might qualify for the Child Tax Credit...', href: '/en/child-tax-credit-2024', year: '2024', min: '4' },
      { img: '/assets/taxes-banner.webp', imgAlt: 'Tax Preparation 2026', tag: 'Taxes 2026', title: 'Tax Preparation 2026 for the Latino Community', p: 'Tax season has started. Everything you need to know to file correctly this year...', href: '/en/tax-preparation-2026', year: '2025', min: '6' },
      { img: '/assets/img-19-1.webp', imgAlt: 'IRS Immigrants', tag: 'IRS News', title: 'The IRS Just Flipped the Script on Immigrants', p: 'A notable shift in IRS policy toward immigrants. What you need to know right now...', href: '/en/irs-immigrants', year: '2025', min: '5' },
    ],
  },

  // Clients
  clients: {
    eyebrow: 'Companies That Have Chosen to Work With Us',
  },

  // CTA
  cta: {
    eyebrow: 'Ready to get started?',
    h2: 'Schedule Your Free Consultation Today',
    p: 'No commitment. We explain everything you need to know about your taxes or business.',
    btn1: 'Book a Consultation',
    btn1Href: '/en/free-consultation',
    btn2: 'Call: (725) 340-6758',
  },
};

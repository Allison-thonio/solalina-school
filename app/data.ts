/* Solalina Photography School — Content Constants */

export const SCHOOL_NAME = 'Solalina Photography School'
export const TAGLINE = 'Discover. Learn. Capture.'
export const SCHOOL_DESCRIPTION =
  'A 2-week intensive photography program designed to transform your passion into skill. Learn from experienced professionals in a limited cohort.'

export const CONTACT = {
  phone: '07040227101',
  whatsapp: 'https://wa.me/2347040227101',
  email: 'Solalinastudios26@gmail.com',
  address: 'Solalina Studios, Saptex Road, Yenagoa, Bayelsa State',
  instagram: 'https://instagram.com/solalinastudios',
}

export const COURSES = [
  {
    id: 'photography-intensive-2wk',
    label: '2-Week Photography Intensive',
    price: 35000,
    currency: '₦',
    duration: '2 WEEKS',
    slots: 40,
  },
]

export const BANK_DETAILS = {
  bank: 'Moniepoint',
  accountNumber: '8162836010',
  accountName: 'Solalina studios/Moses Dickson Oruaza',
}

export const HERO_SECTION = {
  eyebrow: '2-WEEK INTENSIVE · YENAGOA, BAYELSA',
  headline: ['Discover', 'Learn', 'Capture'],
  subheadline:
    'Learn the art and science of photography from experienced professionals. Limited to 40 participants.',
  primaryCTA: 'Enroll Now',
  secondaryCTA: 'See Curriculum',
  backgroundImageDesktop: '/images/hero-desktop.jpg',
  backgroundImageMobile: '/images/hero-mobile.jpg',
}

export const STAT_STRIP = [
  { label: 'Duration', value: '2 WEEKS', detail: 'Intensive' },
  { label: 'Slots', value: '40', detail: 'Limited' },
  { label: 'Fee', value: '₦35K', detail: 'Registration' },
]

export const FOUR_PILLARS = [
  {
    id: 'learn',
    letter: 'L',
    label: 'Learn',
    icon: 'Camera',
    description: 'Master camera basics to advanced techniques',
  },
  {
    id: 'explore',
    letter: 'E',
    icon: 'Mountain',
    label: 'Explore',
    description: 'Hands-on practical sessions and field work',
  },
  {
    id: 'create',
    letter: 'C',
    icon: 'Lightbulb',
    label: 'Create',
    description: 'Develop your unique style and creative vision',
  },
  {
    id: 'grow',
    letter: 'G',
    icon: 'Users',
    label: 'Grow',
    description: 'Guidance and mentorship from professionals',
  },
]

export const GALLERY_IMAGES = [
  {
    id: 'img-1',
    frameTag: 'FRM 01A',
    src: '/images/gallery-1.jpg',
    alt: 'Creative studio portrait session with paint brushes',
  },
  {
    id: 'img-2',
    frameTag: 'FRM 02B',
    src: '/images/gallery-2.jpg',
    alt: 'Expression & emotion studio portrait session',
  },
  {
    id: 'img-3',
    frameTag: 'FRM 03C',
    src: '/images/gallery-3.jpg',
    alt: 'High-key studio silhouette portrait lighting',
  },
  {
    id: 'img-4',
    frameTag: 'FRM 04D',
    src: '/images/gallery-4.jpg',
    alt: 'Hands-on practical ring-light studio setup session',
  },
]

export const CURRICULUM = {
  heading: 'You Will Learn',
  items: [
    'Camera settings & exposure fundamentals',
    'Composition & visual storytelling',
    'Lighting — natural & artificial',
    'Portrait, landscape & street photography',
    'Photo editing & post-processing',
    'Building your professional portfolio',
  ],
  supportImage: '/images/curriculum.png',
}

export const PROGRAM_DETAILS = {
  card1: {
    label: 'Duration',
    value: '2',
    unit: 'WEEKS',
    description: 'Intensive. Practical. Transformative.',
  },
  card2: {
    label: 'Registration Fee',
    value: '₦35,000',
    description: 'Invest in your passion. Capture your future.',
  },
  icons: [
    {
      id: 'icon-1',
      icon: 'Users',
      title: 'Limited Slots',
      detail: 'Only 40 Participants',
    },
    {
      id: 'icon-2',
      icon: 'Calendar',
      title: 'Enroll Today',
      detail: 'Spots are limited',
    },
    {
      id: 'icon-3',
      icon: 'Zap',
      title: 'Open to Everyone',
      detail: 'No prior experience needed',
    },
  ],
}

export const ENROLLMENT_FORM = {
  heading: 'Reserve your spot',
  description: 'Follow the 4 simple steps below to confirm your registration for Solalina Photography School.',
  steps: [
    { step: '1', title: 'Fill Out Details', desc: 'Enter your name, phone number, email, and choose your program.' },
    { step: '2', title: 'Make Payment', desc: 'Transfer the ₦35,000 registration fee to our Moniepoint account below.' },
    { step: '3', title: 'Confirm Application', desc: 'Click "Confirm Application" below to submit your details.' },
    { step: '4', title: 'Send Payment Receipt', desc: 'You will be redirected to WhatsApp to send your payment receipt.' },
  ],
  fields: {
    course: 'What are you enrolling for?',
    name: 'Full Name',
    phone: 'Phone Number',
    email: 'Email Address',
    payment: 'Make Payment To',
  },
  placeholders: {
    name: 'Your full name',
    phone: '070...',
    email: 'you@email.com',
  },
  button: 'Confirm Application',
  successMessage: "Application recorded! Opening WhatsApp to send your payment receipt...",
  errorMessages: {
    name: 'Please enter your full name.',
    email: 'Please enter a valid email address.',
    phone: 'Please enter a valid phone number.',
    course: 'Please select what you&apos;re enrolling for.',
    submission: 'Submission failed. Please try again.',
  },
}

export const FOOTER = {
  closingCTA: 'Turn your passion into skills. Turn moments into memories.',
  copyright: '© 2026 Solalina Photography School · a Solalina Studios program',
}

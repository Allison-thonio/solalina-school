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
  backgroundImageDesktop: '/images/hero-desktop.png',
  backgroundImageMobile: '/images/hero-mobile.png',
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
    frameTag: 'FRM 07A',
    src: '/images/gallery-1.png',
    alt: 'Landscape photography in golden hour light',
  },
  {
    id: 'img-2',
    frameTag: 'FRM 12B',
    src: '/images/gallery-2.png',
    alt: 'Portrait photography with natural lighting',
  },
  {
    id: 'img-3',
    frameTag: 'FRM 18C',
    src: '/images/gallery-3.png',
    alt: 'Street photography capturing candid moments',
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
  description: 'Select a course, make payment, then upload your proof of payment below.',
  fields: {
    course: 'What are you enrolling for?',
    name: 'Full Name',
    phone: 'Phone',
    email: 'Email',
    payment: 'Make Payment To',
    proof: 'Proof of Payment',
  },
  placeholders: {
    name: 'Your name',
    phone: '+234...',
    email: 'you@email.com',
    file: 'Upload screenshot or PDF receipt (max 5MB)',
  },
  button: 'Submit Enrollment',
  successMessage: "You're in — we'll confirm your payment and slot by phone or email.",
  errorMessages: {
    name: 'Please enter your full name.',
    email: 'Please enter a valid email address.',
    phone: 'Please enter a valid phone number.',
    course: 'Please select what you&apos;re enrolling for.',
    proof: 'Please attach proof of payment.',
    fileSize: 'File too large — please attach an image or PDF under 5MB.',
    fileType: 'Please attach a JPG, PNG, WebP, or PDF file.',
    submission: 'Submission failed. Please try again.',
  },
}

export const FOOTER = {
  closingCTA: 'Turn your passion into skills. Turn moments into memories.',
  copyright: '© 2026 Solalina Photography School · a Solalina Studios program',
}

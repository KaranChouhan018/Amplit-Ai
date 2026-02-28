export const BRAND_COLORS = {
  primary: '#6594B1',
  primaryDark: '#4A7A99',
  primaryLight: '#8AB4CC',
  dark: '#0D1117',
  darkAlt: '#161B22',
  text: {
    headline: '#000000',
    body: '#000000',
    muted: '#4A4A4A',
  },
  background: {
    dark: '#0D1117',
    darkAlt: '#161B22',
    light: '#FFFFFF',
    lightAlt: '#F6F8FA',
  },
};

export const CONTACT_INFO = {
  email: 'info@amplit.ai',
  phone: '+1 (516) 957-8453',
  address: '4100 Spring Valley Rd, suite 650, Dallas TX 75244',
  calendly: 'https://calendly.com/amplit-ai/acucogn',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Product', href: '#', hasDropdown: true, children: [
    { label: 'Dentsi', href: '/dentsi' },
  ]},

  // { label: 'Contact', href: '/contact' },
];

export const IMAGES = {
  hero3d: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
  abstract1: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
  abstract2: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
  healthcare1: 'https://images.pexels.com/photos/33642018/pexels-photo-33642018.jpeg?cs=srgb&dl=pexels-davegarcia-33642018.jpg&fm=jpg',
  healthcare2: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
  dental: 'https://cdn.dribbble.com/userupload/43119007/file/original-af4c43b0c23af908d0edabac04c15127.png?resize=1024x768&vertical=center',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
};

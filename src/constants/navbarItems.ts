export type NavbarItem = {
  name: string
  to: string
}

export const navbarItems: NavbarItem[] = [
  { name: 'About JD', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Stack', to: '/stack' },
  { name: 'Contact', to: '/contact' },
]
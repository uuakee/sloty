'use client'

import { Home, Gift, Wallet, User, Megaphone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Nav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Inicio', href: '/' },
    { icon: Gift, label: 'Promoção', href: '/promocao' },
    { icon: Wallet, label: 'Depósito', href: '/deposito' },
    { icon: Megaphone, label: 'Suporte', href: '/suporte' },
    { icon: User, label: 'Perfil', href: '/perfil' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background bg-revolver-900 text-white">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full transition-colors',
              pathname === item.href
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            )}
          >
            <item.icon className={cn(
              "h-5 w-5",
              pathname === item.href ? 'text-primary' : 'text-muted-foreground'
            )} />
            <span className={cn(
              "text-xs mt-1",
              pathname === item.href ? 'font-medium' : 'font-normal'
            )}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
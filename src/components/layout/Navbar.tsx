'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'bg-[#0E0E12]/90 backdrop-blur-lg border-b border-[#2A2A36]' : 'bg-transparent'
        )}
      >
        <div className="max-w-[1320px] mx-auto px-8 md:px-12 h-16 flex items-center justify-between">
          <a href="#" className="font-display italic text-xl text-[#F2EFE8] hover:text-[#C9A96E] transition-colors">MH</a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono-dm text-[11px] text-[#9B97A0] hover:text-[#F2EFE8] transition-colors tracking-[0.14em] uppercase"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="/Marlon Haynes resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-dm text-[11px] text-[#9B97A0] hover:text-[#F2EFE8] transition-colors tracking-[0.14em] uppercase"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="font-mono-dm text-[11px] text-[#C9A96E] border border-[#C9A96E]/40 hover:border-[#C9A96E] px-5 py-2 transition-all tracking-[0.14em] uppercase"
            >
              Hire me
            </a>
          </div>

          <button className="md:hidden text-[#9B97A0] hover:text-[#F2EFE8]" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0E0E12] flex flex-col justify-center px-10"
          >
            <button onClick={() => setOpen(false)} className="absolute top-5 right-8 text-[#9B97A0]">
              <X size={22} />
            </button>
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-4xl italic text-[#F2EFE8] hover:text-[#C9A96E] transition-colors py-3"
              >
                {l.label}
              </motion.a>
            ))}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-[#2A2A36]">
              <a
                href="/Marlon Haynes resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-dm text-[11px] text-[#9B97A0] tracking-widest uppercase"
              >
                Resume
              </a>
              <a href="#contact" className="font-mono-dm text-[11px] text-[#C9A96E] tracking-widest uppercase">Hire me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
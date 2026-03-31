'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, GitBranch, Link, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

type Status = 'idle' | 'sending' | 'success' | 'error'
type FormData = { name: string; email: string; message: string }
type Errors = Partial<Record<keyof FormData, string>>

const inputBase = "w-full bg-transparent border-b border-[#2A2A36] px-0 py-4 text-sm text-[#F2EFE8] font-light placeholder:text-[#3A3835] focus:outline-none transition-colors duration-300"

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): boolean => {
    const newErrors: Errors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_email: 'webalchemistlabs@gmail.com' },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const links = [
    { label: 'GitHub', sub: 'WebAlchemistLabs', href: 'https://github.com/WebAlchemistLabs', Icon: GitBranch },
    { label: 'LinkedIn', sub: 'marlon-haynes-3bb010391', href: 'https://www.linkedin.com/in/marlon-haynes-3bb010391/', Icon: Link },
    { label: 'Email', sub: 'webalchemistlabs@gmail.com', href: 'mailto:webalchemistlabs@gmail.com', Icon: Mail },
  ]

  return (
    <section id="contact" className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36]">
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-5 mb-20">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">05 — Contact</span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              {/* Fixed: pb-2 on overflow-hidden divs prevents descender clipping on g */}
              <div className="overflow-hidden pb-2 mb-2">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-[clamp(34px,4.5vw,64px)] italic text-[#F2EFE8] leading-[1.05]"
                >
                  Let us build
                </motion.h2>
              </div>
              <div className="overflow-hidden pb-2 mb-10">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-[clamp(34px,4.5vw,64px)] leading-[1.05]"
                  style={{ color: 'rgba(242,239,232,0.2)' }}
                >
                  something great.
                </motion.h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-sm text-[#9B97A0] leading-relaxed font-light mb-12 max-w-sm">
                Actively seeking frontend, UI/UX, and full-stack roles in Canada. Have an opportunity or project? I respond within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="border border-[#2A2A36]">
                {links.map(({ label, sub, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-5 py-4 border-b border-[#2A2A36] last:border-b-0 hover:bg-[#16161C] transition-colors group"
                  >
                    <Icon size={14} className="text-[#4A4755] group-hover:text-[#C9A96E] transition-colors flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-mono-dm text-[10px] text-[#F2EFE8] tracking-wider uppercase">{label}</p>
                      <p className="font-mono-dm text-[9px] text-[#4A4755] tracking-wider mt-0.5 truncate">{sub}</p>
                    </div>
                    <ArrowRight size={12} className="text-[#4A4755] group-hover:text-[#C9A96E] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.18}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-start py-20 border border-[#2A2A36] px-10 rounded-xl"
                >
                  <CheckCircle size={28} className="text-green-400 mb-6" />
                  <h3 className="font-display text-3xl italic text-[#F2EFE8] mb-3">Message sent.</h3>
                  <p className="font-mono-dm text-[10px] text-[#4A4755] tracking-widest uppercase mb-6">I will reply within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="font-mono-dm text-[10px] text-[#C9A96E] tracking-widest uppercase hover:opacity-70 transition-opacity">
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {[
                    { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.25em] uppercase block mb-3">{field.label}</label>
                      <input
                        type={field.type} name={field.name} value={formData[field.name as keyof FormData]}
                        onChange={handleChange} placeholder={field.placeholder}
                        className={`${inputBase} ${errors[field.name as keyof FormData] ? 'border-red-500/60 focus:border-red-500' : 'focus:border-[#C9A96E]'}`}
                      />
                      {errors[field.name as keyof FormData] && (
                        <p className="font-mono-dm text-[9px] text-red-400 mt-2 tracking-wider">{errors[field.name as keyof FormData]}</p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.25em] uppercase block mb-3">Message</label>
                    <textarea
                      name="message" rows={5} value={formData.message} onChange={handleChange}
                      placeholder="Tell me about the role or project..."
                      className={`${inputBase} resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500' : 'focus:border-[#C9A96E]'}`}
                    />
                    {errors.message && <p className="font-mono-dm text-[9px] text-red-400 mt-2 tracking-wider">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ background: 'rgba(226,75,74,0.08)', border: '1px solid rgba(226,75,74,0.2)' }}>
                      <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
                      <p className="font-mono-dm text-[10px] text-red-400 tracking-wider">Failed to send. Email directly at webalchemistlabs@gmail.com</p>
                    </div>
                  )}

                  <button
                    type="submit" disabled={status === 'sending'}
                    className="group inline-flex items-center gap-3 font-mono-dm text-[11px] px-8 py-4 tracking-[0.15em] uppercase transition-all duration-300 disabled:opacity-40"
                    style={{ color: '#F2EFE8', border: '1px solid rgba(255,255,255,0.16)' }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; if (status !== 'sending') { el.style.borderColor = '#C9A96E'; el.style.color = '#C9A96E' } }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.16)'; el.style.color = '#F2EFE8' }}
                  >
                    {status === 'sending' ? (
                      <><span className="inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <>Send message <Send size={13} /></>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
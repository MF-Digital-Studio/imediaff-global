"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { useSearchParams } from "next/navigation"

// ── Fade-in variant ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

const OFFICES = [
  {
    name: "Headquarters (Istanbul)",
    address: "Fikirtepe Mah. Hizirbey Cad. No:25/C Fortis Sinanli Yeni Kadikoy, G Block, D-Entrance, Floor: 1, D:06, Kadikoy/Istanbul",
  },
  {
    name: "Innovation Hub (Istanbul)",
    address: "Ayazaga, Vadistanbul Park, Bilisim Vadisi, D:7A Block, Floor: 10, No:38, Sariyer/Istanbul",
  },
  {
    name: "Dubai Office",
    address: "Sheikh Mohammed Bin Rashid Boulevard, Downtown Dubai Foundry",
  },
  {
    name: "Global Operations (USA)",
    address: "30 N Gould St. Sheridan, WY 82801, United States of America",
  },
]

const FAQS = [
  {
    q: "Do you sign NDAs before receiving briefs?",
    a: "Absolutely. We operate under strict confidentiality protocols. Enterprise briefs and intellectual property are secured under legally binding NDAs prior to any strategy disclosure.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Strategy and creator sourcing typically span 2-3 weeks, followed by production and campaign deployment. For fast-tracked regional expansion projects, we can expedite the timeline to 14 days.",
  },
  {
    q: "Do you have a minimum campaign budget?",
    a: "Our engagements are tailored for enterprise-scale growth. We typically partner with brands looking to invest strategically in multi-market campaigns, ensuring significant ROI and algorithmic dominance.",
  },
]

export default function ContactClientPage() {
  const searchParams = useSearchParams()
  const [formType, setFormType] = useState<"brand" | "creator" | "trendyol" | "noon">("brand")
  const [showDetailedTerms, setShowDetailedTerms] = useState(false)
  
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    region: "",
    serviceInterest: "",
    hasTrendyolAccount: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    snapchat: "",
    trendyolEmail: "",
    contactEmail: "",
    followers: "",
    category: "",
    country: "",
    message: "",
    gender: "",
    telegram: "",
    botfield: "", // Honeypot spam prevention
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Listen to search params for preselection
  useEffect(() => {
    const typeParam = searchParams.get("type")
    if (typeParam === "brand" || typeParam === "creator" || typeParam === "trendyol" || typeParam === "noon") {
      setFormType(typeParam)
    }
  }, [searchParams])

  const handleFormTypeChange = (type: "brand" | "creator" | "trendyol" | "noon") => {
    setFormType(type)
    setShowDetailedTerms(false)
    setSubmitSuccess(null)
    setSubmitError(null)
    // Update URL query parameters seamlessly
    const newUrl = `${window.location.pathname}?type=${type}`
    window.history.replaceState(null, "", newUrl)
  }

  const handleScrollToForm = (type: "brand" | "creator" | "trendyol" | "noon") => {
    handleFormTypeChange(type)
    const element = document.getElementById("native-contact-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setSubmitError(null)

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formType !== "trendyol" && formType !== "creator") {
      if (!formState.email.trim() || !emailRegex.test(formState.email)) {
        setSubmitError("Please enter a valid email address.")
        setIsSubmitting(false)
        return
      }
    } else if (formType === "trendyol") {
      if (!formState.trendyolEmail.trim() || !emailRegex.test(formState.trendyolEmail)) {
        setSubmitError("Please enter a valid Trendyol e-mail address.")
        setIsSubmitting(false)
        return
      }
      if (!formState.contactEmail.trim() || !emailRegex.test(formState.contactEmail)) {
        setSubmitError("Please enter a valid Contact e-mail address.")
        setIsSubmitting(false)
        return
      }
    }

    if (formType === "brand") {
      if (!formState.name.trim()) {
        setSubmitError("Please enter your full name.")
        setIsSubmitting(false)
        return
      }
      if (!formState.companyName.trim() || !formState.website.trim() || !formState.region || !formState.serviceInterest || !formState.message.trim()) {
        setSubmitError("Please fill in all required fields.")
        setIsSubmitting(false)
        return
      }
    } else if (formType === "creator") {
      if (!formState.name.trim()) {
        setSubmitError("Please enter your first name.")
        setIsSubmitting(false)
        return
      }
      if (!formState.surname.trim()) {
        setSubmitError("Please enter your surname.")
        setIsSubmitting(false)
        return
      }
      if (!formState.phone.trim() || !formState.country.trim()) {
        setSubmitError("Please fill in all required fields.")
        setIsSubmitting(false)
        return
      }
    } else if (formType === "trendyol") {
      if (!formState.name.trim()) {
        setSubmitError("Please enter your first name.")
        setIsSubmitting(false)
        return
      }
      if (!formState.surname.trim()) {
        setSubmitError("Please enter your surname.")
        setIsSubmitting(false)
        return
      }
      if (!formState.phone.trim() || !formState.country.trim()) {
        setSubmitError("Please fill in all required fields.")
        setIsSubmitting(false)
        return
      }
    } else if (formType === "noon") {
      if (!formState.name.trim()) {
        setSubmitError("Please enter your first name.")
        setIsSubmitting(false)
        return
      }
      if (!formState.surname.trim()) {
        setSubmitError("Please enter your surname.")
        setIsSubmitting(false)
        return
      }
      if (!formState.gender) {
        setSubmitError("Please select your gender.")
        setIsSubmitting(false)
        return
      }
      if (!formState.phone.trim()) {
        setSubmitError("Please enter your contact number.")
        setIsSubmitting(false)
        return
      }
    }

    // Construct request body based on form type
    const payload = {
      formType,
      submittedAt: new Date().toISOString(),
      botfield: formState.botfield,
      ...(formType === "brand" ? {
        name: formState.name,
        email: formState.email,
        companyName: formState.companyName,
        website: formState.website,
        region: formState.region,
        serviceInterest: formState.serviceInterest,
        message: formState.message,
      } : formType === "creator" ? {
        name: formState.name,
        surname: formState.surname,
        phone: formState.phone,
        country: formState.country,
        instagram: formState.instagram,
        tiktok: formState.tiktok,
        youtube: formState.youtube,
        message: formState.message,
      } : formType === "trendyol" ? {
        name: formState.name,
        surname: formState.surname,
        email: formState.contactEmail,
        trendyolEmail: formState.trendyolEmail,
        contactEmail: formState.contactEmail,
        phone: formState.phone,
        country: formState.country,
        instagram: formState.instagram,
        snapchat: formState.snapchat,
        tiktok: formState.tiktok,
      } : {
        name: formState.name,
        surname: formState.surname,
        gender: formState.gender,
        email: formState.email,
        phone: formState.phone,
        instagram: formState.instagram,
        tiktok: formState.tiktok,
        snapchat: formState.snapchat,
        telegram: formState.telegram,
      })
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form. Please try again.")
      }

      setSubmitSuccess("Your application has been submitted successfully! Our team will review it and get in touch shortly.")
      // Reset state
      setFormState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        companyName: "",
        website: "",
        region: "",
        serviceInterest: "",
        hasTrendyolAccount: "",
        instagram: "",
        tiktok: "",
        youtube: "",
        snapchat: "",
        trendyolEmail: "",
        contactEmail: "",
        followers: "",
        category: "",
        country: "",
        message: "",
        gender: "",
        telegram: "",
        botfield: "",
      })
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message)
      } else {
        setSubmitError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = "bg-transparent border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#2563EB] transition-colors w-full"
  const selectClass = "bg-black/50 border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#2563EB] transition-colors appearance-none cursor-pointer w-full"
  const labelClass = "font-mono text-xs uppercase tracking-widest text-white/60 ml-2"

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ── SECTION 1: HERO & BRIEF INTAKE (Black) ───────────────────────── */}
      <section className="bg-black text-white pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/10 relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#2563EB]/8 to-transparent blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Info */}
            <motion.div {...fadeUp()} className="flex flex-col xl:sticky xl:top-32">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB] mb-6">/ Start a Conversation</p>
              <h1 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.04em] mb-8">
                Send your <br /> brief.
              </h1>
              <p className="max-w-md text-lg text-white/60 leading-relaxed font-sans mb-16">
                Looking to scale your brand across the MENA region or dominate global platforms? Share your objectives, and our strategic team will construct the blueprint.
              </p>

              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Direct Email</p>
                  <a href="mailto:info@imediaff.com" className="font-display text-2xl md:text-3xl font-bold tracking-tight hover:text-[#2563EB] transition-colors">
                    info@imediaff.com
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">TR Operations</p>
                    <p className="font-mono text-lg text-white/80">+90 216 606 53 59</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Global / MENA Desk</p>
                    <p className="font-mono text-lg text-white/80">+971 4 000 0000</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="https://wa.me/971545360453" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Direct Chat via WhatsApp
                    <span className="block h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div {...fadeUp(0.15)} className="w-full max-w-2xl mx-auto xl:ml-auto" id="native-contact-form">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
                {/* Subtle gradient accent on top edge */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-br from-[#2563EB] to-[#16A34A]" />
                
                {/* Dynamic Selector Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { id: "brand", label: "Brand Inquiry", desc: "For brands & agencies" },
                    { id: "creator", label: "Creator Application", desc: "For talent network" },
                    { id: "trendyol", label: "Trendyol Affiliate", desc: "TrendFam program" },
                    { id: "noon", label: "Noon Affiliate", desc: "Noon MENA program" }
                  ].map((type) => {
                    const isSelected = formType === type.id
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleFormTypeChange(type.id as any)}
                        className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-white/10 border-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.15)]"
                            : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                        }`}
                      >
                        <span className={`font-mono text-xs uppercase tracking-wider font-bold mb-1 ${
                          isSelected ? "text-[#2563EB]" : "text-white/60"
                        }`}>
                          {type.label}
                        </span>
                        <span className="text-[10px] text-white/40 font-sans leading-tight">
                          {type.desc}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* ── SHARED FIELDS: Name & Email ── */}
                  {formType !== "trendyol" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {formType === "creator" ? (
                        <>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="name-input" className={labelClass}>Name</label>
                            <input 
                              id="name-input"
                              type="text" 
                              required
                              className={inputClass}
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="surname-input" className={labelClass}>Surname</label>
                            <input 
                              id="surname-input"
                              type="text" 
                              required
                              className={inputClass}
                              value={formState.surname}
                              onChange={(e) => setFormState({ ...formState, surname: e.target.value })}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {formType === "noon" ? (
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex flex-col gap-2">
                                <label htmlFor="name-input" className={labelClass}>Name</label>
                                <input 
                                  id="name-input"
                                  type="text" 
                                  required
                                  className={inputClass}
                                  value={formState.name}
                                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                              </div>
                              <div className="flex flex-col gap-2">
                                <label htmlFor="surname-input" className={labelClass}>Surname</label>
                                <input 
                                  id="surname-input"
                                  type="text" 
                                  required
                                  className={inputClass}
                                  value={formState.surname}
                                  onChange={(e) => setFormState({ ...formState, surname: e.target.value })}
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-2">
                              <label htmlFor="name-input" className={labelClass}>Full Name</label>
                              <input 
                                id="name-input"
                                type="text" 
                                required
                                className={inputClass}
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              />
                            </div>
                          )}

                          <div className="flex flex-col gap-2">
                            <label htmlFor="email-input" className={labelClass}>
                              {formType === "brand" ? "Business Email" : "Email Address"}
                            </label>
                            <input 
                              id="email-input"
                              type="email" 
                              required
                              className={inputClass}
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* ── FOR BRANDS: Company & Website ── */}
                  {formType === "brand" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company-input" className={labelClass}>Company / Brand Name</label>
                        <input 
                          id="company-input"
                          type="text" 
                          required
                          className={inputClass}
                          value={formState.companyName}
                          onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="website-input" className={labelClass}>Website or Social Media</label>
                        <input 
                          id="website-input"
                          type="text" 
                          required
                          className={inputClass}
                          value={formState.website}
                          onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* ── FOR CREATORS: Phone & Country ── */}
                  {formType === "creator" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone-input" className={labelClass}>Phone / WhatsApp</label>
                        <input 
                          id="phone-input"
                          type="tel" 
                          required
                          className={inputClass}
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="country-input" className={labelClass}>Country</label>
                        <input 
                          id="country-input"
                          type="text" 
                          required
                          className={inputClass}
                          value={formState.country}
                          onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* ── FOR CREATORS: Instagram, TikTok, YouTube Links ── */}
                  {formType === "creator" && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="instagram-input" className={labelClass}>Instagram Link <span className="text-white/30 text-[10px]">(Optional)</span></label>
                        <input 
                          id="instagram-input"
                          type="text" 
                          placeholder="https://instagram.com/..."
                          className={`${inputClass} placeholder:text-white/20`}
                          value={formState.instagram}
                          onChange={(e) => setFormState({ ...formState, instagram: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="tiktok-input" className={labelClass}>TikTok Link <span className="text-white/30 text-[10px]">(Optional)</span></label>
                        <input 
                          id="tiktok-input"
                          type="text" 
                          placeholder="https://tiktok.com/@..."
                          className={`${inputClass} placeholder:text-white/20`}
                          value={formState.tiktok}
                          onChange={(e) => setFormState({ ...formState, tiktok: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="youtube-input" className={labelClass}>YouTube Link <span className="text-white/30 text-[10px]">(Optional)</span></label>
                        <input 
                          id="youtube-input"
                          type="text" 
                          placeholder="https://youtube.com/..."
                          className={`${inputClass} placeholder:text-white/20`}
                          value={formState.youtube}
                          onChange={(e) => setFormState({ ...formState, youtube: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* ── FOR NOON AFFILIATE PROGRAM ── */}
                  {formType === "noon" && (
                    <>
                      {/* Gender & Contact Number */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="noon-gender-input" className={labelClass}>Gender</label>
                          <select 
                            id="noon-gender-input"
                            className={selectClass}
                            value={formState.gender}
                            onChange={(e) => setFormState({ ...formState, gender: e.target.value })}
                            required
                          >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="noon-phone-input" className={labelClass}>Contact Number</label>
                          <input 
                            id="noon-phone-input"
                            type="tel" 
                            required
                            className={inputClass}
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Social Links (Instagram & TikTok) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="noon-instagram-input" className={labelClass}>Instagram Link <span className="text-white/30 text-[10px]">(Optional)</span></label>
                          <input 
                            id="noon-instagram-input"
                            type="text" 
                            placeholder="https://instagram.com/..."
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.instagram}
                            onChange={(e) => setFormState({ ...formState, instagram: e.target.value })}
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="noon-tiktok-input" className={labelClass}>TikTok Link <span className="text-white/30 text-[10px]">(Optional)</span></label>
                          <input 
                            id="noon-tiktok-input"
                            type="text" 
                            placeholder="https://tiktok.com/@..."
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.tiktok}
                            onChange={(e) => setFormState({ ...formState, tiktok: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Social Links (Snapchat & Telegram) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="noon-snapchat-input" className={labelClass}>Snapchat Link <span className="text-white/30 text-[10px]">(Optional)</span></label>
                          <input 
                            id="noon-snapchat-input"
                            type="text" 
                            placeholder="https://snapchat.com/add/..."
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.snapchat}
                            onChange={(e) => setFormState({ ...formState, snapchat: e.target.value })}
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="noon-telegram-input" className={labelClass}>Telegram Link <span className="text-white/30 text-[10px]">(Optional)</span></label>
                          <input 
                            id="noon-telegram-input"
                            type="text" 
                            placeholder="https://t.me/..."
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.telegram}
                            onChange={(e) => setFormState({ ...formState, telegram: e.target.value })}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── BRAND INQUIRY SPECIFIC: Region & Service Interest ── */}
                  {formType === "brand" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="brand-region-input" className={labelClass}>Target Region</label>
                        <select 
                          id="brand-region-input"
                          className={selectClass}
                          value={formState.region}
                          onChange={(e) => setFormState({ ...formState, region: e.target.value })}
                          required
                        >
                          <option value="" disabled>Select Region</option>
                          <option value="TR">Turkey (TR)</option>
                          <option value="Dubai">Dubai</option>
                          <option value="MENA">MENA / GCC</option>
                          <option value="Global">Global Expansion</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="service-interest-input" className={labelClass}>Service Interest</label>
                        <select 
                          id="service-interest-input"
                          className={selectClass}
                          value={formState.serviceInterest}
                          onChange={(e) => setFormState({ ...formState, serviceInterest: e.target.value })}
                          required
                        >
                          <option value="" disabled>Select Service</option>
                          <option value="Influencer Marketing">Influencer Marketing</option>
                          <option value="Talent Management">Talent Management</option>
                          <option value="Content Creation">Content Creation</option>
                          <option value="Performance Marketing">Performance Marketing</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                  )}



                  {/* ── FOR TRENDYOL INFLUENCER PROGRAM ── */}
                  {formType === "trendyol" && (
                    <>
                      {/* Before You Apply Info Card */}
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left text-sm leading-relaxed text-white/80">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[#2563EB] mb-3 font-bold">
                          Before You Apply
                        </h4>
                        <p className="font-sans mb-4 text-white/90">
                          TrendFam Gulf is open to creators based in UAE, KSA, Bahrain, Oman, Qatar, or Kuwait.
                        </p>
                        
                        <div className="mb-4">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-white/50 mb-2">Application Criteria:</p>
                          <ul className="list-disc pl-5 font-sans space-y-1 text-white/70 text-xs">
                            <li>10,000+ followers on Instagram, Snapchat, or TikTok</li>
                            <li>Organic and high engagement rate</li>
                            <li>Relevant content style</li>
                            <li>Residency in one of the eligible Gulf countries</li>
                          </ul>
                        </div>

                        <div className="mb-4">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-white/50 mb-2">Program Notes:</p>
                          <ul className="list-disc pl-5 font-sans space-y-1 text-white/70 text-xs">
                            <li>New buyer, returning buyer, and personalized code commission rules may apply.</li>
                            <li>Tax deductions and cancelled/returned order deductions may apply.</li>
                            <li>Eligible creators may receive coin rewards after their first story, based on follower count and program rules.</li>
                          </ul>
                        </div>

                        {/* Collapsible Section */}
                        <div className="border-t border-white/10 pt-3 mt-3">
                          <button
                            type="button"
                            onClick={() => setShowDetailedTerms(!showDetailedTerms)}
                            className="flex items-center justify-between w-full text-left font-mono text-[10px] uppercase tracking-wider text-white/50 hover:text-white transition-colors cursor-pointer"
                          >
                            <span>{showDetailedTerms ? "Hide Full Program Details" : "View Full Program Details"}</span>
                            <span className="text-xs transition-transform duration-300">
                              {showDetailedTerms ? "↑" : "↓"}
                            </span>
                          </button>
                          
                          {showDetailedTerms && (
                            <div className="mt-4 pt-4 border-t border-white/10 space-y-6">
                              {/* English Program Details */}
                              <div className="space-y-3 font-sans text-xs text-white/70">
                                <h5 className="font-mono text-[10px] uppercase tracking-wider text-[#2563EB] font-bold">English Details</h5>
                                <p>You are invited to be a part of TrendFam GULF Influencer Community! TrendFam program which has more than 40,000 influencers globally is now in GULF region!</p>
                                <p>It's super easy to generate revenue by sharing your favorite products with your followers. You can earn 150% commission on net earning of the products sold from your links for new buyers to Trendyol & 50% commission on net earning of the products sold from your link for returning buyers!<br />
                                <span className="text-white/40">PS: 12% of TAX and 20% of cancelled /returned orders will be deducted from all sale.</span></p>
                                <p>What's more? You will also have a personalized code to share with your followers & earn 5% commission on sale made from your code. Share your first story and get 50$+ coin based on your follower count to use at Trendyol to shop new items & share with your followers.</p>
                                <p>Please share your information below with us, we'll evaluate your application and get back to you.</p>
                              </div>

                              {/* Arabic Program Details */}
                              <div className="space-y-3 font-sans text-xs text-white/70" dir="rtl" style={{ textAlign: "right" }}>
                                <h5 className="font-mono text-[10px] uppercase tracking-wider text-[#2563EB] font-bold text-left" dir="ltr">Arabic Details</h5>
                                <p>أنت مدعو لتكون جزءًا من مجتمع ترندفام الخليج المؤثر! برنامج ترندفام الذي لديه أكثر من 40,000 المؤثرين على مستوى العالم هو الآن في منطقة الخليج!</p>
                                <p>من السهل جدًا تحقيق إيرادات من خلال مشاركة منتجاتك المفضلة مع متابعيك. يمكنك كسب عمولة 150٪ على صافي ربح المنتجات المباعة من روابطك للمشترين الجدد إلى ترينديول و 50٪ عمولة على صافي ربح المنتجات المباعة من رابطك للمشترين العائدين!<br />
                                <span className="text-white/40">ملاحظة: سيتم خصم 12٪ من الضرائب و 20٪ من الطلبات الملغاة / المرتجعة من جميع عمليات البيع.</span></p>
                                <p>ما هو أكثر من ذلك؟ سيكون لديك أيضًا رمز مخصص لمشاركته مع متابعيك وكسب عمولة 5٪ على البيع المصنوعة من الكود الخاص بك. شارك قصتك الأولى واحصل على 50$+ coin على أساس عدد أتباعك لاستخدامها في ترينديول للتسوق عناصر جديدة ومشاركتها مع متابعيك.</p>
                                <p>يرجى مشاركة المعلومات الخاصة بك أدناه معنا، وسوف نقوم بتقييم طلبك.</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Name, Surname & Trendyol Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="trendyol-name-input" className={labelClass}>Name</label>
                            <input 
                              id="trendyol-name-input"
                              type="text" 
                              required
                              className={inputClass}
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="trendyol-surname-input" className={labelClass}>Surname</label>
                            <input 
                              id="trendyol-surname-input"
                              type="text" 
                              required
                              className={inputClass}
                              value={formState.surname}
                              onChange={(e) => setFormState({ ...formState, surname: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="trendyol-email-input" className={labelClass}>Trendyol E-mail Address</label>
                          <input 
                            id="trendyol-email-input"
                            type="email" 
                            required
                            placeholder="Used for your Trendyol account"
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.trendyolEmail}
                            onChange={(e) => setFormState({ ...formState, trendyolEmail: e.target.value })}
                          />
                          <p className="text-[10px] text-white/40 mt-1">
                            (You must have an active Trendyol account registered with this e-mail to generate links)
                          </p>
                        </div>
                      </div>

                      {/* Contact Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="trendyol-contact-email-input" className={labelClass}>Contact E-mail Address</label>
                          <input 
                            id="trendyol-contact-email-input"
                            type="email" 
                            required
                            placeholder="For program communications"
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.contactEmail}
                            onChange={(e) => setFormState({ ...formState, contactEmail: e.target.value })}
                          />
                          <p className="text-[10px] text-white/40 mt-1">
                            (We recommend an active e-mail you check regularly)
                          </p>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="trendyol-phone-input" className={labelClass}>Phone Number</label>
                          <input 
                            id="trendyol-phone-input"
                            type="tel" 
                            required
                            className={inputClass}
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Country & Instagram */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="trendyol-country-input" className={labelClass}>Country</label>
                          <input 
                            id="trendyol-country-input"
                            type="text" 
                            required
                            className={inputClass}
                            value={formState.country}
                            onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="trendyol-instagram-input" className={labelClass}>Instagram Account <span className="text-white/30 text-[10px]">(Optional)</span></label>
                          <input 
                            id="trendyol-instagram-input"
                            type="text" 
                            placeholder="@username"
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.instagram}
                            onChange={(e) => setFormState({ ...formState, instagram: e.target.value })}
                          />
                          <p className="text-[10px] text-white/40 mt-1">
                            (Please enter your full Instagram handle)
                          </p>
                        </div>
                      </div>

                      {/* Snapchat & TikTok */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="trendyol-snapchat-input" className={labelClass}>Snapchat Handle <span className="text-white/30 text-[10px]">(Optional)</span></label>
                          <input 
                            id="trendyol-snapchat-input"
                            type="text" 
                            placeholder="username"
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.snapchat}
                            onChange={(e) => setFormState({ ...formState, snapchat: e.target.value })}
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="trendyol-tiktok-input" className={labelClass}>TikTok Handle <span className="text-white/30 text-[10px]">(Optional)</span></label>
                          <input 
                            id="trendyol-tiktok-input"
                            type="text" 
                            placeholder="@username"
                            className={`${inputClass} placeholder:text-white/20`}
                            value={formState.tiktok}
                            onChange={(e) => setFormState({ ...formState, tiktok: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Info Card */}
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2 overflow-hidden">
                        <div className="flex items-center gap-3 shrink-0">
                          <svg className="w-5 h-5 text-[#2563EB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs text-white/80 font-mono uppercase tracking-wider">Contact Us</span>
                        </div>
                        <a href="mailto:trendyolmena@imediaffglobal.com" className="text-xs text-[#2563EB] font-mono hover:underline break-all sm:break-normal sm:text-right">
                          trendyolmena@imediaffglobal.com
                        </a>
                      </div>
                    </>
                  )}

                  {/* ── SHARED FIELD: Message / Details ── */}
                  {formType !== "trendyol" && (
                    <div className="flex flex-col gap-2 mt-2">
                      <label htmlFor="message-input" className={labelClass}>
                        {formType === "brand" 
                          ? "Message / Campaign Brief" 
                          : formType === "creator"
                            ? "Is there anything else you would like to mention?"
                            : "Message"
                        }
                      </label>
                      <textarea 
                        id="message-input"
                        rows={5}
                        required={formType !== "creator"}
                        className="bg-transparent border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>
                  )}

                  {/* Honeypot Spam Prevention */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="botfield">Do not fill this out if you are a human:</label>
                    <input 
                      id="botfield" 
                      type="text" 
                      tabIndex={-1} 
                      value={formState.botfield}
                      onChange={(e) => setFormState({ ...formState, botfield: e.target.value })}
                    />
                  </div>

                  {submitSuccess && (
                    <div className="bg-[#16A34A]/10 border border-[#16A34A]/20 text-[#4ADE80] p-4 rounded-2xl font-sans text-sm leading-relaxed transition-all">
                      {submitSuccess}
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#F87171] p-4 rounded-2xl font-sans text-sm leading-relaxed transition-all">
                      {submitError}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#16A34A]" />
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? "Submitting Application..." : "Submit Application"}
                      {!isSubmitting && <span className="block transition-transform duration-300 group-hover:translate-x-1">→</span>}
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ── SECTION 2: GLOBAL OFFICE NETWORK (White) ───────────────────── */}
      <section className="bg-white text-black py-24 md:py-36 border-b border-gray-200 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Titles & List */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div {...fadeUp()} className="mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-4">/ Infrastructure</p>
                <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] text-black">
                  Global Office <br /> Network.
                </h2>
              </motion.div>

              <div className="flex flex-col gap-10">
                {OFFICES.map((office, i) => (
                  <motion.div key={office.name} {...fadeUp(0.1 * i)} className="group border-l-2 border-gray-200 pl-6 hover:border-[#2563EB] transition-colors">
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-[-0.02em] text-black mb-2 group-hover:text-[#2563EB] transition-colors">
                      {office.name}
                    </h3>
                    <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.1em] leading-relaxed text-gray-500 max-w-[280px]">
                      {office.address}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual / Google Map Iframe */}
            <motion.div {...fadeUp(0.2)} className="lg:col-span-7 relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6661339688463!2d29.0494488!3d40.9887019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8715bd88fbb%3A0xc665b161c56b06e8!2sFortis%20Sinanl%C4%B1%20Kad%C4%B1k%C3%B6y!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str" 
                className="w-full h-full"
                style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: PROJECT LOGISTICS (Black) ───────────────────────── */}
      <section className="bg-black text-white py-24 md:py-36 border-t border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div {...fadeUp()} className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB] font-bold mb-4">/ FAQ</p>
              <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] text-white">
                Project <br /> Logistics.
              </h2>
              <p className="mt-6 text-lg text-white/60 font-sans max-w-sm">
                Clarity and operational excellence from the first point of contact.
              </p>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <motion.div 
                  key={i} 
                  {...fadeUp(0.1 * i)}
                  className="group border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors cursor-default"
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-[-0.01em] text-white mb-4 pr-8">
                    {faq.q}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-sans text-sm md:text-base">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

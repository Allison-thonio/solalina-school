'use client'

import { useState, useRef } from 'react'
import { COURSES, BANK_DETAILS, ENROLLMENT_FORM } from '@/app/data'
import { ScrollReveal } from '../ScrollReveal'
import { SprocketDivider } from '../SprocketDivider'

export function DesktopEnrollForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [courseError, setCourseError] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Close dropdown on outside click
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId)
    setIsOpen(false)
    setCourseError(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(BANK_DETAILS.accountNumber)
      const btn = document.getElementById('copy-btn')
      if (btn) {
        btn.textContent = 'Copied'
        setTimeout(() => {
          btn.textContent = 'Copy'
        }, 1500)
      }
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!selectedCourse) {
      setCourseError(true)
      return
    }

    const formData = new FormData(e.currentTarget)
    formData.set('course', selectedCourse)

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || ENROLLMENT_FORM.errorMessages.submission)
        setIsSubmitting(false)
        return
      }

      setIsSuccess(true)
      if (formRef.current) {
        formRef.current.style.display = 'none'
      }
    } catch (err) {
      console.error('Submission error:', err)
      setError(ENROLLMENT_FORM.errorMessages.submission)
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-[#080808] py-20 px-4" id="enroll">
      <SprocketDivider />
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div
            className="border p-12"
            style={{
              borderColor: 'var(--gold-40)',
              background: 'linear-gradient(180deg, var(--gold-8), transparent)',
            }}
          >
            <h3
              className="font-serif text-3xl font-600 mb-3"
              style={{ color: 'var(--cream)' }}
            >
              {ENROLLMENT_FORM.heading}
            </h3>
            <p
              className="text-base mb-8"
              id="form-description"
              style={{ color: 'var(--cream-70)' }}
            >
              {ENROLLMENT_FORM.description}
            </p>

            {isSuccess ? (
              <div className="text-center" style={{ color: 'var(--gold)' }}>
                <p className="text-lg font-600">{ENROLLMENT_FORM.successMessage}</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" onClick={handleOutsideClick}>
                {/* Course Dropdown */}
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}>
                    {ENROLLMENT_FORM.fields.course}
                  </label>
                  <div ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full bg-transparent border-b px-0 py-2 text-left text-base transition-colors duration-200 flex items-center justify-between"
                      style={{
                        borderColor: isOpen ? 'var(--gold)' : 'var(--gold-40)',
                        color: selectedCourse ? 'var(--cream)' : 'var(--cream-35)',
                      }}
                    >
                      <span>
                        {selectedCourse
                          ? COURSES.find((c) => c.id === selectedCourse)?.label
                          : 'Select a course'}
                      </span>
                      <span
                        style={{
                          color: 'var(--gold)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        ▾
                      </span>
                    </button>

                    {/* Dropdown List */}
                    {isOpen && (
                      <div
                        className="absolute top-full left-0 right-0 mt-1 z-20"
                        style={{
                          backgroundColor: '#0d0d0d',
                          borderColor: 'var(--gold-40)',
                          border: '1px solid var(--gold-40)',
                        }}
                      >
                        {COURSES.map((course) => (
                          <button
                            key={course.id}
                            type="button"
                            onClick={() => handleCourseSelect(course.id)}
                            className="w-full text-left px-4 py-2 text-sm transition-colors duration-200 border-b last:border-b-0"
                            style={{
                              color: selectedCourse === course.id ? 'var(--gold)' : 'var(--cream)',
                              backgroundColor: selectedCourse === course.id ? 'var(--gold-15)' : 'transparent',
                              borderColor: 'rgba(245,240,232,0.06)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--gold-15)'
                            }}
                            onMouseLeave={(e) => {
                              if (selectedCourse !== course.id) {
                                e.currentTarget.style.backgroundColor = 'transparent'
                              }
                            }}
                          >
                            {course.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {courseError && (
                    <p className="text-xs mt-1" style={{ color: '#e08a6a', fontFamily: 'JetBrains Mono, monospace' }}>
                      {ENROLLMENT_FORM.errorMessages.course}
                    </p>
                  )}
                </div>

                {/* Name & Phone Row */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}>
                      {ENROLLMENT_FORM.fields.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={ENROLLMENT_FORM.placeholders.name}
                      required
                      className="w-full bg-transparent border-b text-base px-0 py-2 transition-colors duration-200"
                      style={{
                        borderColor: 'var(--gold-40)',
                        color: 'var(--cream)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--gold-40)')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}>
                      {ENROLLMENT_FORM.fields.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={ENROLLMENT_FORM.placeholders.phone}
                      required
                      className="w-full bg-transparent border-b text-base px-0 py-2 transition-colors duration-200"
                      style={{
                        borderColor: 'var(--gold-40)',
                        color: 'var(--cream)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--gold-40)')}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}>
                    {ENROLLMENT_FORM.fields.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={ENROLLMENT_FORM.placeholders.email}
                    required
                    className="w-full bg-transparent border-b text-base px-0 py-2 transition-colors duration-200"
                    style={{
                      borderColor: 'var(--gold-40)',
                      color: 'var(--cream)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--gold-40)')}
                  />
                </div>

                {/* Payment Box */}
                <div
                  className="border p-6 mt-8"
                  style={{ borderColor: 'var(--gold-40)' }}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-6"
                    style={{ color: 'var(--gold)', letterSpacing: '0.08em', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {ENROLLMENT_FORM.fields.payment}
                  </p>
                  <div
                    className="grid grid-cols-3 gap-8"
                    style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem' }}
                  >
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'var(--cream-50)' }}>
                        Bank
                      </p>
                      <p style={{ color: 'var(--cream)' }}>{BANK_DETAILS.bank}</p>
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'var(--cream-50)' }}>
                        Account Number
                      </p>
                      <div className="flex items-center gap-2">
                        <p style={{ color: 'var(--cream)' }}>{BANK_DETAILS.accountNumber}</p>
                        <button
                          type="button"
                          id="copy-btn"
                          onClick={handleCopyAccount}
                          className="text-xs tracking-wide transition-colors duration-200"
                          style={{
                            color: 'var(--gold)',
                            borderColor: 'var(--gold-40)',
                            border: '1px solid var(--gold-40)',
                            padding: '2px 8px',
                            fontSize: '0.68rem',
                            letterSpacing: '0.04em',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--gold)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--gold-40)'
                          }}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'var(--cream-50)' }}>
                        Account Name
                      </p>
                      <p style={{ color: 'var(--cream)' }}>{BANK_DETAILS.accountName}</p>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}>
                    {ENROLLMENT_FORM.fields.proof}
                  </label>
                  <label
                    className="flex items-center justify-between border px-4 py-3 cursor-pointer transition-colors duration-200"
                    style={{
                      borderColor: 'var(--gold-40)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold-40)'
                    }}
                  >
                    <span
                      className="text-sm truncate"
                      style={{ color: fileName ? 'var(--cream)' : 'var(--cream-35)' }}
                    >
                      {fileName || ENROLLMENT_FORM.placeholders.file}
                    </span>
                    <span
                      className="text-xs tracking-wide"
                      style={{ color: 'var(--gold)', letterSpacing: '0.04em' }}
                    >
                      Browse
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="proof_of_payment"
                      accept="image/*,application/pdf"
                      required
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-xs" style={{ color: '#e08a6a', fontFamily: 'JetBrains Mono, monospace' }}>
                    {error}
                  </p>
                )}

                {/* Hidden Honeypot */}
                <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 text-sm font-600 tracking-tight transition-all duration-300 mt-8"
                  style={{
                    backgroundColor: isSubmitting ? 'var(--gold)' : 'var(--gold)',
                    color: 'var(--ink)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.03em',
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.25)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {isSubmitting ? 'Sending...' : ENROLLMENT_FORM.button}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

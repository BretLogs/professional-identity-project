import { useState } from 'react'
import NavigationMenu from '@/components/NavigationMenu'
import Card from '@/components/Card'
import ShinyText from '@/components/ShinyText'
import BlurText from '@/components/BlurText'
import PillButton from '@/components/PillButton'

interface FormData {
  name: string
  birthday: string
  email: string
  scheduleDate: string
  kilograms: string
  height: string
}

export default function FormPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthday: '',
    email: '',
    scheduleDate: '',
    kilograms: '',
    height: ''
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.birthday) newErrors.birthday = 'Birthday is required'
    if (!formData.scheduleDate) newErrors.scheduleDate = 'Schedule date is required'
    if (!formData.kilograms || parseFloat(formData.kilograms) <= 0) {
      newErrors.kilograms = 'Valid weight is required'
    }
    if (!formData.height || parseFloat(formData.height) <= 0) {
      newErrors.height = 'Valid height is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      console.log('Form submitted:', formData)
      alert('Form submitted successfully! ✨')
      setFormData({
        name: '',
        birthday: '',
        email: '',
        scheduleDate: '',
        kilograms: '',
        height: ''
      })
      setErrors({})
    }
  }

  return (
    <div className="relative w-screen min-h-screen p-24 overflow-auto">
      {/* Navigation Menu */}
      <NavigationMenu />
      
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/30 via-transparent to-blue-500/30 animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-1 flex items-center justify-center min-h-screen px-4 py-24 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 drop-shadow-lg">
              <ShinyText className="inline-block" speed={3}>
                Personal Information
              </ShinyText>
            </h1>
            <p className="text-lg text-white/80 drop-shadow">
              Help us get to know you better
            </p>
          </div>

          {/* Form Card - Transparent with React Bits Card Component */}
          <Card transparent blur border>
            {/* Header */}
            <div className="px-6 sm:px-8 py-6 border-b border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 bg-clip-text text-transparent">
                <ShinyText speed={4}>Personal Details</ShinyText>
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-1">
                Fill in your information below to get started
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-8">
              <div className="space-y-7">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-base font-semibold text-white/90">
                    <BlurText delay={0}>Full Name</BlurText> <span className="text-pink-300">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-12 px-4 text-base bg-white/10 backdrop-blur-md border-2 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/30 text-white placeholder-white/40 ${
                      errors.name ? 'border-red-400' : 'border-white/20 focus:border-purple-400'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-300 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-base font-semibold text-white/90">
                    <BlurText delay={0.1}>Email Address</BlurText> <span className="text-pink-300">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full h-12 px-4 text-base bg-white/10 backdrop-blur-md border-2 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/30 text-white placeholder-white/40 ${
                      errors.email ? 'border-red-400' : 'border-white/20 focus:border-purple-400'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-300 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Birthday and Schedule Date - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Birthday */}
                  <div className="space-y-2">
                    <label htmlFor="birthday" className="block text-base font-semibold text-white/90">
                      <BlurText delay={0.2}>Birthday</BlurText> <span className="text-pink-300">*</span>
                    </label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 text-base bg-white/10 backdrop-blur-md border-2 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/30 text-white placeholder-white/40 ${
                        errors.birthday ? 'border-red-400' : 'border-white/20 focus:border-purple-400'
                      }`}
                    />
                    {errors.birthday && (
                      <p className="text-sm text-red-300 mt-1">{errors.birthday}</p>
                    )}
                  </div>

                  {/* Schedule Date */}
                  <div className="space-y-2">
                    <label htmlFor="scheduleDate" className="block text-base font-semibold text-white/90">
                      <BlurText delay={0.3}>Schedule Date</BlurText> <span className="text-pink-300">*</span>
                    </label>
                    <input
                      type="date"
                      id="scheduleDate"
                      name="scheduleDate"
                      value={formData.scheduleDate}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 text-base bg-white/10 backdrop-blur-md border-2 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/30 text-white placeholder-white/40 ${
                        errors.scheduleDate ? 'border-red-400' : 'border-white/20 focus:border-purple-400'
                      }`}
                    />
                    {errors.scheduleDate && (
                      <p className="text-sm text-red-300 mt-1">{errors.scheduleDate}</p>
                    )}
                  </div>
                </div>

                {/* Weight and Height - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Weight */}
                  <div className="space-y-2">
                    <label htmlFor="kilograms" className="block text-base font-semibold text-white/90">
                      <BlurText delay={0.4}>Weight (kg)</BlurText> <span className="text-pink-300">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="kilograms"
                        name="kilograms"
                        value={formData.kilograms}
                        onChange={handleChange}
                        step="0.1"
                        className={`w-full h-12 px-4 pr-12 text-base bg-white/10 backdrop-blur-md border-2 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/30 text-white placeholder-white/40 ${
                          errors.kilograms ? 'border-red-400' : 'border-white/20 focus:border-purple-400'
                        }`}
                        placeholder="70.0"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 font-medium text-sm">
                        kg
                      </span>
                    </div>
                    {errors.kilograms && (
                      <p className="text-sm text-red-300 mt-1">{errors.kilograms}</p>
                    )}
                  </div>

                  {/* Height */}
                  <div className="space-y-2">
                    <label htmlFor="height" className="block text-base font-semibold text-white/90">
                      <BlurText delay={0.5}>Height (cm)</BlurText> <span className="text-pink-300">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        step="0.1"
                        className={`w-full h-12 px-4 pr-12 text-base bg-white/10 backdrop-blur-md border-2 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/30 text-white placeholder-white/40 ${
                          errors.height ? 'border-red-400' : 'border-white/20 focus:border-purple-400'
                        }`}
                        placeholder="170.0"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 font-medium text-sm">
                        cm
                      </span>
                    </div>
                    {errors.height && (
                      <p className="text-sm text-red-300 mt-1">{errors.height}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button - Using Pill Button Component */}
                <div className="pt-6">
                  <PillButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Submit Information
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </PillButton>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-5 px-6">
              <div className="flex items-center justify-center gap-2 text-white/80">
                <svg className="w-4 h-4 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <p className="text-xs sm:text-sm font-medium text-center">
                  Your information is secure and confidential
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

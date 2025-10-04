import NavigationMenu from '@/components/NavigationMenu'
import LiquidEther from '@/components/LiquidEther'
import SplitText from '@/components/SplitText'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface FormData {
  name: string
  birthday: string
  email: string
  scheduleDate: string
  kilograms: string
  height: string
}

interface ApiError {
  detail: string
}

export default function FormPage() {
  const [searchParams] = useSearchParams()
  const coachId = searchParams.get('coach_id') || 'default-coach-id' // Get coach_id from URL
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthday: '',
    email: '',
    scheduleDate: '',
    kilograms: '',
    height: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.kilograms || !formData.height) {
      setErrorMessage('Please fill in all required fields: Name, Email, Weight, and Height')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      
      const response = await fetch(`${apiUrl}/api/v1/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coach_id: coachId,
          name: formData.name,
          email: formData.email,
          kilograms: parseFloat(formData.kilograms),
          height: parseFloat(formData.height),
          birthday: formData.birthday || null,
          schedule_date: formData.scheduleDate || null,
        }),
      })

      if (!response.ok) {
        const errorData: ApiError = await response.json()
        throw new Error(errorData.detail || 'Failed to submit form')
      }

      const data = await response.json()
      console.log('Form submitted successfully:', data)
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          birthday: '',
          email: '',
          scheduleDate: '',
          kilograms: '',
          height: ''
        })
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Menu */}
      <NavigationMenu />
      
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 pointer-events-none">
        <LiquidEther 
          mouseForce={20}
          cursorSize={100}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          className="pointer-events-auto"
        />
      </div>
      
      {/* Form Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-24 px-6 md:px-12"
      >
        <div className="w-full max-w-[700px] mx-auto"
        >
          {/* Animated Title */}
          <div className="mb-12 text-center">
            <SplitText 
              text="Registration Form"
              tag="h1"
              className="text-6xl font-bold text-white mb-4"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50, rotateX: -90 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.1}
            />
            <p className="text-purple-200 text-lg">Fill in your details below</p>
          </div>

          {/* Form */}
          <div className="space-y-6 backdrop-blur-lg bg-white/10 w-[700px] max-w-full p-12 rounded-2xl border border-purple-300/20 shadow-2xl mx-auto"
            style={{padding: '24px'}}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-purple-100">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
                style={{padding: '16px', marginBottom: '16px'}}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-purple-100">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
                style={{padding: '16px', marginBottom: '16px'}}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="birthday" className="block text-sm font-medium text-purple-100">
                Birthday <span className="text-purple-300/50">(optional)</span>
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                style={{padding: '16px', marginBottom: '16px'}}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="kilograms" className="block text-sm font-medium text-purple-100">
                  Weight (kg) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  id="kilograms"
                  name="kilograms"
                  value={formData.kilograms}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="70"
                  step="0.1"
                  min="0"
                  required
                  style={{padding: '16px', marginBottom: '16px'}}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="height" className="block text-sm font-medium text-purple-100">
                  Height (cm) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="170"
                  step="0.1"
                  min="0"
                  required
                  style={{padding: '16px', marginBottom: '16px'}}
                />
              </div>
            </div>

            <div className="space-y-2"
                style={{marginTop: '16px'}}
            >
              <label htmlFor="scheduleDate" className="block text-sm font-base text-purple-100">
              Please select a date when you would be available for a quick call with me. <span className="text-purple-300/50">(optional)</span>
              </label>
              <input
                type="date"
                id="scheduleDate"
                name="scheduleDate"
                value={formData.scheduleDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                style={{padding: '16px', marginBottom: '16px'}}
              />
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-100 px-4 py-3 rounded-lg">
                ✅ Registration successful! We'll be in touch soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-lg">
                ❌ {errorMessage || 'An error occurred. Please try again.'}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{padding: '16px', marginBottom: '16px', borderRadius: "100px"}}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
            
            <p className="text-center text-purple-200/70 text-sm mt-4">
              <span className="text-red-400">*</span> Required fields
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

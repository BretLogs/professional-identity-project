import NavigationMenu from '@/components/NavigationMenu'
import LiquidEther from '@/components/LiquidEther'
import SplitText from '@/components/SplitText'
import { useState } from 'react'

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

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
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
      <div className="absolute inset-0 pointer-events-auto">
        <LiquidEther 
          mouseForce={20}
          cursorSize={100}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>
      
      {/* Form Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-24 px-6 md:px-12">
        <div className="w-full max-w-[700px] mx-auto">
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
          <div className="space-y-6 backdrop-blur-lg bg-white/10 w-[700px] max-w-full p-12 rounded-2xl border border-purple-300/20 shadow-2xl mx-auto">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-purple-100">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="birthday" className="block text-sm font-medium text-purple-100">
                Birthday
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-purple-100">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="scheduleDate" className="block text-sm font-medium text-purple-100">
                Schedule Date
              </label>
              <input
                type="date"
                id="scheduleDate"
                name="scheduleDate"
                value={formData.scheduleDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="kilograms" className="block text-sm font-medium text-purple-100">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="kilograms"
                  name="kilograms"
                  value={formData.kilograms}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="70"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="height" className="block text-sm font-medium text-purple-100">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="170"
                  required
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Submit Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

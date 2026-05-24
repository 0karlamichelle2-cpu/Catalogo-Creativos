import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { VideoGallery } from '@/components/video-gallery'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoGallery />
      <Footer />
    </main>
  )
}

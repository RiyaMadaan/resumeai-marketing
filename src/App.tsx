import { Routes, Route } from 'react-router-dom'
import { MarketingPage } from '@/pages/marketing/MarketingPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

/**
 * App — the marketing site's route table.
 *
 *   /   the marketing website (public)
 *   *   404
 *
 * Everything behind a login lives in the separate ResumeAI application; the
 * CTAs here link out to it (see `data/navigation.ts`).
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

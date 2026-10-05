import { products } from './data/products'
import Header from './components/Header'
import ProductSection from './components/ProductSection'
import ShopeeCta from './components/ShopeeCta'
import TikTokSection from './components/TikTokSection'
import Footer from './components/Footer'
import EmptyState from './components/EmptyState'

export default function App() {
  const hasProducts = products.length > 0

  return (
    <div className="mx-auto w-full max-w-[860px] px-4 sm:px-6">
      <Header />

      <main>
        {hasProducts ? (
          <>
            <ProductSection products={products} />
            <ShopeeCta />
          </>
        ) : (
          <EmptyState />
        )}

        <TikTokSection />
      </main>

      <Footer />
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📷</div>
            <h3 className="text-xl font-semibold mb-2">Quality Sourcing</h3>
            <p>We source niche handloom cotton fabrics from skilled artisans across multiple states.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Vendor Network</h3>
            <p>Connect with our extensive network of 75+ vendors for diverse textile needs.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Retailer Connections</h3>
            <p>We facilitate seamless transactions between manufacturers and 100+ retailers in South India.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Market Intelligence</h3>
            <p>Gain valuable insights on market trends to stay ahead in the textile industry.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/handloom%201.jpeg" 
              alt="Handloom fabric" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Raj Marketing</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1997, Raj Marketing has established itself as a key player in the South Indian textile market. 
              We specialize in connecting textile manufacturers with retailers, focusing on high-quality cotton materials 
              and sustainable practices.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to provide a seamless connection between textile manufacturers and retailers, ensuring 
              high-quality products, fair practices, and sustainable growth for all stakeholders in the textile industry.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
const About = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#111a22] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">About Us</p></div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              BusCo is a leading manufacturer of buses, dedicated to providing innovative and sustainable transportation solutions. With a rich history spanning over 50 years, we
              have consistently delivered high-quality vehicles that meet the evolving needs of our customers and contribute to a greener future.
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our History</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Founded in 1970, BusCo began as a small workshop with a vision to revolutionize public transportation. Over the decades, we have grown into a global enterprise,
              expanding our product line and geographical reach while maintaining our commitment to excellence and customer satisfaction.
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Mission</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Our mission is to design, manufacture, and deliver buses that are safe, reliable, and environmentally friendly. We strive to enhance the passenger experience, reduce
              emissions, and support the development of sustainable urban mobility systems.
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Values</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              At BusCo, our core values guide everything we do. We are committed to integrity, innovation, quality, and customer focus. We believe in fostering a culture of
              collaboration, continuous improvement, and social responsibility.
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Client Insights</h2>
            <div className="p-4 grid grid-cols-2">
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#324d67] py-4 pr-2">
                <p className="text-[#92adc9] text-sm font-normal leading-normal">Factory Area</p>
                <p className="text-white text-sm font-normal leading-normal">500,000 sq ft</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#324d67] py-4 pl-2">
                <p className="text-[#92adc9] text-sm font-normal leading-normal">Workforce</p>
                <p className="text-white text-sm font-normal leading-normal">2,000+</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#324d67] py-4 pr-2">
                <p className="text-[#92adc9] text-sm font-normal leading-normal">Technology Used</p>
                <p className="text-white text-sm font-normal leading-normal">Advanced Robotics, AI-driven Quality Control</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#324d67] py-4 pl-2">
                <p className="text-[#92adc9] text-sm font-normal leading-normal">Annual Production Capacity</p>
                <p className="text-white text-sm font-normal leading-normal">5,000+ buses</p>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Certificates</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0yxTjC7v14BUWP4dRem5PnxoMIRcwxbDnx3TJOsUg7tzUTZSOdfif5x0n41yfcaHOxk9KxjwROz3j2M5bCUCGBXK572BS93bPxOesrLXVFkdmVxW3Y8ssiFUwXOmTm7Z0xBBtMEierk57kpkaNvhjPltz4Iyg4JWeALaYpe8V7pECeEJ7uFU9399cRRnEI6WMaUkDdvysbO5bNpfIFikovkmqOpKv-L4i1drnBWQ-3WJvt1PgdQClfR4uZUrxwl4qM37yDnaeYUhM")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDisbwhKQweXORH5T4EavsWhZlmBMB7HkEFajqPxRdYdSsjtDJNxLkS4Q1feNGlaaprgiuyLndTWbb5mCLL8n9WbMnei4bRAF9IOcym2mwoTTJ5M3Qcw043YQ2nrArkMesrVMjTziXpUMHN2P0RdO9d9hSjDmS2_Szx7EtGyhNSEV93FigGmvjEB5AYZ56nXCwJqYYTWFgsq6etO1uNmakwCdSN0TZIkVjvIfzbUKhX5tsbhjJFapnBx78X-1GiArA-HmHOqqvIyIDq")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfK7ixIV7M6gREujjJQjWrKog6me6i08kM9hZdi9yfU1YrKSuDwOvt81BMFNSwvT29rvtSTRi8Z4O4VrFVu-hxdH-NijipMTIE6x68yRSGFnTfP4eismHop1y5DD8YhOafP5aDeLq1TEUZkYfCroVci25d6kLlqK1xw9wIZ-YO00IzqCffaiuFol6njbjQVD_mraZ2UFoGFkwWBzzvDf9d0rBDs4NQ71L8zdjI02fAY7IV_enLy0UX3rOjaPYfulWxQB7u0zegTC_")' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About

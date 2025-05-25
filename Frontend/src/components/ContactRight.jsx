import React from 'react'

const ContactRight = () => {
  return (
    <div className="flex items-center justify-center p-2 md:p-4">
      <div className="bg-[#191919] text-gold p-4 md:p-6 lg:p-8 rounded-2xl w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#c17e14] mb-4 md:mb-6"
            style={{ fontFamily: "Playball, cursive" }}>
            Get in Touch
        </h1>
        
        <form className="space-y-3 md:space-y-4">
          <div className='flex flex-col gap-1 md:gap-2'>
            <label className="block text-[#c17e14]">Name</label>
            <input
              type="text"
              className="w-full p-2 md:p-3 bg-black text-white border border-yellow-500 rounded-lg focus:outline-none focus:border-yellow-400"
              placeholder="Enter your name"
            />
          </div>

          <div className='flex flex-col gap-1 md:gap-2'>
            <label className="block text-[#c17e14]">Phone</label>
            <input
              type="tel"
              className="w-full p-2 md:p-3 bg-black text-white border border-yellow-500 rounded-lg focus:outline-none focus:border-yellow-400"
              placeholder="Enter your phone number"
            />
          </div>

          <div className='flex flex-col gap-1 md:gap-2'>
            <label className="block text-[#c17e14]">Email</label>
            <input
              type="email"
              className="w-full p-2 md:p-3 bg-black text-white border border-yellow-500 rounded-lg focus:outline-none focus:border-yellow-400"
              placeholder="Enter your email"
            />
          </div>

          <div className='flex flex-col gap-1 md:gap-2'>
            <label className="block text-[#c17e14]">Message</label>
            <textarea
              rows="3"
              className="w-full p-2 md:p-3 bg-black text-white border border-yellow-500 rounded-lg focus:outline-none focus:border-yellow-400"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button className="w-full mt-3 md:mt-4 bg-yellow-500 text-black font-bold py-2 md:py-3 rounded-lg hover:bg-yellow-600 transition duration-300 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactRight
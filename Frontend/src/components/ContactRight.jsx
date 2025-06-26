import React, { useState, useEffect } from 'react';

const ContactRight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');

    // Validate form fields
    if (!formData.name.trim()) {
      setErrorMsg("Name is required!");
      setIsSubmitting(false);
      return;
    } else if (!formData.phone.trim()) {
      setErrorMsg("Phone number is required!");
      setIsSubmitting(false);
      return;
    } else if (!formData.email.trim()) {
      setErrorMsg("Please enter your email");
      setIsSubmitting(false);
      return;
    } else if (!validateEmail(formData.email)) {
      setErrorMsg("Please enter a valid email");
      setIsSubmitting(false);
      return;
    } else if (!formData.message.trim()) {
      setErrorMsg("Message is required");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://raro-professionals.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          phoneNumber: formData.phone,
          Email: formData.email,
          Message: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccessMsg(`Thank you ${formData.name}, your message has been sent successfully!`);
      
      // Clear the form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMsg("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      // Clear messages after 3 seconds
      setTimeout(() => {
        setSuccessMsg('');
        setErrorMsg('');
      }, 3000);
    }
  };

  return (
    <div className="flex items-center justify-center p-2 md:p-4">
      <div 
        className={`bg-[#191919] text-gold p-4 md:p-6 lg:p-8 rounded-2xl w-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '0.2s' }}
      >
        <h1 
          className={`text-2xl md:text-3xl font-bold text-center text-[#c17e14] mb-4 md:mb-6 transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ fontFamily: "Playball, cursive", transitionDelay: '0.4s' }}
        >
          Get in Touch
        </h1>
        
        {/* Success and Error Messages */}
        {successMsg && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg transition-all duration-300">
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg transition-all duration-300">
            {errorMsg}
          </div>
        )}

        <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
          <div 
            className={`flex flex-col gap-1 md:gap-2 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <label className="block text-[#c17e14] transition-colors duration-300 hover:text-[#d4921a]">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField('')}
              className={`w-full p-2 md:p-3 bg-black text-white border rounded-lg transition-all duration-300 ease-out transform ${
                focusedField === 'name' 
                  ? 'border-yellow-400 scale-[1.02] shadow-lg shadow-yellow-500/20' 
                  : 'border-yellow-500 hover:border-yellow-400 hover:shadow-md'
              }`}
              placeholder="Enter your name"
            />
          </div>

          <div 
            className={`flex flex-col gap-1 md:gap-2 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <label className="block text-[#c17e14] transition-colors duration-300 hover:text-[#d4921a]">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField('')}
              className={`w-full p-2 md:p-3 bg-black text-white border rounded-lg transition-all duration-300 ease-out transform ${
                focusedField === 'phone' 
                  ? 'border-yellow-400 scale-[1.02] shadow-lg shadow-yellow-500/20' 
                  : 'border-yellow-500 hover:border-yellow-400 hover:shadow-md'
              }`}
              placeholder="Enter your phone number"
            />
          </div>

          <div 
            className={`flex flex-col gap-1 md:gap-2 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <label className="block text-[#c17e14] transition-colors duration-300 hover:text-[#d4921a]">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              className={`w-full p-2 md:p-3 bg-black text-white border rounded-lg transition-all duration-300 ease-out transform ${
                focusedField === 'email' 
                  ? 'border-yellow-400 scale-[1.02] shadow-lg shadow-yellow-500/20' 
                  : 'border-yellow-500 hover:border-yellow-400 hover:shadow-md'
              }`}
              placeholder="Enter your email"
            />
          </div>

          <div 
            className={`flex flex-col gap-1 md:gap-2 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <label className="block text-[#c17e14] transition-colors duration-300 hover:text-[#d4921a]">Message</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField('')}
              className={`w-full p-2 md:p-3 bg-black text-white border rounded-lg transition-all duration-300 ease-out transform resize-none ${
                focusedField === 'message' 
                  ? 'border-yellow-400 scale-[1.02] shadow-lg shadow-yellow-500/20' 
                  : 'border-yellow-500 hover:border-yellow-400 hover:shadow-md'
              }`}
              placeholder="Write your message..."
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-3 md:mt-4 bg-yellow-500 text-black font-bold py-2 md:py-3 rounded-lg transition-all duration-300 cursor-pointer transform hover:bg-yellow-600 hover:scale-105 hover:shadow-lg active:scale-95 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            style={{ transitionDelay: '0.9s' }}
          >
            <span className="inline-block transition-transform duration-200 hover:scale-105">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactRight;
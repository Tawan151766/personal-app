"use client";

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    onSubmit?.(data);
  };

  return (
    <div>
      <h3 className="text-[#0d141c] tracking-light text-2xl lg:text-3xl font-bold leading-tight px-4 lg:px-6 text-left pb-2 pt-5 lg:pt-8">
        Get in touch
      </h3>
      <p className="text-[#0d141c] text-base lg:text-lg font-normal leading-normal pb-3 pt-1 px-4 lg:px-6 max-w-2xl">
        I'm currently seeking new opportunities and would love to hear from
        you. Whether you have a project in mind or just want to connect, feel
        free to reach out.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="flex max-w-[480px] lg:max-w-2xl flex-wrap items-end gap-4 px-4 lg:px-6 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              name="name"
              placeholder="Your Name"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-14 lg:h-16 placeholder:text-[#49739c] p-4 lg:p-5 text-base lg:text-lg font-normal leading-normal"
              required
            />
          </label>
        </div>
        
        <div className="flex max-w-[480px] lg:max-w-2xl flex-wrap items-end gap-4 px-4 lg:px-6 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-14 lg:h-16 placeholder:text-[#49739c] p-4 lg:p-5 text-base lg:text-lg font-normal leading-normal"
              required
            />
          </label>
        </div>
        
        <div className="flex max-w-[480px] lg:max-w-2xl flex-wrap items-end gap-4 px-4 lg:px-6 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none min-h-36 lg:min-h-48 placeholder:text-[#49739c] p-4 lg:p-5 text-base lg:text-lg font-normal leading-normal"
              required
            ></textarea>
          </label>
        </div>
        
        <div className="flex px-4 lg:px-6 py-3">
          <button 
            type="submit"
            className="flex min-w-[84px] max-w-[480px] lg:max-w-2xl cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 lg:h-12 px-4 lg:px-6 flex-1 bg-[#0c7ff2] text-slate-50 text-sm lg:text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Send Message</span>
          </button>
        </div>
      </form>
    </div>
  );
}

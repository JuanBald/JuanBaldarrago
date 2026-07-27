import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setStatus("sending");
    // Replace with your actual submit logic (EmailJS, API route, etc.)
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0A0E17] py-24 px-6">
      {/* ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative flex flex-col items-center gap-12 max-w-2xl mx-auto">
        {/* header */}
        <div className="flex flex-row w-full justify-center items-center">
          <div className="bg-gradient-to-r from-transparent to-[#D4AF37] w-1/4 h-px self-center mx-5" />
          <h1 className="text-5xl font-bold text-[#D4AF37] tracking-widest text-nowrap">
            CONTACT
          </h1>
          <div className="bg-gradient-to-l from-transparent to-[#D4AF37] w-1/4 h-px self-center mx-5" />
        </div>

        <p className="text-[#D4AF37]/50 text-center max-w-md -mt-6">
          Have a project in mind or just want to say hi? Send a message and
          I'll get back to you soon.
        </p>

        {/* form card */}
        <div
          className="
            w-full
            rounded-3xl
            border-4
            border-[#0A0E17]
            bg-[#D4AF37]/[0.04]
            p-6 sm:p-8
            transition-all duration-300
            hover:border-[#D4AF37]/60
            flex flex-col gap-5
          "
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-[#D4AF37]/70">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="
                bg-[#0A0E17] border border-[#D4AF37]/20 rounded-xl
                px-4 py-3 text-[#D4AF37] placeholder-[#D4AF37]/30
                outline-none transition-all duration-300
                focus:border-[#D4AF37]
              "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-[#D4AF37]/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="
                bg-[#0A0E17] border border-[#D4AF37]/20 rounded-xl
                px-4 py-3 text-[#D4AF37] placeholder-[#D4AF37]/30
                outline-none transition-all duration-300
                focus:border-[#D4AF37]
              "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-[#D4AF37]/70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you're looking for..."
              className="
                bg-[#0A0E17] border border-[#D4AF37]/20 rounded-xl
                px-4 py-3 text-[#D4AF37] placeholder-[#D4AF37]/30
                outline-none transition-all duration-300 resize-none
                focus:border-[#D4AF37]
              "
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="
              rounded-xl
              py-3
              bg-[#D4AF37]
              hover:bg-[#e8c358]
              text-[#0A0E17]
              font-semibold
              transition-all duration-300
              hover:scale-[1.02]
              disabled:opacity-60 disabled:hover:scale-100
              mt-2
            "
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent ✓"
              : "Send Message"}
          </button>
        </div>

        {/* social links */}
        <div className="flex gap-6 text-[#D4AF37]/50">
          <a
            href="juanbald87@gmail.com"
            className="hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/juan-baldarrago-a66187297/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
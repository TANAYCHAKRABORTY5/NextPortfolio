"use client";
import React, { useRef, useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import Image from "next/image";

export function BackgroundGradientDemo() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: any }) => {
    const { target } = e;
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_mzrb7hs",
        "template_kfrajk4",
        {
          from_name: form.name,
          to_name: "Tanay",
          from_email: form.email,
          to_email: "tanaywork56@gmail.com",
          message: form.message,
        },
        "9m4xA2k_0DtfHUMo9"
      )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <BackgroundGradient className="rounded-3xl bg-white dark:bg-zinc-900">
        <motion.div
          // variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#070F2B] p-8 rounded-2xl "
        >
          <div className="flex g-4 ">
            <div>
              {/* <p>Get in touch</p> */}
              <div className="flex items-center md:gap-[380px] gap-[120px] ">
                <h1 className="text-xl">Contact</h1>

                <form onSubmit={handleSubmit}>
                  <button
                    type="submit"
                    className="bg-[#090f29] p-2 md:w-[20vh]
                outline-none  text-white font-bold shadow-md shadow-indigo-500/40 rounded-xl  "
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <form
            // ref={formRef}
            onSubmit={handleSubmit}
            className="mt-1 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#FFF8F3] py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[#FFF8F3] py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-[#FFF8F3] py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
          </form>
        </motion.div>
      </BackgroundGradient>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    const hideHint = setTimeout(() => setHint(false), 6000);
    return () => {
      clearTimeout(t);
      clearTimeout(hideHint);
    };
  }, []);

  const message = encodeURIComponent(
    "Hi! I'm interested in Riksha Agency's rickshaw rental services."
  );
  const link = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-5 z-50 flex flex-row-reverse items-center gap-2 sm:bottom-8 sm:right-6"
        >
          <AnimatePresence>
            {hint && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 6 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 6 }}
                className="hidden select-none rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium text-foreground shadow-lg sm:block"
              >
                Chat with us
                <button
                  onClick={() => setHint(false)}
                  aria-label="Dismiss"
                  className="ml-2 text-muted hover:text-foreground"
                >
                  <HiX size={12} className="inline" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.5)]"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
            <motion.span
              whileHover={{ scale: 1.12, rotate: -8 }}
              whileTap={{ scale: 0.92 }}
              className="relative z-10 flex h-full w-full items-center justify-center rounded-full"
            >
              <FaWhatsapp size={28} />
            </motion.span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

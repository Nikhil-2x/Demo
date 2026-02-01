"use client";

import { useRef } from "react";
import { Bounded } from "./Bounded";
import VariableProximity from "./VariableProximity";

export function Footer() {
  const headingRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  return (
    <Bounded as="footer" className="bg-black text-white">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div className="space-y-4">
          <div
            ref={headingRef}
            className="font-black-slanted text-4xl uppercase"
          >
            <VariableProximity
              label="Nick's"
              fromFontVariationSettings="'wght' 600, 'wdth' 100"
              toFontVariationSettings="'wght' 1000, 'wdth' 125"
              containerRef={headingRef}
              radius={100}
              falloff="exponential"
            />
          </div>
          <p className="max-w-xs text-sm text-gray-400">
            Premium mechanical keyboards designed for the modern enthusiast.
            Crafted with precision and passion.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-4">
          <h3 className="font-bold-slanted text-xl uppercase">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#features"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Keyboards
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Keycaps
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Switches
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="font-bold-slanted text-xl uppercase">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h3 className="font-bold-slanted text-xl uppercase">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-gray-400 transition hover:translate-x-1 hover:text-white"
              >
                Warranty
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-800 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            © {currentYear} Nick&aposs Keyboard. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/Nikhil-2x"
              className="text-gray-400 transition hover:text-white"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500 md:justify-end">
          <a href="#" className="transition hover:text-gray-300">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="transition hover:text-gray-300">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="transition hover:text-gray-300">
            Cookie Policy
          </a>
        </div>
      </div>
    </Bounded>
  );
}

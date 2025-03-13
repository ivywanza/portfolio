import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ivy Maundu - Digital Expert</h3>
            <p className="text-foreground/60">
              I build digital solutions that drive measurable results for businesses worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-foreground/60">
              <li>Software Development</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
              <li>Video Creation</li>
              <li>WordPress Development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-foreground/60">
              <li>ivymaundu03@gmail.com</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-foreground/60">
              <li>Monday - Friday</li>
              <li>9:00 AM - 6:00 PM EAT</li>
              <li>Response within 24 hours</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center border-t pt-8">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/ivywanza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ivy-maundu-2554ba299/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            
            <a
              href="mailto:ivymaundu03@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Digital Expert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
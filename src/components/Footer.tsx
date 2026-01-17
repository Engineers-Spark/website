import { getAssetPath } from "@/utils/paths";
import { Facebook, Github, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary/90 border-t border-accent/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={getAssetPath("/favicon.png")}
                alt="Engineer's Spark"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-xl font-bold text-accent">
                Engineer's Spark
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              A Tunisian cybersecurity club founded in 2014 at ISETCOM. Our
              mission is to raise awareness about cybersecurity through events,
              workshops, and training sessions.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/EngineersSparkCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/engineers_spark_community/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Engineers-Spark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/recruitment"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:engineers.spark@edu.isetcom.tn"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">engineers.spark@edu.isetcom.tn</span>
              </a>
              <div className="text-white/70 text-sm">
                <p>ISETCOM, Tunis</p>
                <p>Tunisia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Engineer's Spark. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Made with ❤️ by the Engineer's Spark Community
          </p>
        </div>
      </div>
    </footer>
  );
}

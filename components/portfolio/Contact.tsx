import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-6 mb-12 md:mb-16">
          <p className="text-sm md:text-base font-mono text-(--brand) font-medium">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance">
            Let's build something amazing together
          </h2>
          <p className="text-lg md:text-xl text-neutral-200 leading-relaxed text-pretty max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-neutral-800 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-(--brand) rounded-lg">
                <Mail size={24} className="text-white" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-white">Email</p>
                <p className="text-neutral-200">esraa.hus93@gmail.com</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/esraa-a-43a460136"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-800 rounded-2xl p-8 hover:bg-neutral-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-(--brand) rounded-lg group-hover:scale-110 transition-transform">
                <Linkedin size={24} className="text-white" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-white">LinkedIn</p>
                <p className="text-neutral-200">
                  linkedin.com/in/esraa-a-43a460136
                </p>
              </div>
            </div>
          </a>
        </div>

       
      </div>
    </section>
  );
}

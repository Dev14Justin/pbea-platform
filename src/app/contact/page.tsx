"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the WhatsApp message
    const whatsappNumber = "22890523999";
    const text =
      `*Nouveau Message - AgriBusiness-Lab*%0A%0A` +
      `*Nom:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Objet:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-32 bg-primary overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl mb-8 leading-none">
            Contactez-nous
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Une idée, un projet ou une question ? Notre équipe est prête à vous
            accompagner dans votre transformation agricole.
          </p>
        </div>
      </section>

      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                Informations
              </h2>
              <h3 className="text-4xl font-black text-gray-900 tracking-tight mb-8">
                Restons en contact
              </h3>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-10">
                Nous sommes basés à Lomé, mais nous intervenons sur toute
                l'étendue du territoire togolais pour soutenir vos projets.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">
                    WhatsApp / Appels
                  </h4>
                  <Link
                    href="https://wa.me/22890523999"
                    target="_blank"
                    className="text-xl font-bold text-gray-900 hover:text-primary transition-colors"
                  >
                    +228 90 52 39 99
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Email Direct
                  </h4>
                  <a
                    href="mailto:contact@agribusiness-lab.tg"
                    className="text-xl font-bold text-gray-900 hover:text-primary transition-colors"
                  >
                    contact@agribusiness-lab.tg
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Bureau
                  </h4>
                  <p className="text-xl font-bold text-gray-900">Lomé, Togo</p>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hidden lg:block">
              <MessageSquare className="w-12 h-12 text-primary/20 mb-6" />
              <p className="text-gray-500 italic font-medium">
                "Notre réactivité est notre force. Nous répondons généralement
                en moins de 24h ouvrées."
              </p>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-primary/5 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label
                      htmlFor="name"
                      className="text-sm font-black uppercase tracking-widest text-gray-400"
                    >
                      Nom Complet
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom complet"
                      className="rounded-2xl border-gray-200 h-16 bg-gray-50 focus:bg-white focus:ring-primary/20 transition-all text-lg font-medium"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="text-sm font-black uppercase tracking-widest text-gray-400"
                    >
                      Adresse Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nom@exemple.com"
                      className="rounded-2xl border-gray-200 h-16 bg-gray-50 focus:bg-white focus:ring-primary/20 transition-all text-lg font-medium"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="subject"
                    className="text-sm font-black uppercase tracking-widest text-gray-400"
                  >
                    Objet du message
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Conseil stratégique, Formation, Investissement..."
                    className="rounded-2xl border-gray-200 h-16 bg-gray-50 focus:bg-white focus:ring-primary/20 transition-all text-lg font-medium"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="text-sm font-black uppercase tracking-widest text-gray-400"
                  >
                    Votre Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre besoin en quelques mots..."
                    className="rounded-3xl border-gray-200 min-h-[200px] bg-gray-50 focus:bg-white focus:ring-primary/20 transition-all text-lg font-medium p-6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-2xl h-16 sm:h-20 text-xl font-black shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                  Envoyer  <ArrowRight className="w-6 h-6" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

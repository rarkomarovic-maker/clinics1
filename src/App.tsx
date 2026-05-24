/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Calendar, MessageSquare, Activity, CheckCircle2, ChevronRight, Phone, ShieldCheck, Stethoscope } from 'lucide-react';

export default function App() {
  const integrations = [
    'StomX', 'IDENT', 'Dental4Windows', 'Dentaltap', 'Dentist Plus', 'DentalPRO', 'ClinicIQ', 'iStom'
  ];

  const chatMessages = [
    { role: 'bot', text: 'Здравствуйте! Я AI-ассистент стоматологии. Подскажу по услугам и помогу оставить заявку на прием. Что вас беспокоит?', time: '22:12' },
    { role: 'user', text: 'У меня сильная зубная боль, можно ли записаться на ближайшее окно?', time: '22:15' },
    { role: 'bot', text: 'На завтра в 08:30 есть свободное окно к дежурному терапевту. Передать вашу заявку администратору для подтверждения записи?', time: '22:15' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100 relative overflow-x-hidden">
      
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
      
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-emerald-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-teal-600 shrink-0">
            <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600 shrink-0" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">DentaBot<span className="text-teal-600">.AI</span></span>
          </div>
          <a href="https://t.me/GreyPorsche" target="_blank" rel="noopener noreferrer" className="selection:bg-teal-900 selection:text-teal-50 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-1 shrink-0 whitespace-nowrap">
            Запросить демо <ChevronRight size={16} className="shrink-0" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold mb-6 uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Умная онлайн-запись для клиники
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 break-words">
              AI-ассистент для <span className="text-teal-600">стоматологической</span> клиники
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Пациенты получают быстрый ответ и удобный диалог вместо устаревших форм записи. AI-ассистент отвечает 24/7, помогает подобрать оптимальное время и передает <b>готовые заявки</b> администраторам.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="https://t.me/GreyPorsche" target="_blank" rel="noopener noreferrer" className="selection:bg-teal-900 selection:text-teal-50 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all shadow-[0_8px_30px_rgb(13,148,136,0.3)] hover:shadow-[0_8px_30px_rgb(13,148,136,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Подключить клинику <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Right: Interactive Demo Widget */}
          <div className="relative w-full max-w-sm mx-auto lg:ml-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-blue-50 rounded-[2.5rem] blur-3xl opacity-50 -z-10"></div>
            
            <div className="bg-white border text-sm border-slate-200 rounded-3xl shadow-2xl flex flex-col h-[520px] overflow-hidden relative z-10">
              {/* Demo Header */}
              <div className="bg-teal-600 p-4 text-white flex items-center gap-3 selection:bg-teal-900 selection:text-teal-50">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner">
                  <Sparkles size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-base tracking-wide">DentaBot</div>
                  <div className="text-teal-100 text-xs font-medium mt-0.5">
                    Умный ассистент
                  </div>
                </div>
              </div>

              {/* Demo Chat Area */}
              <div className="flex-1 bg-slate-50 p-4 overflow-y-auto flex flex-col gap-4">
                <div className="text-center text-xs text-slate-400 font-medium mb-2">Сегодня</div>
                
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-teal-600 text-white rounded-br-none selection:bg-teal-900 selection:text-teal-50' 
                        : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                    }`}>
                      {msg.text}
                    </div>
                    <div className={`text-[10px] text-slate-400 mt-1 ${msg.role === 'user' ? 'mr-1' : 'ml-1'}`}>
                      {msg.time}
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo Input */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex items-center gap-2 bg-slate-50 border-2 border-slate-100 rounded-full px-4 py-2 opacity-80 cursor-default">
                  <div className="flex-1 text-sm text-slate-400 font-medium select-none">
                    Напишите сообщение...
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Integrations Full-Width Marquee */}
      <section className="border-y border-slate-200 bg-white py-12 overflow-hidden flex flex-col items-center select-none">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 text-center px-6">
          Работает вместе с вашей учетной системой:
        </p>
        <div className="relative w-full flex items-center" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: '-webkit-linear-gradient(left, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex w-max animate-marquee space-x-16 items-center text-slate-300 font-bold text-2xl sm:text-3xl">
            {[...integrations, ...integrations, ...integrations, ...integrations].map((name, i) => (
              <span key={i} className="whitespace-nowrap hover:text-teal-600 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Новый уровень сервиса на сайте</h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              AI-ассистент создает комфортную среду для ваших пациентов, мгновенно отвечая на их вопросы и помогая предварительно организовать визит через удобный диалоговый интерфейс.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 group">
              <div className="p-8 pb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-teal-500/20 group-hover:scale-110 transition-transform">
                  <Activity size={26} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">Никаких потерянных заявок 24/7</h3>
              </div>
              <div className="p-8 pt-6 mt-auto bg-slate-50 rounded-b-3xl border-t border-slate-100">
                <p className="text-slate-600 leading-relaxed font-medium">
                  До 40% пациентов ищут врача после 21:00. AI-ассистент проконсультирует пользователя ночью и сохранит контакт пациента для клиники.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group">
              <div className="p-8 pb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Calendar size={26} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">Умная работа со слотами МИС</h3>
              </div>
              <div className="p-8 pt-6 mt-auto bg-slate-50 rounded-b-3xl border-t border-slate-100">
                <p className="text-slate-600 leading-relaxed font-medium">
                  Ассистент помогает пациенту выбрать подходящее время из вашей системы (IDENT, StomX, Dental4Windows и др.) и передает администратору готовую заявку.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 group">
              <div className="p-8 pb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                  <MessageSquare size={26} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">Conversational UX</h3>
              </div>
              <div className="p-8 pt-6 mt-auto bg-slate-50 rounded-b-3xl border-t border-slate-100">
                <p className="text-slate-600 leading-relaxed font-medium">
                  Вместо скучных форм оставления контактов пациент получает живой диалог. Ассистент знает прайс, квалификацию врачей и четко ответит на вопросы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs, Autoplay } from "swiper/modules";
import { Layers, Printer, Wand2 } from "lucide-react"; // 引入圖標
// 1. 引入 Formspree 所需組件
import { useForm, ValidationError } from "@formspree/react";

// 樣式導入
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

const SERVICES = [
  {
    id: 1,
    title: "解析提升",
    full: "圖像放大",
    desc: "解決線上AI生圖像素不足問題，使用AI模型為您的作品重建精緻細節，方便印刷輸出",
    img: "./img/06.png",
  },
  {
    id: 2,
    title: "圖層拆解",
    full: "圖像分層",
    desc: "精準主體去背或背景自動補完，使用AI或人工編輯圖片拆出指定區塊，讓後期使用擁有最高彈性",
    img: "${import.meta.env.BASE_URL}img/07.png",
  },
  {
    id: 3,
    title: "內容修復",
    full: "圖像文字修復",
    desc: "對浮水印、文字扭曲、五官瑕疵等自然區域進行手工修補移除，抹除AI生成的粗糙感",
    img: "/img/08.png",
  },
  {
    id: 4,
    title: "PSD轉換",
    full: "轉換PSD檔",
    desc: "將您提供AI產出的圖或一般圖片轉存PSD格式檔案，以便後續編輯或印刷",
    img: "/img/03.png",
  },
  {
    id: 5,
    title: "圖像生成",
    full: "製作指定圖像",
    desc: "依照您的需求客製化，使用AI模型生成指定主題或風格的圖像，並進行後續修正優化",
    img: "/img/04.png",
  },
];

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const safeThumbs =
    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null;
  // 2. 在組件頂層定義 Formspree Hook
  const [state, handleSubmit] = useForm("xdabbeog");

  return (
    <div className="min-h-screen  text-[#333333] selection:bg-[#d4af37] selection:text-white antialiased">
      {/* 導覽列 */}
      <nav className="fixed top-0 w-full h-[75px] flex items-center justify-between px-[10%] bg-white/90 backdrop-blur-md z-[100] border-b border-[#f0f0f0]">
        <div className="font-bold text-[1.2rem] tracking-[3px]">
          AI <span className="text-[#d4af37]">.</span> 修復室
        </div>
      </nav>

      {/* 1. 英雄區 (Hero) */}

      <section className="h-[80vh] flex items-center justify-center text-center px-6 mt-[75px] bg-gradient-to-b from-white to-[#fafafa]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            讓 <span className="text-[#d4af37]">AI生成</span>完美接軌
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10 ">
            結合AI模型、手工修復與數位後製，修正生成邏輯瑕疵，為您的作品注入商用價值
          </p>

          <a
            href="#contact"
            className="inline-block px-12 py-4 border border-[#d4af37] text-sm tracking-widest hover:bg-[#d4af37] hover:text-white transition-all"
          >
            馬上聯絡
          </a>
        </motion.div>
      </section>

      {/* 2. 新增的：痛點區 (Z-Pattern) */}
      <section className="py-24 px-[10%]">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            為什麼您的AI生成需要專業修正？
          </h2>
          <div className="w-10 h-px bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-32">
          {/* 痛點 3 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <Wand2 className="text-[#d4af37]" size={40} />
              <h3 className="text-2xl font-bold">邏輯錯誤與 AI 生硬瑕疵</h3>
              <p className="text-slate-500 leading-relaxed">
                針對扭曲的肢體、文字或不自然的光影，透過人工介入修復，讓每一張作品都具備合理的邏輯，正常閱讀顯示
              </p>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden border border-slate-100 shadow-xl">
              <img
                src="/img/02.png"
                className="w-full h-80 object-cover"
                alt="Fix"
              />
            </div>
          </div>
          {/* 痛點 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <Layers className="text-[#d4af37]" size={40} />
              <h3 className="text-2xl font-bold">結構鎖死，缺乏編修彈性</h3>
              <p className="text-slate-500 leading-relaxed">
                線上生成AI圖輸出的扁平影像常讓後續設計印刷受阻。
                提供拆解服務，將背景與角色完整分離成各自圖層，轉換為PSD圖層供您靈活排版、送印
              </p>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden border border-slate-100 shadow-xl">
              <img
                src="/img/09.png"
                className="w-full h-80 object-cover"
                alt="PSD"
              />
            </div>
          </div>

          {/* 痛點 2 - 反向 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <Printer className="text-[#d4af37]" size={40} />
              <h3 className="text-2xl font-bold">細節崩壞，無法應付印刷</h3>
              <p className="text-slate-500 leading-relaxed">
                利用模型放大技術，確保影像放大後不模糊，滿足商業上大型印刷的高標要求
              </p>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden border border-slate-100 shadow-xl">
              <img
                src="/img/01.png"
                className="w-full h-80 object-cover"
                alt="Print"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 核心服務區 (原本正常的 Swiper) */}
      <section className="py-24 px-[10%] bg-[#fcfcfc] border-y border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">核心後製服務</h2>
          <div className="w-10 h-px bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[EffectFade, Thumbs, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }} // 確保淡入淡出時背景不會穿透，穩定佈局
            autoplay={{ delay: 5000 }}
            thumbs={{ swiper: safeThumbs }}
            className="mb-10 rounded-xl shadow-2xl overflow-hidden"
          >
            {SERVICES.map((s) => (
              <SwiperSlide key={s.id}>
                {/* 關鍵：強制高度固定 h-[500px] 並統一 flex 佈局 */}
                <div className="relative h-[500px] w-full flex flex-col justify-end overflow-hidden">
                  {/* 底圖：確保填滿且位置固定 */}
                  <img
                    src={s.img}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="service"
                  />

                  {/* 漸層遮罩與文字：使用固定內距 (p-8 md:p-12) */}
                  <div className="relative z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-8 md:p-12 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        {s.full}
                      </h3>
                      <p className="text-slate-200 max-w-2xl text-sm md:text-base leading-relaxed font-light">
                        {s.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            spaceBetween={12} // 稍微縮減間距，給寬度更多容錯空間
            slidesPerView={2.2} // 使用小數點，讓手機端可以看到下一張的邊緣，引導滑動
            breakpoints={{
              768: {
                slidesPerView: 5, // 桌機維持 5 張
                spaceBetween: 15,
              },
            }}
            watchSlidesProgress={true}
            className="h-24 px-1" // 加上一點左右 padding 避免陰影被切掉
          >
            {SERVICES.map((s) => (
              <SwiperSlide key={s.id} className="cursor-pointer">
                <div className="h-full border border-slate-200 bg-white rounded-lg flex items-center justify-center text-center p-2 transition-all hover:border-[#d4af37] [.swiper-slide-thumb-active_&]:border-[#d4af37] [.swiper-slide-thumb-active_&]:bg-[#fafafa] [.swiper-slide-thumb-active_&]:shadow-sm">
                  <span className="text-[15px] md:text-[17px] font-bold text-slate-400 [.swiper-slide-thumb-active_&]:text-[#333] whitespace-nowrap">
                    {s.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 4. 聯絡區 (修正後的版本) */}
      <section id="contact" className="py-24 px-[10%] bg-white">
        <div className="max-w-xl mx-auto p-12 border border-slate-100 shadow-sm bg-white rounded-lg">
          {state.succeeded ? (
            // 成功後的畫面
            <div className="text-center py-10">
              <h2 className="text-2xl mb-4 tracking-widest font-light text-[#d4af37]">
                發送成功
              </h2>
              <p className="text-slate-500">
                感謝您的諮詢，我們將盡快與您聯繫。
              </p>
            </div>
          ) : (
            // 表單本體
            <>
              <h2 className="text-2xl text-center mb-10 tracking-widest uppercase font-light">
                諮詢表格
              </h2>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="您的稱呼"
                    required
                    className="w-full py-3 border-b border-slate-200 outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>

                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="聯絡資料 (Email)"
                    required
                    className="w-full py-3 border-b border-slate-200 outline-none focus:border-[#d4af37] transition-all"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="需求描述..."
                    required
                    className="w-full py-3 border-b border-slate-200 outline-none focus:border-[#d4af37] transition-all"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 border border-[#d4af37] text-sm tracking-widest hover:bg-[#d4af37] hover:text-white transition-all disabled:opacity-50"
                >
                  {state.submitting ? "處理中..." : "發送諮詢"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* 4. 聯絡區 */}

      {/* <section id="contact" className="py-24 px-[10%]">
        <div className="max-w-xl mx-auto p-12 border border-slate-100 shadow-sm bg-white rounded-lg">
          <h2 className="text-2xl text-center mb-10 tracking-widest uppercase font-light">
            諮詢表格
          </h2>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="您的稱呼"
              className="w-full py-3 border-b border-slate-200 outline-none focus:border-[#d4af37] transition-all"
            />
            <input
              type="email"
              placeholder="聯絡資料 (Email)"
              className="w-full py-3 border-b border-slate-200 outline-none focus:border-[#d4af37] transition-all"
            />
            <textarea
              rows="3"
              placeholder="需求描述..."
              className="w-full py-3 border-b border-slate-200 outline-none focus:border-[#d4af37] transition-all"
            />
            <button className="w-full py-4 border border-[#d4af37] text-sm tracking-widest hover:bg-[#d4af37] hover:text-white transition-all">
              發送諮詢
            </button>
          </form>
        </div>
      </section> */}

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-xs">
        © 2026 AI.修復室 All rights reserved.
      </footer>
    </div>
  );
}

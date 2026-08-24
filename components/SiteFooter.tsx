export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030813]">
      <div className="content-wrap px-6 py-8 sm:px-8 md:py-10">
        <div className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logoo.png"
              alt="Digital Usha"
              className="h-auto w-[120px] max-w-[34vw] sm:w-[132px]"
              draggable={false}
            />
            <img
              src="/ChatGPT Image Aug 24, 2026, 03_59_59 AM.png"
              alt="Usha Uprety"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white/15"
              draggable={false}
            />
            <p className="text-[0.95rem] font-semibold tracking-[-0.02em] text-white sm:text-[1rem]">
              Usha Uprety
            </p>
          </div>

          <div className="flex justify-end">
          <p className="text-right text-[0.88rem] leading-6 text-[#b8c1d2]">
            Copyright 2026 Digital Usha. All rights reserved.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

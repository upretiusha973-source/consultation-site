export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030813]">
      <div className="content-wrap px-6 py-8 sm:px-8 md:py-10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <img
              src="/logoo.png"
              alt="Digital Usha"
              className="h-auto w-[160px] max-w-[46vw] sm:w-[175px]"
              draggable={false}
            />
          </div>

          <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3">
            <img
              src="/ChatGPT Image Aug 24, 2026, 03_59_59 AM.png"
              alt="Usha Uprety"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white/15"
              draggable={false}
            />
            <div>
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-[#a9b4c8]">
                Usha Uprety
              </p>
              <p className="mt-1 text-sm font-medium text-[#d6dbe7]">
                Digital Usha
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/8 pt-5 text-center text-[0.92rem] leading-7 text-[#b8c1d2] md:text-left">
          Copyright 2026 Digital Usha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030813]">
      <div className="content-wrap px-6 py-8 sm:px-8 md:py-10">
        <div className="flex items-end justify-between gap-4">
          <div className="flex items-center">
            <img
              src="/logoo.png"
              alt="Digital Usha"
              className="h-auto w-[120px] max-w-[34vw] sm:w-[132px]"
              draggable={false}
            />
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

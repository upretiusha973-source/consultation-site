export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#02040a]/42 backdrop-blur-2xl">
      <div className="content-wrap px-6 py-8 sm:px-8 md:py-10">
        <div className="flex items-end justify-between gap-4">
          <div className="flex items-center">
            <img
              src="/logoo.png"
              alt="Digital Usha"
              className="h-auto w-[132px] max-w-[36vw] sm:w-[148px]"
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



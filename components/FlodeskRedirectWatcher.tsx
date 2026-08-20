"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function FlodeskRedirectWatcher() {
  const router = useRouter();

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(
      '[data-ff-el="root"].ff-6a870e66fbd33ed521da591d',
    );

    if (!root) {
      return;
    }

    let timer: number | null = null;

    const redirect = () => {
      if (timer) {
        return;
      }

      timer = window.setTimeout(() => {
        router.push("/thanks");
      }, 1500);
    };

    if (root.getAttribute("data-ff-stage") === "success") {
      redirect();
    }

    const observer = new MutationObserver(() => {
      if (root.getAttribute("data-ff-stage") === "success") {
        redirect();
      }
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-ff-stage"],
    });

    return () => {
      observer.disconnect();
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [router]);

  return null;
}

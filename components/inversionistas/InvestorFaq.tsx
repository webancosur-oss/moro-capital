"use client";

import {
  useState,
} from "react";

import {
  ChevronDown,
} from "lucide-react";

import {
  FAQS,
} from "@/data/investors";

export default function InvestorFaq() {
  const [
    active,
    setActive,
  ] = useState<
    number | null
  >(0);

  return (
    <section
      className="investorSection investorFaq"
      id="faq"
    >
      <div className="investorContainer investorFaqGrid">
        <div className="investorFaqIntro">
          <p className="investorEyebrow">
            PREGUNTAS FRECUENTES
          </p>

          <h2>
            Para
            <br />
            inversionistas.
          </h2>

          <p className="investorLead">
            Información inicial para
            conocer el modelo antes de
            conversar con un asesor.
          </p>
        </div>

        <div className="investorFaqList">
          {FAQS.map(
            (
              faq,
              index
            ) => {
              const isOpen =
                active ===
                index;

              return (
                <article
                  className={`investorFaqItem ${
                    isOpen
                      ? "investorFaqItemOpen"
                      : ""
                  }`}
                  key={
                    faq.question
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActive(
                        isOpen
                          ? null
                          : index
                      )
                    }
                  >
                    <span>
                      {
                        faq.question
                      }
                    </span>

                    <ChevronDown
                      size={18}
                    />
                  </button>

                  <div className="investorFaqAnswer">
                    <div>
                      <p>
                        {
                          faq.answer
                        }
                      </p>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
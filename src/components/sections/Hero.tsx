"use client";

import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import PillButton from "@/components/ui/PillButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="flex flex-col items-center gap-12 py-16 sm:py-20 lg:flex-row lg:gap-16 lg:py-24">
        {/* Left: text */}
        <div className="flex max-w-xl flex-1 flex-col gap-6">
          <div className="font-display inline-flex w-fit items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-[12px] font-medium uppercase tracking-[0.5px] text-primary">
            Disponible 24h/24, 7j/7
          </div>

          <h1 className="font-sans text-[36px] font-normal leading-[1.18] tracking-[-0.5px] text-text sm:text-[44px] lg:text-[50.5px]">
            Vous venez de vivre<br />
            <span className="text-primary">un moment difficile.</span><br />
            On s&apos;occupe du reste.
          </h1>

          <p className="font-display text-[17px] font-medium leading-[1.6] text-text-secondary lg:text-[19.5px] lg:leading-[1.64]">
            Seren vous guide pas à pas dans toutes les démarches après la perte
            d&apos;un proche, dans le bon ordre, avec les bons mots, sans vous laisser seul.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <PillButton href="/inscription" ctaLabel="Inscription" ctaPosition="hero">
              Commencer gratuitement
            </PillButton>

            <PillButton
              href="#comment-ca-marche"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("comment-ca-marche")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Voir comment ça marche
            </PillButton>
          </div>

          <p className="font-sans text-[16px] italic leading-[1.6] text-text-muted">
            Sans inscription obligatoire · Données protégées · Humain avant tout
          </p>
        </div>

        {/* Right: visual cards — décoratif, masqué en dessous de lg faute de place */}
        <div className="hidden flex-1 justify-center lg:flex lg:justify-end">
          <div className="relative aspect-square w-full max-w-[440px]">
            <div className="absolute inset-0 rounded-card bg-gradient-to-b from-white to-border-card" />

            {/* Card 1 : tâche complétée */}
            <div className="absolute left-8 top-8 w-[200px] rounded-card border border-border-card bg-white p-5 shadow-card-border">
              <div className="mb-3 flex items-center gap-3">
                <IconBadge size="sm" className="text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </IconBadge>
                <span className="font-display text-[14px] font-medium text-text">Acte de décès</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-primary-light">
                <div className="h-full w-full rounded-full bg-primary" />
              </div>
              <p className="font-display mt-1.5 text-[12px] font-medium text-text-muted">Complété</p>
            </div>

            {/* Card 2 : en cours */}
            <div className="absolute bottom-12 right-6 w-[200px] rounded-card border border-border-card bg-white p-5 shadow-card-border">
              <div className="mb-3 flex items-center gap-3">
                <IconBadge size="sm" tone="violet" className="text-violet">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </IconBadge>
                <span className="font-display text-[14px] font-medium text-text">Clôture bancaire</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-primary-light">
                <div className="h-full w-3/5 rounded-full bg-primary-light" />
              </div>
              <p className="font-display mt-1.5 text-[12px] font-medium text-text-muted">En cours</p>
            </div>

            {/* Card 3 : prochaine étape */}
            <div className="absolute bottom-4 left-10 w-[160px] rounded-[24px] bg-primary p-4">
              <p className="font-display text-[12px] font-medium text-white">Prochaine étape :</p>
              <p className="font-display mt-0.5 text-[12px] font-medium text-white/80">Notifier la CAF</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

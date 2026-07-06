import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1D1D1D", color: "rgba(255,255,255,0.6)" }}>
      <div
        className="mx-auto flex flex-col md:flex-row justify-between gap-12"
        style={{ maxWidth: "1280px", padding: "80px 80px" }}
      >
        <div className="flex flex-col gap-4" style={{ maxWidth: "300px" }}>
          <Image src="/logo-full.svg" alt="Seren" width={90} height={34} className="brightness-0 invert" />
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(255,255,255,0.5)" }}>
            Un copilote humain et apaisant pour vous guider dans les démarches
            après la perte d'un proche.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.8px" }}>
              Produit
            </span>
            <Link href="#comment-ca-marche" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }} className="hover:text-white transition-colors">
              Comment ça marche
            </Link>
            <Link href="/blog" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }} className="hover:text-white transition-colors">
              Blog
            </Link>
            <a href="/inscription" data-cta-label="Inscription" data-cta-position="footer" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }} className="hover:text-white transition-colors">
              Commencer
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.8px" }}>
              Légal
            </span>
            <Link href="/mentions-legales" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }} className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }} className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgu" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }} className="hover:text-white transition-colors">
              CGU
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.8px" }}>
              Contact
            </span>
            <a href="mailto:bonjour@seren.fr" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }} className="hover:text-white transition-colors">
              bonjour@seren.fr
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "24px 80px", textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
        © {new Date().getFullYear()} Seren. Tous droits réservés.
      </div>
    </footer>
  );
}

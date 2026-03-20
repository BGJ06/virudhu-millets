import { useEffect } from "react";

export default function ProductModal({ product, image, t, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const { name, desc, benefits = [], cookingTip, origin } = product;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={name}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-body">
          {/* Image */}
          <div className="modal-image-wrap">
            <img src={image} alt={name} className="modal-image" />
            <div className="modal-image-glow" />
          </div>

          {/* Content */}
          <div className="modal-content">
            <h2 className="modal-title">{name}</h2>
            <p className="modal-desc">{desc}</p>

            {/* Benefits */}
            {benefits.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <span className="modal-icon">✦</span>
                  {t.modal?.benefits ?? "Health Benefits"}
                </h3>
                <ul className="modal-benefits">
                  {benefits.map((b, i) => (
                    <li key={i} className="modal-benefit-item">
                      <span className="benefit-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cooking Tip */}
            {cookingTip && (
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <span className="modal-icon">🍲</span>
                  {t.modal?.cookingTip ?? "Cooking Tip"}
                </h3>
                <p className="modal-tip">{cookingTip}</p>
              </div>
            )}

            {/* Origin */}
            {origin && (
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <span className="modal-icon">🌾</span>
                  {t.modal?.origin ?? "Origin & Tradition"}
                </h3>
                <p className="modal-origin">{origin}</p>
              </div>
            )}

            {/* CTA */}
            <div className="modal-cta-row">
              <a
                href="https://wa.me/918754278484"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-cta-btn"
              >
                {t.modal?.orderWhatsApp ?? "Order on WhatsApp"}
              </a>
              <button className="modal-close-btn" onClick={onClose}>
                {t.modal?.close ?? "Close"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

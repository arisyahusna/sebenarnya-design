import { partners } from '@/data/content';

// The list is rendered twice and the track slides by -50% (CSS), so the loop is seamless
export default function Collaborators() {
  return (
    <section className="partners container" aria-label="Sumber kenyataan rasmi">
      <div className="partners-inner">
        <p className="partners-label">Kenyataan rasmi daripada</p>

        <div className="partners-ticker">
          <div className="partners-track">
            {[...partners, ...partners].map((p, i) => {
              const copy = i >= partners.length; // second set is only there for the loop
              return (
                <span key={i} className="partners-logo" aria-hidden={copy || undefined}>
                  <img src={p.logo} alt={copy ? '' : p.name} title={p.name} height="40" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import FadeIn from "./FadeIn";
import styles from "./ImpactBand.module.css";

export default function ImpactBand({
  items,
}: {
  items: { label: string; body: string }[];
}) {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <FadeIn>
          <p className={styles.heading}>Our Impact</p>
        </FadeIn>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <div className={styles.item}>
                <h3>{item.label}</h3>
                <p>{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

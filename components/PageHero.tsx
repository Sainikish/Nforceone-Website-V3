import Image from "next/image";
import FadeIn from "./FadeIn";
import AnimatedHeading from "./AnimatedHeading";
import styles from "./PageHero.module.css";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imagePosition,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imagePosition?: string;
}) {
  if (image) {
    return (
      <section className={styles.banner}>
        <div className={styles.bannerBg}>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={95}
            style={{ objectFit: "cover", objectPosition: imagePosition || "center 40%" }}
          />
        </div>
        <div className={styles.bannerOverlay} />
        <FadeIn className={styles.bannerInner}>
          {eyebrow && <p className={styles.eyebrowLight}>{eyebrow}</p>}
          <AnimatedHeading text={title} className={styles.lightTitle} variant="style3" />
          {subtitle && <p className={styles.subtitleLight}>{subtitle}</p>}
        </FadeIn>
      </section>
    );
  }

  return (
    <FadeIn className={styles.hero}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <AnimatedHeading text={title} variant="style3" />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </FadeIn>
  );
}

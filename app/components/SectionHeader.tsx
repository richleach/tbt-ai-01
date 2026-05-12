import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  overline: string;
  title: string;
}

export default function SectionHeader({ overline, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.overline}>{overline}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

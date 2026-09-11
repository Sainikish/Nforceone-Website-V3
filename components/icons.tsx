type IconProps = {
  size?: number;
  className?: string;
};

const STROKE = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CpuIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" />
      <line x1="12" y1="2" x2="12" y2="7" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="2" y1="12" x2="7" y2="12" />
      <line x1="17" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function LayersIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

export function ActivityIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <polyline points="3 12 8 12 10 6 14 18 16 12 21 12" />
    </svg>
  );
}

export function LockIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function LaunchIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="9 15 15 9" />
      <polyline points="10 9 15 9 15 14" />
    </svg>
  );
}

export function ShieldIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <path d="M12 3 4.5 6v6c0 5 3.2 8.4 7.5 9.9 4.3-1.5 7.5-4.9 7.5-9.9V6L12 3Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <path d="M12 3 4.5 6v6c0 5 3.2 8.4 7.5 9.9 4.3-1.5 7.5-4.9 7.5-9.9V6L12 3Z" />
      <polyline points="8.5 12 11 14.5 15.5 9.5" />
    </svg>
  );
}

export function BankIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <polygon points="12 2 22 8 2 8" />
      <line x1="4" y1="8" x2="4" y2="19" />
      <line x1="9" y1="8" x2="9" y2="19" />
      <line x1="15" y1="8" x2="15" y2="19" />
      <line x1="20" y1="8" x2="20" y2="19" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </svg>
  );
}

export function CarIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <path d="M4.5 16h15v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1h-9v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3Z" />
      <path d="M4.5 16 6 8.5h12L19.5 16" />
      <circle cx="7.5" cy="16" r="1.4" />
      <circle cx="16.5" cy="16" r="1.4" />
    </svg>
  );
}

export function ShoppingBagIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <path d="M6 8h12l1 12.5H5L6 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function BroadcastIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M8.8 8.8a5 5 0 0 0 0 6.4" />
      <path d="M15.2 8.8a5 5 0 0 1 0 6.4" />
      <path d="M5.8 5.8a9.2 9.2 0 0 0 0 12.4" />
      <path d="M18.2 5.8a9.2 9.2 0 0 1 0 12.4" />
    </svg>
  );
}

export function SignalBarsIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <rect x="3" y="14" width="3.2" height="6" rx="0.6" />
      <rect x="10.4" y="9.5" width="3.2" height="10.5" rx="0.6" />
      <rect x="17.8" y="4" width="3.2" height="16" rx="0.6" />
    </svg>
  );
}

export function SettingsIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="3" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="21" />
      <line x1="4.2" y1="7.5" x2="6.8" y2="9" />
      <line x1="17.2" y1="15" x2="19.8" y2="16.5" />
      <line x1="4.2" y1="16.5" x2="6.8" y2="15" />
      <line x1="17.2" y1="9" x2="19.8" y2="7.5" />
    </svg>
  );
}

export function CreditCardIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <line x1="2.5" y1="10" x2="21.5" y2="10" />
    </svg>
  );
}

export function GraduationCapIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.3V16c0 1.6 2.7 3 6 3s6-1.4 6-3v-5.7" />
    </svg>
  );
}

export function CloudIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <path d="M7 18a4 4 0 0 1-.5-8 5 5 0 0 1 9.5-1.6A4.5 4.5 0 0 1 17.5 18H7Z" />
    </svg>
  );
}

export function GlobeIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3c2.8 2.4 4.5 5.6 4.5 9s-1.7 6.6-4.5 9" />
      <path d="M12 3c-2.8 2.4-4.5 5.6-4.5 9s1.7 6.6 4.5 9" />
    </svg>
  );
}

export function TerminalIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <polyline points="7 9.5 10.5 12.5 7 15.5" />
      <line x1="12.5" y1="15.5" x2="16.5" y2="15.5" />
    </svg>
  );
}

export function GridIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <rect x="3" y="3" width="8" height="8" rx="1.2" />
      <rect x="13" y="3" width="8" height="8" rx="1.2" />
      <rect x="3" y="13" width="8" height="8" rx="1.2" />
      <rect x="13" y="13" width="8" height="8" rx="1.2" />
    </svg>
  );
}

export function BoxIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="M3 8l9 5 9-5" />
      <line x1="12" y1="13" x2="12" y2="21" />
    </svg>
  );
}

export function DatabaseIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <ellipse cx="12" cy="5.5" rx="8" ry="2.8" />
      <path d="M4 5.5v6c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8v-6" />
      <path d="M4 11.5v6c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8v-6" />
    </svg>
  );
}

export function CodeIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <polyline points="8.5 6.5 3.5 12 8.5 17.5" />
      <polyline points="15.5 6.5 20.5 12 15.5 17.5" />
    </svg>
  );
}

export function CheckCircleIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...STROKE}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8 12.5 11 15.5 16 9.5" />
    </svg>
  );
}

export function BoltIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
      <path d="M13 2 4 14h6l-1 8 9-13h-6l1-7Z" />
    </svg>
  );
}

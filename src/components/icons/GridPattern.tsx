
type Props = {
    className?: string;
};

export const GridPattern = ({ className }: Props) => {
    return (
    <svg 
        className={className}
        focusable="false"
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B47ED" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B47ED" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B47ED" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="20%" x2="100%" y2="80%" stroke="url(#line-grad)" strokeWidth="0.5" />
          <line x1="100%" y1="10%" x2="0" y2="90%" stroke="url(#line-grad)" strokeWidth="0.5" />
          <circle cx="80%" cy="30%" r="300" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4" />
          <circle cx="20%" cy="70%" r="400" stroke="white" strokeWidth="0.3" fill="none" opacity="0.3" />
    </svg>

    )
};
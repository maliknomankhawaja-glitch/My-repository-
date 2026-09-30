import React from 'react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-[11px] font-sans-clean tracking-wider text-white/50 ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={`${item.label}-${index}`}>
            {index > 0 && <span className="text-white/20 select-none">/</span>}

            {item.isCurrent || isLast || !item.onClick ? (
              <span
                className={`font-medium truncate max-w-[200px] sm:max-w-xs ${
                  item.isCurrent || isLast ? 'text-[#C8A97E]' : 'text-white/70'
                }`}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                className="hover:text-white transition-colors duration-200 underline-offset-4 hover:underline truncate max-w-[160px]"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

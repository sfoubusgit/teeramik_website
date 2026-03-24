type AnnouncementBarProps = {
  message: string;
  href?: string;
};

export function AnnouncementBar({ message, href }: AnnouncementBarProps) {
  if (!message) return null;

  return (
    <div className="bg-olive text-cream">
      <div className="mx-auto max-w-[1200px] px-6 py-2 text-center text-xs uppercase tracking-[0.2em]">
        {href ? (
          <a href={href} className="hover:text-cream/80">
            {message}
          </a>
        ) : (
          message
        )}
      </div>
    </div>
  );
}

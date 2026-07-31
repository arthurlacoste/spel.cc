export function MonochromeLogo({
  src,
  label,
  className = "size-14",
}: {
  src: string
  label: string
  className?: string
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-block bg-foreground ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  )
}

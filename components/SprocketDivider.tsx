export function SprocketDivider() {
  return (
    <div className="sprocket-strip my-16 sm:my-24">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="sprocket-dot" />
      ))}
    </div>
  )
}

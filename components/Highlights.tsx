type Props = { items:string[] };

export default function Highlights({items }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((chip) => (
        <span
          key={chip}
          className="text-xs sm:text-sm rounded-full px-3 py-1 ring-1 ring-black/10 dark:ring-white/15 text-black/70 dark:text-white/70"
          >
            {chip}
          </span>
      ))}
    </div>
  )
}
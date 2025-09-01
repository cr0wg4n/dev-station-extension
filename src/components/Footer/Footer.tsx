interface FooterProps {
  url: string
  version: string
}

const Footer: React.FC<FooterProps> = ({ url, version }: FooterProps) => {
  return (
    <div className="p-1.5 text-xxs text-center bg-neutral-900 text-neutral-300 border-t border-neutral-700">
      Coded with ❤️ by the community —
      {' '}
      <a
        href={url}
        target="_blank"
        className="underline text-neutral-300/80"
        title="Get in touch"
      >
        join
      </a>
      {' '}
      the fun!
      <span className="mx-1" />
      (v
      {version}
      )
    </div>
  )
}

export default Footer

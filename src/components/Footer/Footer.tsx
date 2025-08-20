interface FooterProps {
  creator: string
  url: string
  version: string
}

const Footer: React.FC<FooterProps> = ({ creator, url, version }: FooterProps) => {
  return (
    <div className="p-1.5 text-center text-[10px] bg-neutral-900 text-neutral-400 border-t border-neutral-700">
      Made with ❤️ by
      {' '}
      <a
        href={url}
        target="_blank"
        className="underline text-neutral-300/80"
        title="Get in touch"
      >
        { creator }
      </a>
      {' '}
      (v
      {version}
      )
    </div>
  )
}

export default Footer

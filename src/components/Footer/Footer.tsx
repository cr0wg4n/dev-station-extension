interface FooterProps {
  creator: string
  url: string
  version: string
}

const Footer: React.FC<FooterProps> = ({ creator, url, version }: FooterProps) => {
  return (
    <div className="p-2 text-right text-xs bg-neutral text-white">
      Made with ❤️ by
      {' '}
      <a
        href={url}
        target="_blank"
        className="underline"
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

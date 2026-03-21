interface FooterProps {
  url: string
  version: string
}

const Footer: React.FC<FooterProps> = ({ url, version }: FooterProps) => {
  return (
    <div className="p-1.5 text-center text-[0.625rem] bg-neutral-900 text-neutral-400 border-t border-neutral-700">
      Made with ❤️ by devs. Wanna help?
      {' '}
      <a
        href={url}
        target="_blank"
        className="underline text-neutral-300/80"
        title="Get in touch"
      >
        Contribute here
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

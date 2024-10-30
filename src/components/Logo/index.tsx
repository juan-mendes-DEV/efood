import { LogoContainer, LogoContainerLink } from './styles'
import imgLogo from '../../assets/icons/logo.png'

type LogoProps = {
  kind: 'image' | 'link'
  title: string
  cover: string
  to?: string
}

const Logo = ({ kind, title, cover, to }: LogoProps) => {
  if (kind === 'link') {
    return (
      <LogoContainerLink to={to as string}>
        <img src={imgLogo} alt={title} />
      </LogoContainerLink>
    )
  }

  return (
    <LogoContainer>
      <img src={imgLogo} alt={title} />
    </LogoContainer>
  )
}

export default Logo

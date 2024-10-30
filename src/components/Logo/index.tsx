import { LogoContainer, LogoContainerLink } from './styles'
import logo from '../../assets/logo.png'

type LogoProps = {
  kind: 'image' | 'link'
  title: string
  to?: string
}

const Logo = ({ kind, title, to }: LogoProps) => {
  if (kind === 'link') {
    return (
      <LogoContainerLink to={to as string}>
        <img src={logo} alt={title} />
      </LogoContainerLink>
    )
  }

  return (
    <LogoContainer>
      <img src={logo} alt={title} />
    </LogoContainer>
  )
}

export default Logo

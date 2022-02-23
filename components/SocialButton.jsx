import { IconButton } from "@chakra-ui/react";

export default function SocialButton( { name, icon, href } ) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <IconButton
        aria-label={name}
        icon={icon}
        variant="ghost"
        size='lg'
      />
    </a>
  )
}
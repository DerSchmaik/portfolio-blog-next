import { Icon, Flex } from "@chakra-ui/react"

import { DiGit, DiJavascript1, DiLinux, DiNpm, DiUnitySmall, DiWindows } from "react-icons/di";
import { FaBootstrap, FaGithub, FaReact, FaVuejs } from "react-icons/fa";
import { SiChakraui, SiCsharp, SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiNuxtdotjs, SiPypi, SiPython, SiRaspberrypi, SiTypescript, SiVuetify } from "react-icons/si"

export default function Skills({ IconSize, spacingH, spacingV }) {

  return(<>
    <Flex flexWrap='wrap'>
      <Icon as={DiJavascript1} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiTypescript} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiPython} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiCsharp} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={FaVuejs} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiNuxtdotjs} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={FaReact} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiNextdotjs} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiVuetify} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiChakraui} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={FaBootstrap} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiFirebase} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={DiGit} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={FaGithub} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={DiNpm} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiPypi} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiExpress} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiMongodb} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={DiUnitySmall} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={SiRaspberrypi} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={DiLinux} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
      <Icon as={DiWindows} w={IconSize} h={IconSize} marginRight={spacingH} marginBottom={spacingV}/>
    </Flex>

    {/* <Flex marginBottom={spacingV}>
      <Text fontSize='md' fontWeight="black">Anfänger</Text>
      <Spacer />
      <Text fontSize='md' fontWeight="black">Profi</Text>
    </Flex>

    <Flex>
      <Icon as={DiJavascript1} w={6} h={6} marginLeft={['61vw', '61vw', '33rem', '33rem', '33rem', '33rem']} position="absolute" />
      <Icon as={SiTypescript} w={6} h={6} marginLeft={['35vw', '35vw', '17rem', '17rem', '17rem', '17rem']} position="absolute" />
      <Icon as={SiPython} w={6} h={6} marginLeft={['52vw', '52vw', '29rem', '29rem', '29rem', '29rem']} position="absolute" />
      <Icon as={SiCsharp} w={6} h={6} marginLeft={['10vw', '10vw', '5rem', '5rem', '5rem', '5rem']} position="absolute" />
    </Flex>   */}
  </>)
}
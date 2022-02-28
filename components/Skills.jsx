import { Icon, Flex, Tooltip } from "@chakra-ui/react"

import { DiGit, DiJavascript1, DiLinux, DiNpm, DiUbuntu, DiUnitySmall, DiWindows } from "react-icons/di";
import { FaBootstrap, FaGithub, FaReact, FaVuejs } from "react-icons/fa";
import { SiChakraui, SiCsharp, SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiNuxtdotjs, SiPypi, SiPython, SiRaspberrypi, SiTypescript, SiVuetify } from "react-icons/si"

export default function Skills({ IconSize, spacingH, spacingV }) {

  return(<>
    <Flex flexWrap='wrap' marginTop={6}>
      <Tooltip label="Javascript" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={DiJavascript1} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Typescript" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={SiTypescript} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Python" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={SiPython} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="C#" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={SiCsharp} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Vue.js" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={FaVuejs} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Nuxt.js" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={SiNuxtdotjs} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="React" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={FaReact} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Next.js" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={SiNextdotjs} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Vuetify" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={SiVuetify} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Chakra UI" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={SiChakraui} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Bootstrap" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={FaBootstrap} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Firebase" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={SiFirebase} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Git" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={DiGit} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Github" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={FaGithub} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="NPM" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={DiNpm} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="pypi" placement='top-start' shouldWrapChildren closeOnClick={false}>
      <Icon as={SiPypi} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Express" placement='top-start' shouldWrapChildren closeOnClick={false}>
      <Icon as={SiExpress} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="MongoDB" placement='top-start' shouldWrapChildren closeOnClick={false}>
      <Icon as={SiMongodb} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Unity" placement='top-start' shouldWrapChildren closeOnClick={false}>
      <Icon as={DiUnitySmall} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Raspberry Pi" placement='top-start' shouldWrapChildren closeOnClick={false}>
      <Icon as={SiRaspberrypi} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Ubuntu" placement='top-start' shouldWrapChildren closeOnClick={false}>
      <Icon as={DiUbuntu} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>

      <Tooltip label="Windows" placement='top-start' shouldWrapChildren closeOnClick={false}>
        <Icon as={DiWindows} w={IconSize} h={IconSize} marginRight={spacingH / 2} marginLeft={spacingH / 2}  marginBottom={spacingV}/>
      </Tooltip>
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
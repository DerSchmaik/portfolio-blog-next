import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'y2x6ghkp',
    dataset: 'production',
    token: '', 
    useCdn: false,
    apiVersion: '2022-02-22'
})
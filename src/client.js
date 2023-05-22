import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "qwvhtmta", // can be found in studio/sanity.json or manage.sanity.io
    dataset: "production" //default setting with `sanity init`
})
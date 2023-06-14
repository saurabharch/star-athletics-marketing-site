import { singleton, fields } from '@keystatic/core'

export const homepage = singleton({
  label: 'Homepage',
  path: 'src/content/homepage',
  schema: {
    heroIntroText: fields.document({
      label: 'Hero Intro Text',
      formatting: {
        inlineMarks: true,
      },
      links: true,
    }),
    heroImages: fields.array(
      fields.object({
        url: fields.image({
          label: 'Hero Image 1',
          directory: 'public/images/homepage',
          publicPath: '/images/homepage/',
          validation: { isRequired: true },
        }),
        altText: fields.text({ label: 'Alt Text' }),
      }),
      {
        label: 'Hero Images',
        description: '5 (required) images to be displayed in the hero section',
        itemLabel: (props) =>
          props.fields.altText.value || "No alt text for this image (it's important for SEO!)",
        validation: { length: { min: 5, max: 5 } },
      }
    ),
    bigImage: fields.object({
      url: fields.image({
        label: 'Big Image',
        description: 'The big image displayed split-screen next to the introduction text',
        directory: 'public/images/homepage',
        publicPath: '/images/homepage/',
        validation: { isRequired: true },
      }),
      altText: fields.text({
        label: 'Alt Text',
        description: 'The alt text for the big image — important for SEO and accessibility',
      }),
    }),
    introductionEyebrow: fields.text({
      label: 'Introduction Eyebrow',
      description: 'The little colorful highlight above the heading',
    }),
    introductionTitle: fields.text({ label: 'Introduction Title' }),
    introductionLeadText: fields.text({ label: 'Introduction Lead Text', multiline: true }),
    introductionText: fields.document({
      label: 'Introduction Main Text',
      formatting: {
        inlineMarks: true,
      },
      links: true,
    }),
    primaryTestimonial: fields.relationship({
      label: 'Featured Testimonial',
      description: 'The testimonial that will be displayed more prominently.',
      collection: 'testimonials',
    }),
  },
})

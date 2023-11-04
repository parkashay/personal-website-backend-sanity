import {Rule} from 'sanity'
import {FcAdvertising} from 'react-icons/fc'

export default {
  type: 'document',
  name: 'advertisement',
  title: 'Advertisement and Banner',
  icon: FcAdvertising,
  fields: [
    {
      type: 'string',
      name: 'type',
      title: 'Type',
      options: {
        list: [
          {title: 'Advertisement', value: 'advertisement'},
          {title: 'Banner', value: 'banner'},
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: 'boolean',
      name: 'active',
      title: 'Active',
      description: 'Toggle it on of you want it to be displayed on the page.',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: 'text',
      name: 'content',
      title: 'Content',
      description: 'Provide some text for your banner/ad',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'callToActionTitle',
      title: 'Call to Action Title',
      description: 'Text to show in the button',
    },
    {
      type: 'string',
      name: 'callToActionLink',
      title: 'Call to Action Link',
      description: 'Provide a link to go to when user clicks on the call to action button',
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}

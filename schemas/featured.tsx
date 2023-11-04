import {Rule} from 'sanity'
import {BsDisplayFill} from 'react-icons/bs'

export default {
  type: 'document',
  name: 'featured',
  title: 'Blogs - Featured Hero Item',
  icon: BsDisplayFill,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
    },
    {
      type: 'text',
      name: 'summary',
      title: 'A short Description',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}, {type: 'code'}],
      name: 'content',
      title: 'Content',
      description: 'Provide a detailed content for the blog',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}

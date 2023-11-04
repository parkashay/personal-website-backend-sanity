import {defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'education',
  fields: [
    {
      type: 'string',
      name: 'college',
      title: 'College/School',
    },
    {
      type: 'image',
      name: 'image',
      title: 'Logo/Image',
      description: 'Logo or insignia of the College/School',
      options: {hotspot: true},
    },
    {
      type: 'string',
      name: 'from',
      title: 'From',
    },
    {
      type: 'string',
      name: 'to',
      title: 'To',
    },
    {
      type: 'string',
      name: 'degree',
      title: 'Degree/Level',
    },
  ],
})

import { Rule } from "sanity";

export default{
    type: "document",
    name: "project",
    title: "Projects",
    fields: [
        {
            name: 'title',
            title:'Project Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().warning('Title is required'),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: (Rule: Rule) => Rule.required().warning('slug is required'),
        },
        {
            name: 'description',
            title: 'Project Description',
            type: 'text',
            validation: (Rule: Rule) => Rule.required().warning('Description is required'),
        },
        {
            name: 'tech',
            title: 'Tech Used',
            type: 'array',
            of: [{type: 'string'}],
            validation: (Rule: Rule) => Rule.required().warning('Include tech stack for the project'),
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: Rule) => Rule.required().warning("Image is required")
        },
        {
            name: 'github',
            title: 'Github Link',
            type: 'string',
        },
        {
            name: 'live',
            title: 'Live Link',
            type: 'string',
        }
    ]
}
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
            name: 'priority',
            type: 'string',
            title: 'Priority',
            description: 'Provide a priority, Lower the number, higher the priority.'
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
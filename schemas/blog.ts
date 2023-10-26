import { Rule } from "sanity";

export default {
    type: 'document',
    name: 'blog',
    title: 'Blogs',
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
            title: 'Cover Image',
        },
        {
            type: 'text',
            name: 'summary',
            title: 'Summary of the Blog Post',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                },
                {
                    type:'code',
                }
            ],
            name: 'content',
            title: 'Content',
            validation: (Rule: Rule) => Rule.required(),
        },
    ]
}
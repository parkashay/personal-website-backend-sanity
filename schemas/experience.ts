import { Rule, defineType } from "sanity";

export default defineType({
    name: 'experience',
    type: 'object',
    fields: [
        {
            name: 'at',
            type: 'string',
            title: 'At',
            validation: (Rule: Rule) => Rule.required().warning('In which company/organization ?'),
        },
        {
            type: 'string',
            name: 'link',
            title: 'Link',
            description: 'A link to website or LinkedIn profile of the company/org',
        },
        {
            type: 'string',
            name: 'role',
            title: 'Role',
            validation: (Rule: Rule) => Rule.required().warning('What was your role at the company?'),
        },
        {
            type: 'string',
            name: 'time',
            title: 'Work Time',
            options:{
                list: [
                    {title: 'Part-Time', value: 'Part-Time'},
                    {title: 'Full-Time', value: 'Full-Time'},
                    {title: 'Freelance', value: 'Freelance'},
                ]
            },
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            type: 'string',
            name: 'from',
            description:'When did you start working here ?',
            title: 'From',
        },
        {
            type: 'string',
            name: 'to',
            title: 'To',
            description: 'until when ? type \'Present\' if still working',
        },

    ]
})
import { Rule } from "sanity";

export default {
    type: 'document',
    name: 'resume',
    title: 'Resume',
    fields: [
        {
            type: 'string',
            name: 'name',
            title: 'Name',
        },
        {
            type: 'string',
            name: 'username',
            title: 'Username',
        },
        {
            type: 'image',
            name: 'image',
            title: 'Image',
            description: 'Avatar Image for Portfolio',
        },
        {
            type: 'string',
            name: 'description',
            title: 'A short description',
        },
        {
            type: 'text',
            name: 'about',
            title: 'Detailed description about self',
        },
        {
            type:'array',
            name:'hashtags',
            title: 'Hashtags',
            of: [{type: 'string'}],
        },
        {
            type: 'string',
            name: 'email',
            title: 'Email Address',
            validation: (Rule: Rule) => Rule.required().warning('Email is Required'),
        },
        {
          type: 'array',
          of: [{type: 'social'}],
          name: 'socials',
          description: 'Add your social links here !',
        },
        {
            type: 'array',
            of: [{type: 'experience'}],
            name: 'experiences',
            title: "Experiences",
            description: 'Add your Experiences here',
        },
        {
            type: 'array',
            of: [{type: 'education'}],
            name: 'education',
            title: 'Education',
            description: 'Add your Academic Qualifications here !'
        }
    ]
}
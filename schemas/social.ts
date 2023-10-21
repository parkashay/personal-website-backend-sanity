import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: 'social',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Title',
            description: 'Specify social platform name. eg. facebook, linkedin, twitter, etc.'
        },
        {
            type: 'string',
            name: 'link',
            title: 'Link',
        }
    ]
})
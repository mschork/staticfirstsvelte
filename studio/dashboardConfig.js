export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8a170e834b730187e084ee',
                  title: 'Sanity Studio',
                  name: 'staticfirstsvelte-studio',
                  apiId: '0475463a-df46-4d37-87bc-8cec884d5666'
                },
                {
                  buildHookId: '5d8a170e834b730175e084f7',
                  title: 'Blog Website',
                  name: 'staticfirstsvelte',
                  apiId: 'c4dbeeb7-7d06-48ac-8e61-b0cd58f52bc8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mschork/staticfirstsvelte',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://staticfirstsvelte.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

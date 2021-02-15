export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '602a6c241a7fec43c758dcf1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mwm55a6m',
                  apiId: '036b9d9a-600f-419a-b29c-c927c93cf788'
                },
                {
                  buildHookId: '602a6c248ca5c579785b35f4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dofp4feh',
                  apiId: 'acb3695e-aa00-4392-921a-1197b1adcc4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeremylynch/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dofp4feh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

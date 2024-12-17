{
    'name': 'Todolist Owl',
    'version': '1.0',
    'sequence': -1,
    'description': """
    Todolist app use Owl
    """,
    'summary': """
    A Todolist app Use Owl
    """,
    'author': 'Kainowf',
    'website': 'https://github.com/kKaii61/todolist_owl',
    'license': 'LGPL-3',
    'category': 'Productivity',
    'depends': [
        'base','web'
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/templates.xml',
    ],
    'demo': [
    ],
    'application': True,
    'installable': True,
    'assets': {
        'web.assets_backend':[
            # bootstrap
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap_backend'),
            # require for fa icons
            'web/static/src/libs/fontawesome/css/font-awesome.css',

            'todo/static/src/components/*/*.js',
            'todo/static/src/components/*/*.xml',
            'todo/static/src/components/*/*.scss',
            'todo/static/src/**/*',
        ],
    }
}
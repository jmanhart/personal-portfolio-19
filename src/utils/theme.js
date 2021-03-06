const colors = {
    gray: [
        '#fafbfc',
        '#f6f8fa',
        '#e1e4e8',
        '#d1d5da',
        '#959da5',
        '#6a737d',
        '#586069',
        '#444d56',
        '#2f363d',
        '#24292e'
    ],
    blue: [
        '#f1f8ff',
        '#dbedff',
        '#c8e1ff',
        '#79b8ff',
        '#2188ff',
        '#0366d6',
        '#005cc5',
        '#044289',
        '#032f62',
        '#05264c'
    ],
    green: [
        '#f0fff4',
        '#dcffe4',
        '#bef5cb',
        '#85e89d',
        '#34d058',
        '#28a745',
        '#22863a',
        '#176f2c',
        '#165c26',
        '#144620',
    ],
    purple: [
        '#f5f0ff',
        '#e6dcfd',
        '#d1bcf9',
        '#b392f0',
        '#8a63d2',
        '#6f42c1',
        '#5a32a3',
        '#4c2889',
        '#3a1d6e',
        '#29134e',
    ],
    yellow: [
        '#fffdef',
        '#fffbdd',
        '#fff5b1',
        '#ffea7f',
        '#ffdf5d',
        '#ffd33d',
        '#f9c513',
        '#dbab09',
        '#b08800',
        '#735c0f',
    ],
    orange: [
        '#fff8f2',
        '#ffebda',
        '#ffd1ac',
        '#ffab70',
        '#fb8532',
        '#f66a0a',
        '#e36209',
        '#d15704',
        '#c24e00',
        '#a04100',
    ],
    red: [
        '#ffeef0',
        '#ffdce0',
        '#fdaeb7',
        '#f97583',
        '#ea4a5a',
        '#d73a49',
        '#cb2431',
        '#b31d28',
        '#9e1c23',
        '#86181d',
        
    ]
}

const spacers = {
    /* Spacing scale within components */
    spacing: [
        '0',
        '0.125rem',
        '0.25rem',
        '0.5rem',
        '0.75rem',
        '1rem',
        '1.5rem',
        '2rem',
        '2.5rem',
        '3rem'

    ],
    /* Layout scale for spacing between components */
    layout: [
        '0',
        '1rem',
        '1.5rem',
        '2rem',
        '3rem',	
        '4rem',	
        '6rem',
        '10rem'
    ]
}

const type = {
    family: {
        sans: 'Work Sans,sans-serif',
        serif: 'serif',
        code: 'monaco'
    },
    size: [
        '0',
        '0.75rem',
        '1rem',
        '1.25rem',
        '1.5rem',
        '1.75rem',
        '2rem',
        '2.25rem',
        '3rem',
        '3.25rem',
        '3.5rem'
    ],
    weight: [
        'initial',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '1000',
    ]
}

const theme = {
    ...colors,
    ...spacers,
    type
}

export default theme;
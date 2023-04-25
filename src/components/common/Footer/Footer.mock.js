export const addressData = [
     {
          title: 'Address',
          value: '1234 Street Adress City Address, 1234',
          isLink: false,
          id: 1
     },
     {
          title: 'Phones',
          value: '(00) 1234 5678',
          isLink: {type: 'tel', value: '(00) 1234 5678'},
          id: 2
     },
     {
          title: 'We are open',
          value: 'Monday-Thursday: 9:00AM - 5:30PM',
          isLink: false,
          id: 3
     },
     {
          title: 'Friday',
          value: '9:00 AM - 6:00 PM',
          isLink: false,
          id: 4
     },
     {
          title: 'Saturday',
          value: '11:00 AM - 5:00 PM',
          isLink: false,
          id: 5
     },
     {
          title: 'E-mail',
          value: 'shop@email.com',
          isLink: {type: 'mailto', value: 'shop@email.com'},
          id: 6
     }
     
]

export const links = [
     {
          title: 'Information',
          subTitles: [
                    {title: 'About Us', link: '', id: 1},
                    {title: 'About Zip', link: '', id:2},
                    {title: 'Privacy Policy', link: '', id:3},
                    {title: 'Search', link: '', id:4},
                    {title: 'Terms', link: '', id:5},
                    {title: 'Orders and Returns', link: '', id:6},
                    {title: 'Contact Us', link: '', id:7},
                    {title: 'Advanced Search', link: '', id:8},
                    {title: 'Newsletter Subscription', link: '', id:9}
               ],
          isLink: true,
          id: 1
     },
     {
          title: 'PC Parts',
          subTitles: [
                    {title: 'CPUS', link: '', id: 1},
                    {title: 'Add On Cards', link: '', id: 2},
                    {title: 'Hard Drives (Internal)', link: '', id: 3},
                    {title: 'Graphic Cards', link: '', id: 4},
                    {title: 'Keyboards / Mice', link: '', id: 5},
                    {title: 'Cases / Power Supplies / Cooling', link: '', id: 6},
                    {title: 'RAM (Memory)', link: '', id: 7},
                    {title: 'Software', link: '', id: 8},
                    {title: 'Speakers / Headsets', link: '', id: 9},
                    {title: 'Motherboards', link: '', id: 10}
               ],
          isLink: true,
          id: 2
     },
     {
          title: 'Desktop PCs',
          subTitles: [
                    {title: 'Custom PCs', link: '', id: 1},
                    {title: 'Servers', link: '', id: 2},
                    {title: 'MSI All-In-One PCs', link: '', id: 3},
                    {title: 'HP/Compaq PCs', link: '', id: 4},
                    {title: 'ASUS PCs', link: '', id: 5},
                    {title: 'Tecs PCs', link: '', id: 6}
               ],
          isLink: true,
          id: 3
     },
     {
          title: 'Laptops',
          subTitles: [
                    {title: 'Evryday Use Notebooks', link: '', id: 1},
                    {title: 'MSI Workstation Series', link: '', id: 2},
                    {title: 'MSI Prestige Series', link: '', id: 3},
                    {title: 'Tablets and Pads', link: '', id: 4},
                    {title: 'Netbooks', link: '', id: 5},
                    {title: 'Infinity Gaming Notebooks', link: '', id: 6}
               ],
          isLink: true,
          id: 4
     },
     {
          title: 'Address',
          subTitles: addressData,
          isLink: false,
          id: 5
     } 
     
]


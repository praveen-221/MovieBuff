import React from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MainFooter() {
   return (
      <Footer
         style={{ paddingBottom: 75 }}
         columns={[
            {
               title: 'About',
               items: [
                  {
                     title: 'Terms',
                     url: '/',
                  },
                  {
                     title: 'Conditions',
                     url: '/',
                  },
                  {
                     title: 'Privacy Policy',
                     url: '/',
                  },
                  {
                     title: 'Purchase Policy',
                     url: '/',
                  },
               ],
            },
            {
               title: '"MOVIEWORLD"',
               style: {
                  textAlign: 'center',
               },
               items: [
                  {
                     title: 'MovieWorld is an online movie management website',
                  },
                  // {
                  //    title: 'Designed and implemented by aspiring Full Stack Web Developer.',
                  // },
                  
                  {
                     title: 'Search, know & Review your Favorite Movie',
                  },
                  {
                     title: `MovieWorld`,
                     icon: <CopyrightOutlinedIcon />,
                     url: 'https://github.com/praveen-221/MovieBuff',
                     openExternal: true,
                  },
               ],
            },
            {
               title: 'Follow me',
               items: [
                  {
                     icon: <GitHubIcon />,
                     title: 'Github',
                     url: 'https://github.com/praveen-221/',
                     openExternal: true,
                     style: {
                        fontSize: '1rem',
                     },
                  },
                  {
                     icon: <LinkedInIcon />,
                     title: 'LinkedIn',
                     url: 'https://www.linkedin.com/',
                     openExternal: true,
                     style: {
                        fontSize: '1rem',
                     },
                  },
                  {
                     icon: <InstagramIcon />,
                     title: 'Instagram',
                     url: 'https://www.instagram.com/',
                     openExternal: true,
                     style: {
                        fontSize: '1rem',
                     },
                  },
               ],
            },
         ]}
         bottom="Made with ❤️ by MovieBuffs"
      />
   );
}

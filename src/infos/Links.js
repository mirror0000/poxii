import { ICPGithubIconWhite } from '@icongo/ic';
import { IUMicrosoftOutlook } from '@icongo/iu';
import { LGGithubIcon, LGGoogleGmail, LGLinkedinIcon, LGTelegram } from '@icongo/lg';
import { VLSkype } from '@icongo/vl';

export const LinkInfos = [
  {
    href: 'mailto:poxii2001@gmail.com',
    icon: {
      dark: LGGoogleGmail,
      light: LGGoogleGmail,
    },
    label: 'GMail',
  },
  {
    href: 'https://www.linkedin.com/in/miroslav-p-b255a92a9/',
    icon: {
      dark: LGLinkedinIcon,
      light: LGLinkedinIcon,
    },
    label: 'LinkedIn',
  },
  {
    href: 'https://join.skype.com/invite/zVr0KD5BERxC',
    icon: {
      dark: VLSkype,
      light: VLSkype,
    },
    label: 'Skype',
  },
  {
    href: 'https://github.com/lazar59',
    icon: {
      dark: LGGithubIcon,
      light: ICPGithubIconWhite,
    },
    label: 'Github',
  },
  {
    href: 'https://web.telegram.org/k/#@mirrorS777',
    icon: {
      dark: LGTelegram,
      light: LGTelegram,
    },
    label: 'Telegram',
  },
];

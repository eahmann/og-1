import { withOGImage } from 'next-api-og-image';

enum QueryEnum {
  'logo',
  'siteName',
  'description',
  'theme',
  'templateTitle',
  'logoWidth',
  'logoHeight',
}

export default withOGImage<keyof typeof QueryEnum>({
  template: {
    html: async ({
      siteName,
      description,
      logo,
      theme,
      templateTitle,
      logoWidth,
      logoHeight,
    }): Promise<string> => {
      const query = {
        siteName: siteName ?? 'Site Name',
        description: description ?? 'Description',
        logo:
          logo ??
          'https://res.cloudinary.com/dkznztisc/image/upload/v1635865106/AWD_branding_lighter_Logo_light_b64b3316f1.svg',
        theme: theme ?? 'dark',
        templateTitle,
        logoWidth: logoWidth ?? '100',
        logoHeight,
      };

      return `
      <html>
        <head>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          <h1 class="flex flex-row text-6xl text-blue-300">${query.templateTitle}<span>💻</span></h1>
        </body>
      </html>
      `;
    },
  },
});

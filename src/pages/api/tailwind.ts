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
      <div class="h-screen w-screen bg-gray-800 flex flex-col">
        <div class="flex flex-row border-b-2 border-gray-500 justify-center p-6">
          <div class="w-1/3 mr-8">
            <img src="${query.logo}" alt="Favicon" />
          </div>
        </div>
        <div class="flex flex-col flex-grow">
              <div class="flex flex-row bg-gray-700 justify-center">
          <h1 class="text-6xl text-white p-6">${query.templateTitle}</h1>
        </div>
          <div class="flex flex-row bg-gray-700 flex-grow justify-center text-center">
            <h2 class="text-4xl text-white p-6 mx-12">${query.description}</h2>
          </div>
        </div>
        <div class="flex flex-row bg-gray-700 justify-end">
          <span class="text-xl text-white p-4"><span class="text-white">©️</span> 2021 Atomic Web Development</span>
        </div>
      </div>
    </body>
    </html>
      
      `;
    },
  },
});

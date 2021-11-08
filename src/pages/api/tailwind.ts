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
      <div class="h-screen w-screen bg-gray-800 flex flex-col text-white">
        <div class="flex flex-row border-b-2 border-gray-500 justify-center p-6">
          <div class="w-1/3 mr-8">
            <img src="https://res.cloudinary.com/dkznztisc/image/upload/v1635865106/AWD_branding_lighter_Logo_light_b64b3316f1.svg" alt="Favicon" />
          </div>
        </div>
        <div class="flex flex-col flex-grow bg-gray-700">
          <div class="grid grid-cols-2 h-full">
            <div class="flex flex-col p-6">
              <div class="flex-grow"><span class="text-4xl text-white leading-normal">${query.description}</span></div>
              <div class="flex flex-col">
                <span class="text-5xl">${query.templateTitle}</span>
                <span class="text-xl text-gray-900"><span>&#169;&nbsp;</span>2021 Atomic Web Development</span>
              </div>
              </div class="mx-auto">
              <img class="p-6 h-96 mx-auto" src="https://res.cloudinary.com/dkznztisc/image/upload/v1635957873/Illustration_411506defd.svg" alt="Favicon" />
        </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
      
      `;
    },
  },
});

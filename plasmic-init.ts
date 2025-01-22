import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "fG5MogF63FadyhqA5Aag3C";
export const projectApiToken = "DqHQ5XIofji3APSEKLdruOOUE3gc6DI1vtm9LXelljd9JIt3vaW5d7LWDG3Kv2lf633ueeuX2DEu8UPmGEdy3g";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

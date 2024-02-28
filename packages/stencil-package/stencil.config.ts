import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'a0vy',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@a0vy/uxcore',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/components/src/lib/stencil-generated/index.ts',
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};

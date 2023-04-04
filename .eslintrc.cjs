module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },

  // I decided to let the consumer add both eslint-config-monochromatic and eslint-config-monochromatic-typescript as dependencies.
  rules: {
    '@typescript-eslint/array-type': 'error',

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],

    '@typescript-eslint/ban-tslint-comment': 'error',

    '@typescript-eslint/consistent-generic-constructors': 'error',

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
    ],

    '@typescript-eslint/consistent-type-definitions': 'error',

    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        allowFunctionsWithoutTypeParameters: true,
        allowedNames: [],
        allowIIFEs: true,
      },
    ],

    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
        overrides: {
          properties: 'off',
        },
      },
    ],

    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],

    '@typescript-eslint/method-signature-style': 'error',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'is',
          'should',
          'has',
          'can',
          'did',
          'will',
        ],
      },
      {
        selector: ['variable', 'function'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['UPPER_CASE', 'camelCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const', 'global'],
        types: [
          'array',
          'boolean',
          'number',
          'string',
        ],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        modifiers: ['requiresQuotes'],
        format: null,
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
    ],

    '@typescript-eslint/no-base-to-string': 'error',

    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true, ignoreVoidOperator: true },
    ],

    '@typescript-eslint/no-dynamic-delete': 'error',

    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],

    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/no-extraneous-class': 'error',

    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: true }],

    '@typescript-eslint/no-import-type-side-effects': 'error',

    '@typescript-eslint/no-meaningless-void-operator': 'error',

    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

    '@typescript-eslint/no-non-null-assertion': 'off',

    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],

    '@typescript-eslint/no-unnecessary-type-assertion': [
      'warn',
      {
        typesToIgnore: [
          // https://typescript-eslint.io/rules/no-unnecessary-type-assertion doesn't correctly handle those.
          'Element',
          'HTMLElement',
          'HTMLAnchorElement',
          'HTMLAreaElement',
          'HTMLAudioElement',
          'HTMLBRElement',
          'HTMLBaseElement',
          'HTMLBodyElement',
          'HTMLButtonElement',
          'HTMLCanvasElement',
          'HTMLContentElement',
          'HTMLDListElement',
          'HTMLDataElement',
          'HTMLDataListElement',
          'HTMLDialogElement',
          'HTMLDivElement',
          'HTMLEmbedElement',
          'HTMLFieldSetElement',
          'HTMLFormElement',
          'HTMLFrameSetElement',
          'HTMLHRElement',
          'HTMLHeadElement',
          'HTMLHeadingElement',
          'HTMLHtmlElement',
          'HTMLIFrameElement',
          'HTMLImageElement',
          'HTMLInputElement',
          'HTMLLIElement',
          'HTMLLabelElement',
          'HTMLLegendElement',
          'HTMLLinkElement',
          'HTMLMapElement',
          'HTMLMediaElement',
          'HTMLMetaElement',
          'HTMLMeterElement',
          'HTMLModElement',
          'HTMLOListElement',
          'HTMLObjectElement',
          'HTMLOptGroupElement',
          'HTMLOptionElement',
          'HTMLOutputElement',
          'HTMLParagraphElement',
          'HTMLPictureElement',
          'HTMLPreElement',
          'HTMLProgressElement',
          'HTMLQuoteElement',
          'HTMLScriptElement',
          'HTMLSelectElement',
          'HTMLShadowElement',
          'HTMLSourceElement',
          'HTMLSpanElement',
          'HTMLStyleElement',
          'HTMLTableCaptionElement',
          'HTMLTableCellElement',
          'HTMLTableColElement',
          'HTMLTableElement',
          'HTMLTableRowElement',
          'HTMLTableSectionElement',
          'HTMLTemplateElement',
          'HTMLTextAreaElement',
          'HTMLTimeElement',
          'HTMLTitleElement',
          'HTMLTrackElement',
          'HTMLUListElement',
          'HTMLUnknownElement',
          'HTMLVideoElement',
        ],
      },
    ],

    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    '@typescript-eslint/no-unsafe-argument': 'off',

    '@typescript-eslint/no-unsafe-assignment': 'off',

    '@typescript-eslint/no-unsafe-call': 'off',

    '@typescript-eslint/no-unsafe-member-access': 'off',

    '@typescript-eslint/no-unsafe-return': 'off',

    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    '@typescript-eslint/prefer-includes': 'error',

    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    '@typescript-eslint/prefer-optional-chain': 'error',

    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    '@typescript-eslint/restrict-plus-operands': ['error', { allowAny: true }],

    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: true,
        allowNullish: true,
        allowRegExp: true,
      },
    ],

    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    '@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: true }],
  },

  /*   overrides: [
      {
        files: [
          '*.ts',
          '*.mts',
          '*.cts',
          '*.tsx',
        ],

        extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],

        rules: {
          '@typescript-eslint/array-type': 'error',

          '@typescript-eslint/ban-ts-comment': [
            'error',
            {
              'ts-expect-error': 'allow-with-description',
              'ts-ignore': 'allow-with-description',
              'ts-nocheck': 'allow-with-description',
              'ts-check': 'allow-with-description',
            },
          ],

          '@typescript-eslint/ban-tslint-comment': 'error',

          '@typescript-eslint/consistent-generic-constructors': 'error',

          '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }],

          '@typescript-eslint/consistent-type-definitions': 'error',

          '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
              allowExpressions: true,
              allowTypedFunctionExpressions: true,
              allowHigherOrderFunctions: true,
              allowDirectConstAssertionInArrowFunctions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: true,
              allowFunctionsWithoutTypeParameters: true,
              allowedNames: [],
              allowIIFEs: true,
            },
          ],

          '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
              accessibility: 'no-public',
              overrides: {
                properties: 'off',
              },
            },
          ],

          '@typescript-eslint/explicit-module-boundary-types': [
            'error',
            {
              allowArgumentsExplicitlyTypedAsAny: true,
              allowDirectConstAssertionInArrowFunctions: true,
              allowedNames: [],
              allowHigherOrderFunctions: true,
              allowTypedFunctionExpressions: true,
            },
          ],

          '@typescript-eslint/method-signature-style': 'error',

          '@typescript-eslint/naming-convention': [
            'error',
            {
              selector: 'memberLike',
              modifiers: ['private'],
              format: ['camelCase'],
              leadingUnderscore: 'require',
            },
            {
              selector: 'variable',
              types: ['boolean'],
              format: ['PascalCase'],
              prefix: [
                'is',
                'should',
                'has',
                'can',
                'did',
                'will',
              ],
            },
            {
              selector: ['variable', 'function'],
              format: ['camelCase'],
              leadingUnderscore: 'allow',
            },
            {
              selector: 'variable',
              modifiers: ['const'],
              format: ['UPPER_CASE'],
            },
            {
              selector: 'typeParameter',
              format: ['PascalCase'],
              prefix: ['T'],
            },
            {
              selector: 'interface',
              format: ['PascalCase'],
              custom: {
                regex: '^I[A-Z]',
                match: false,
              },
            },
            {
              selector: [
                'classProperty',
                'objectLiteralProperty',
                'typeProperty',
                'classMethod',
                'objectLiteralMethod',
                'typeMethod',
                'accessor',
                'enumMember',
              ],
              format: null,
              modifiers: ['requiresQuotes'],
            },
            {
              selector: 'variable',
              modifiers: ['destructured'],
              format: null,
            },
          ],

          '@typescript-eslint/no-base-to-string': 'error',

          '@typescript-eslint/no-confusing-non-null-assertion': 'error',

          '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true, ignoreVoidOperator: true }],

          '@typescript-eslint/no-dynamic-delete': 'error',

          '@typescript-eslint/no-empty-interface': [
            'error',
            {
              allowSingleExtends: false,
            },
          ],

          '@typescript-eslint/no-explicit-any': 'off',

          '@typescript-eslint/no-extraneous-class': 'error',

          '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: true }],

          '@typescript-eslint/no-import-type-side-effects': 'error',

          '@typescript-eslint/no-meaningless-void-operator': 'error',

          '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

          '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

          '@typescript-eslint/no-non-null-assertion': 'off',

          '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

          '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],

          '@typescript-eslint/no-unnecessary-type-arguments': 'error',

          '@typescript-eslint/no-unsafe-argument': 'off',

          '@typescript-eslint/no-unsafe-assignment': 'off',

          '@typescript-eslint/no-unsafe-call': 'off',

          '@typescript-eslint/no-unsafe-member-access': 'off',

          '@typescript-eslint/no-unsafe-return': 'off',

          '@typescript-eslint/non-nullable-type-assertion-style': 'error',

          '@typescript-eslint/prefer-includes': 'error',

          '@typescript-eslint/prefer-nullish-coalescing': 'error',

          '@typescript-eslint/prefer-optional-chain': 'error',

          '@typescript-eslint/prefer-reduce-type-parameter': 'error',

          '@typescript-eslint/prefer-string-starts-ends-with': 'error',

          '@typescript-eslint/restrict-plus-operands': ['error', { allowAny: true }],

          '@typescript-eslint/restrict-template-expressions': [
            'error',
            {
              allowNumber: true,
              allowBoolean: true,
              allowAny: true,
              allowNullish: true,
              allowRegExp: true,
            },
          ],

          '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

          '@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: true }],
        },
      },

      //region Use when @typescript-eslint is used globally.

      {
        files: [
          '*.js',
          '*.mjs',
          '*.cjs',
          '*.jsx',
        ],

        rules: {
          '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: true }],

          '@typescript-eslint/no-unsafe-argument': 'off',

          '@typescript-eslint/no-unsafe-assignment': 'off',

          '@typescript-eslint/no-unsafe-call': 'off',

          '@typescript-eslint/no-unsafe-member-access': 'off',

          '@typescript-eslint/no-unsafe-return': 'off',
        },
      },

      {
        files: ['*.cjs', '*.cts'],

        rules: {
          '@typescript-eslint/no-var-requires': 'off',
        },
      },

      //endregion
    ], */
};

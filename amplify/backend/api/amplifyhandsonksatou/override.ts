import { AmplifyApiRestResourceStackTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiRestResourceStackTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    resources.addCfnParameter(
        {
          type: 'String',
          description:
            'The id of an existing User Pool to connect. If this is changed, a user pool will not be created for you.',
          default: 'NONE',
        },
        'AuthCognitoUserPoolId',
        {
          'Fn::GetAtt': ['authprojectname9f8fc4db', 'Outputs.UserPoolId'],
        }
      );

    resources.restApi.addPropertyOverride('Body.securityDefinitions', {
        Cognito: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            'x-amazon-apigateway-authtype': 'cognito_user_pools',
            'x-amazon-apigateway-authorizer': {
            type: 'cognito_user_pools',
            providerARNs: [
                {
                'Fn::Join': [
                    '',
                    [
                    'arn:aws:cognito-idp:',
                    {
                        Ref: 'AWS::Region',
                    },
                    ':',
                    {
                        Ref: 'AWS::AccountId',
                    },
                    ':userpool/',
                    {
                        Ref: 'AuthCognitoUserPoolId',
                    },
                    ],
                ],
                },
            ],
            },
        },
    });

    for (const path in resources.restApi.body.paths) {
        resources.restApi.addPropertyOverride(
            `Body.paths.${path}.x-amazon-apigateway-any-method.parameters`,
            [
            ...resources.restApi.body.paths[path]['x-amazon-apigateway-any-method']
                .parameters,
            {
                name: 'Authorization',
                in: 'header',
                required: false,
                type: 'string',
            },
            ]
        );
        resources.restApi.addPropertyOverride(
            `Body.paths.${path}.x-amazon-apigateway-any-method.security`,
            [
            {
                Cognito: [],
            },
            ]
        );
    }
}

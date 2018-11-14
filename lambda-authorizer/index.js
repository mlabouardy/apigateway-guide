const TOKEN = process.env.TOKEN;

const generatePolicy = (effect, methodArn) => {
    return {
        'policyDocument': {
            'Version': '2012-10-17',
            'Statement': [
                {
                    'Sid': '1',
                    'Action': 'execute-api:Invoke',
                    'Effect': effect,
                    'Resource': methodArn
                }
            ]
        }
    }
}

exports.handler = async (event, context) => {
    if(event.authorizationToken == TOKEN){
        return generatePolicy('ALLOW', event.methodArn)
    }
    return generatePolicy('DENY', event.methodArn)
}

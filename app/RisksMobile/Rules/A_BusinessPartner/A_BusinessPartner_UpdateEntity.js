export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/service1.service').isDraftEnabled('A_BusinessPartner')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/A_BusinessPartner/A_BusinessPartner_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_BusinessPartner'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/A_BusinessPartner/A_BusinessPartner_UpdateEntity.action');
    }
}
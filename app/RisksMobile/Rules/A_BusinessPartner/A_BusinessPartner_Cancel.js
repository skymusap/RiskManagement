export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/service1.service').isDraftEnabled('A_BusinessPartner')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BusinessPartner'
                },
                'OnSuccess': '/RisksMobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/CloseModalPage_Cancel.action');
    }
}
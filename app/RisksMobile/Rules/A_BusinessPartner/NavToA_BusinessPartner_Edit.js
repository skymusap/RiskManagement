export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/service1.service').isDraftEnabled('A_BusinessPartner')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BusinessPartner'
                },
                'OnSuccess': '/RisksMobile/Actions/A_BusinessPartner/NavToA_BusinessPartner_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/A_BusinessPartner/NavToA_BusinessPartner_Edit.action');
    }
}
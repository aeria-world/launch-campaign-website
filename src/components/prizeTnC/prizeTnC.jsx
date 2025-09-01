import { Col } from "reactstrap";

const PrizeTermsAndConditionsComponent = ({ endDate }) => {
    const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        if (Number.isNaN(date.getTime())) return "TBA";
        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(date);
    };

    return (
        <>
            <div className="prize-tnc-heading">
                <Col className="text-start">
                    Terms & Conditions
                </Col>
            </div>
            <div className="prize-tnc-instructions">
                <div className="instructions">
                    <ol>
                        <li>
                            Winners will be declared on {formatDate(endDate)}. Prizes will be delivered within 30 days of winner verification. Delivery method will be determined by the Sponsor.
                        </li>
                        <li>
                            Prizes are non-transferable, non-exchangeable, and cannot be redeemed for cash unless specified by the Sponsor. All prize-related taxes are the winner’s responsibility.
                        </li>
                        <li>
                            Participant data will be collected and used in accordance with [Your Company Name]'s Privacy Policy, available at [Privacy Policy URL]. Data will not be shared with third parties except as required for prize fulfillment.
                        </li>
                        <li>
                            The Sponsor is not responsible for lost, late, or misdirected entries, technical failures, or other issues affecting participation. The Contest may be canceled or modified due to unforeseen circumstances, with notice provided to participants.
                        </li>
                        <li>
                            Participation constitutes agreement to these terms and the Sponsor's decisions, which are final and binding. For further queries or details contact gravity@perstige.com or call us at +91-812677890
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default PrizeTermsAndConditionsComponent;
import { Container } from "reactstrap";
import {
  UserHeaderComponent,
  ImageSectionComponent,
  PrizeGiftComponent,
} from "../index";

const IsBetterLuckNextTime = ({ contestId, phaseInfo, enrollmentGift }) => {
  return (
    <>
      <Container fluid className="reward-container">
        <div className="reward-box">
          <UserHeaderComponent customerName={phaseInfo.customerName} />

          <ImageSectionComponent
            isBetterLuck={true}
            isJackpot={false}
            customClassName="betterLuckNextTimeBg"
          />

          <p className="betterLuckNextTimeHeading">
            Stay tuned! The next exciting contest <br /> is just around the
            corner!
          </p>

          {phaseInfo?.phaseEndDate !== "N/A" ? (
            <PrizeGiftComponent
              contestId={contestId}
              title="Mega Jackpot"
              prizeInfo={phaseInfo?.prizeInfo || {}}
              endDate={phaseInfo?.endDate || ""}
              textBackgroundColor="linear-gradient(100deg, #4F46E5 0%, #27218D 100%)"
              imageBackgroundColor="rgba(255, 255, 255, 0.20)"
              phaseId={phaseInfo.phaseId}
              isEnrollment={true}
              enrollmentGift={enrollmentGift}
            />
          ) : null}
        </div>
      </Container>
    </>
  );
};

export default IsBetterLuckNextTime;

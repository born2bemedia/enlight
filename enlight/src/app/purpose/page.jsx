import "@/public/scss/purpose.scss";
import PurposeHero from "./_components/PurposeHero";
import PurposeStepOne from "./_components/PurposeStepOne";
import PurposeStepTwo from "./_components/PurposeStepTwo";
import PurposeLast from "./_components/PurposeLast";

function PurposePage() {
  return (
    <>
      <PurposeHero />
      <div className="purpose-flow">
        <div className="_container">
          <div className="purpose-flow__inner">
            <PurposeStepOne />
            <PurposeStepTwo />
            <PurposeLast />
          </div>
        </div>
      </div>
    </>
  );
}

export default PurposePage;

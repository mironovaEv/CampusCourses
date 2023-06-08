/* eslint-disable object-curly-newline */
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import SetMarkModal from './SetMarkModal';

const MarksForStudents = ({ midtermResult, finalResult, marks, student }) => {
  const midtermMark = marks(midtermResult);
  const finalMark = marks(finalResult);
  const [showMid, setShowMid] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const handleCloseMid = () => setShowMid(false);
  const handleCloseFinal = () => setShowFinal(false);
  return (
    <>
      <div className="col-4">
        <Card.Text
          className="m-0 d-inline link-primary text-decoration-underline"
          role="button"
          onClick={() => setShowMid(true)}
        >
          Промежуточная аттестация
        </Card.Text>
        <span> - </span>
        <div className="d-inline">
          <Card.Text className={`text-wrap badge bg-${midtermMark.resultColor}`}>{midtermMark.resultText}</Card.Text>
        </div>
      </div>
      <div className="col-4">
        <Card.Text
          className="d-inline link-primary text-decoration-underline"
          role="button"
          onClick={() => setShowFinal(true)}
        >
          Финальная аттестация
        </Card.Text>
        <span> - </span>
        <div className="d-inline">
          <Card.Text className={`text-wrap badge bg-${finalMark.resultColor}`}>{finalMark.resultText}</Card.Text>
        </div>
      </div>
      <SetMarkModal show={showMid} onHide={handleCloseMid} student={student} markType="Midterm" mark={midtermResult} />
      <SetMarkModal show={showFinal} onHide={handleCloseFinal} student={student} markType="Final" mark={finalResult} />
    </>
  );
};

export default MarksForStudents;

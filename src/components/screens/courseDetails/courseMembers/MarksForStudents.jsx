import Card from 'react-bootstrap/Card';

const MarksForTeacherAdmin = ({ midtermResult, finalResult, marks }) => {
  const midtermMark = marks(midtermResult);
  const finalMark = marks(finalResult);
  return (
    <>
      <div className="col-4">
        <Card.Text className="m-0 d-inline">Промежуточная аттестация - </Card.Text>
        <div className="d-inline">
          <Card.Text className={`text-wrap badge bg-${midtermMark.resultColor}`}>{midtermMark.resultText}</Card.Text>
        </div>
      </div>
      <div className="col-4">
        <Card.Text className="d-inline">Финальная аттестация - </Card.Text>
        <div className="d-inline">
          <Card.Text className={`text-wrap badge bg-${finalMark.resultColor}`}>{finalMark.resultText}</Card.Text>
        </div>
      </div>
    </>
  );
};

export default MarksForTeacherAdmin;

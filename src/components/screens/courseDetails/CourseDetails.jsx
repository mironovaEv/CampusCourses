import Container from 'react-bootstrap/esm/Container';
import CourseData from './courseData/CourseData';
import CourseDescription from './courseDescription/CourseDescription';
import CourseMembers from './courseMembers/CourseMembers';

function CourseDetails({ courseDetails }) {
  return (
    <div>
      <Container>
        <h1 className="pt-3">{courseDetails.name}</h1>
        <CourseData
          teachers={courseDetails.teachers}
          name={courseDetails.name}
          id={courseDetails.id}
          status={courseDetails.status}
          year={courseDetails.startYear}
          semester={courseDetails.semester}
          places={courseDetails.maximumStudentsCount}
          studentsCount={courseDetails.studentsEnrolledCount}
          students={courseDetails.students}
          applications={courseDetails.studentsInQueueCount}
        />
        <CourseDescription
          teachers={courseDetails.teachers}
          students={courseDetails.students}
          requirements={courseDetails.requirements}
          annotations={courseDetails.annotations}
          notifications={courseDetails.notifications}
        />
        <CourseMembers
          students={courseDetails.students}
          teachers={courseDetails.teachers}
          courseId={courseDetails.id}
        />
      </Container>
    </div>
  );
}

export default CourseDetails;
